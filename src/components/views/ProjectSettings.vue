<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="rounded-lg shadow">
      <div class="bg-white">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
          <h2 class="text-xl leading-6 font-medium text-sky-700">
            Project Settings
          </h2>
          <p
            v-if="selectedProject"
            class="mt-1 text-sm text-gray-500"
          >
            Adjust some default values for working with project: <span class="text-primary italic">{{ selectedProject.name }}</span>
          </p>
          <p v-else
          class="mt-1 text-sm text-gray-500"
          >
            You can set some default values for a selected project.
          </p>
        </div>
        <div
          v-if="selectedProject"
          class="px-4 py-5 sm:p-6"
        >
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-700">Default Values</h3>
              <p class="mt-1 text-sm text-gray-500">
                This information will be used when creating new time tracker records for this project.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form
                class="space-y-6"
                action="#"
                method="POST"
              >
                <div class="grid grid-cols-1 gap-6">
                  <default-focal-point></default-focal-point>
                  <default-time-period></default-time-period>
                  <default-sort-results></default-sort-results>
                  <default-task-description></default-task-description>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          v-else
          class="h-72 flex items-center px-4"
        >
          <no-project-selected message="You need to select a project from the dropdown to be able to set some values."></no-project-selected>
        </div>
      </div>
      <div
        v-if="selectedProject"
        class="px-4 py-3 bg-gray-50 text-right sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update Project Settings
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import NoProjectSelected from '../messages/NoProjectSelected.vue'
import DefaultTimePeriod from '../forms/project/DefaultTimePeriod.vue'
import DefaultFocalPoint from '../forms/project/DefaultFocalPoint.vue'
import DefaultSortResults from '../forms/project/DefaultSortResults.vue'
import DefaultTaskDescription from '../forms/project/DefaultTaskDescription.vue'


export default {
    components: {
        NoProjectSelected,
        DefaultTimePeriod,
        DefaultFocalPoint,
        DefaultSortResults,
        DefaultTaskDescription,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.selectedProject,
        }),
    },

}
</script>
