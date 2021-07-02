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
        <focal-point-filter
            :initial="focalPoint"
            :onUpdate="setFocalPointFilter"
        ></focal-point-filter>
        <task-description-filter
            :updateTaskCategory="setTaskCategoryFilter"
            :updateTaskDescription="setTaskDescriptionFilter"
        ></task-description-filter>
    </div>
</template>

<script>
import FocalPointFilter from '../forms/project/FocalPoint.vue'
import TaskDescriptionFilter from '../forms/project/TaskDescription.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        FocalPointFilter,
        TaskDescriptionFilter,
    },
    computed: {
        ...mapState({
            focalPoint: (state) => state.filters.focalPoint,
        }),
    },
    methods: {
        ...mapActions([
            'setFocalPointFilter',
            'setTaskCategoryFilter',
            'setTaskDescriptionFilter',
        ]),
    },
}
</script>

<style></style>
