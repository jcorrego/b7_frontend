<template>
  <div>
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
      <h3 class="text-lg font-medium leading-6 text-gray-700">
        Project Default Values
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        This information will be used when creating new time
        tracker records for this project.
      </p>
    </div>
    <div class="px-4 py-5">
      <form
        class="space-y-6"
        action="#"
        method="POST"
      >
        <div class="grid grid-cols-1 gap-6">
          <focal-point
            :initial="focalPoint"
            :onUpdate="setNewRecordFocalPoint"
          ></focal-point>
          <default-time-period></default-time-period>
          <default-sort-results></default-sort-results>
          <task-description
            :updateTaskCategory="
                                        setNewRecordTaskCategory
                                    "
            :updateTaskDescription="
                                        setNewRecordTaskDescription
                                    "
          ></task-description>
        </div>
      </form>
    </div>
  </div>
  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
      <button
        v-if="selectedTab == 'project'"
        type="submit"
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
        Update config
      </button>

    </div>
</template>

<script>
import FocalPoint from '../../forms/FocalPoint.vue'
import DefaultTimePeriod from '../../forms/project/DefaultTimePeriod.vue'
import DefaultSortResults from '../../forms/project/DefaultSortResults.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        FocalPoint,
        DefaultTimePeriod,
        DefaultSortResults,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.filters.project,
            focalPoint: (state) => state.newRecord.focalPoint,
            descriptions: (state) => state.descriptions,
            hours: (state) => state.newRecord.hours,
            date: (state) => state.newRecord.date,
            comments: (state) => state.newRecord.comments,
            taskDescription: (state) => state.newRecord.taskDescription,
        }),
    },
    methods: {
        ...mapActions([
            'search',
            'setNewRecordDate',
            'setNewRecordHours',
            'setNewRecordComments',
            'setNewRecordFocalPoint',
            'setNewRecordTaskCategory',
            'setNewRecordTaskDescription',
            'createRecord',
        ]),
    },
}
</script>
