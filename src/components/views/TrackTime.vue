
<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">

        <new-time-record></new-time-record>

        <div class="rounded-lg bg-white overflow-hidden shadow">
          <div class="p-6 text-center">
            <time-period-filter></time-period-filter>
          </div>
        </div>

        <task-list></task-list>

      </div>

      <!-- Right column -->
      <div class="grid grid-cols-1 gap-4">

        <HourStats v-if="!selectedProject" />

        <section
          v-if="!selectedProject"
          aria-labelledby="section-2-title"
        >
          <div class="rounded-lg overflow-hidden shadow">
            <div class="bg-white">
              <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  For consolidated view we can add here some details about missing / overtime hours for each project...
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section
          v-if="selectedProject"
          aria-labelledby="section-2-title"
        >
          <div class="rounded-lg bg-white overflow-hidden shadow">
            <div class="bg-white">
              <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Project Details
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  There are some configurations that you can make to this project.
                </p>
              </div>
              <div class="p-6 ">
                <h3 class="mb-3 text-primary">Current Focal Point</h3>
                <avatar-with-name
                  :name="selectedProject.focal.name"
                  :email="selectedProject.focal.email"
                  :avatar="selectedProject.focal.avatar"
                ></avatar-with-name>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <router-link
                to="/project/settings"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >Go to project configuration</router-link>
            </div>
          </div>
        </section>

        <section
          v-if="selectedProject"
          aria-labelledby="section-2-title"
        >
          <div class="rounded-lg overflow-hidden shadow">
            <div class="bg-white">
              <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Stats for the selected project & period!!!!
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  We have to add here some stats about the <strong>selected project</strong> and within the time period selected.
                </p>
                <ul class="mt-1 text-sm text-gray-500">
                  <li class="">Expected hours</li>
                  <li class="">Worked hours</li>
                  <li class="">Overtime hours</li>
                  <li class="">Missing hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          v-if="selectedProject"
          aria-labelledby="section-2-title"
        >
          <div class="rounded-lg overflow-hidden shadow">
            <div class="bg-white">
              <div class="px-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Stats for the selected project & current month
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  We have to add here some stats about the <strong>selected project</strong> and running month.
                </p>
                <ul class="mt-1 text-sm text-gray-500">
                  <li class="">Expected hours</li>
                  <li class="">Worked hours</li>
                  <li class="">Overtime hours</li>
                  <li class="">Missing hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HourStats from '../stats/HourStats.vue'
import NewTimeRecord from '../forms/NewTimeRecord.vue'
import AvatarWithName from '../users/AvatarWithName.vue'
import TimePeriodFilter from '../filters/TimePeriodFilter.vue'
import TaskList from '../tables/TaskList.vue'

export default {
    components: {
        HourStats,
        NewTimeRecord,
        AvatarWithName,
        TimePeriodFilter,
        TaskList,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.selectedProject,
        }),
    },
}
</script>
