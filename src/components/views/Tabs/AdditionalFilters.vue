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
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
     <button
        v-if="selectedTab == 'search'"
        type="submit"
        @click="search"
        class="
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-transparent
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-white
                        bg-teal-600
                        hover:bg-teal-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-teal-500
                        disabled:opacity-50 disabled:cursor-not-allowed
                    "
      >
        Search
      </button>
    </div>
</template>

<script>
import FocalPointFilter from '../../forms/FocalPoint.vue'
import TaskDescriptionFilter from '../../forms/TaskDescription.vue'
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
