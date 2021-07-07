<template>
  <TransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      as="div"
      @close="closeModal"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
          </TransitionChild>

          <span
            class="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div class="
                                inline-block
                                w-full
                                max-w-md
                                p-6
                                my-8
                                overflow-hidden
                                text-left
                                align-middle
                                transition-all
                                transform
                                bg-white
                                shadow-xl
                                rounded-2xl
                            ">
              <DialogTitle
                as="h3"
                class="
                                    text-lg
                                    font-medium
                                    leading-6
                                    mb-5
                                    text-gray-900
                                "
              >
                Delete tasks
              </DialogTitle>
              <div class="mt-4">
                <label
                  for="duplicateTo"
                  class="
                                        block
                                        text-sm
                                        font-medium
                                        mt-2
                                        text-gray-700
                                    "
                >
                  Are you sure you want to delete the selected tasks?
                </label>
                
              </div>

              <div class="mt-4 flex justify-end">
                <cancel-button @click="closeModal">Cancel</cancel-button>
                <submit-button class="bg-red-600" @click="onConfirm">Delete</submit-button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, watch } from 'vue'
import SubmitButton from '../SubmitButton.vue'
import CancelButton from '../CancelButton.vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue'

export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
        SubmitButton,
        CancelButton,
    },
    props: ['isOpen', 'removeRecords', 'onConfirm'],
    emits: ['update:isOpen', 'update:removeRecords'],
    setup(props, { emit }) {
        const selectedRemoveRecords = ref(props.removeRecords)

        watch(selectedRemoveRecords, (value) => {
            emit('update:removeRecords', value)
        })

        return {
        selectedRemoveRecords,
        closeModal() {
            emit('update:isOpen', false)
        },
        }
    },
}
</script>
