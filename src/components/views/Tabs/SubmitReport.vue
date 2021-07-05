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
        "
    >
        ok
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
        <submit-button @click="submit">Search</submit-button>
    </div>
</template>

<script>
import FocalPointFilter from '../../forms/FocalPoint.vue'
import SubmitButton from '../../forms/SubmitButton.vue'
import TaskDescriptionFilter from '../../forms/TaskDescription.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        FocalPointFilter,
        TaskDescriptionFilter,
        SubmitButton,
    },
    computed: {
        ...mapState({
            focalPoint: (state) => state.filters.focalPoint,
        }),
    },
    methods: {
        submit(){
            // Submit report..
        },
        ...mapActions([
            'setFocalPointFilter',
            'setTaskCategoryFilter',
            'setTaskDescriptionFilter',
        ]),
    },
}
</script>

<style></style>
