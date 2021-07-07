<template>
    <div
        class="
            px-4
            py-5
            border-b border-gray-200
            sm:px-6
            rounded-lg
            grid grid-cols-1
            gap-y-6 gap-x-4
            overflow-hidden
        "
    >

      <div class="text-center text-center text-md text-gray-500">
        Please preview your monthly report before submitting
      </div>

      <div class="px-4 py-3 text-center sm:px-6 rounded-b-lg">
        <submit-button @click="submit">Preview report</submit-button>
        <submit-button @click="submit" class="bg-primary hover:bg-sky-500 focus:ring-sky-500">Submit report</submit-button>
      </div>

    </div>

</template>

<script>

import SubmitButton from '../../forms/SubmitButton.vue'
export default {
    components: {
        SubmitButton,
    },
    data(){
        return {

        }
    },
    methods: {
        submit(){
            // Submit report..
        },
    },
}
</script>

<style></style>
