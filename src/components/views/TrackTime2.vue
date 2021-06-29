
<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">

        <div
          class="bg-white shadow rounded-lg overflow-hidden"
        >
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h2 class="text-xl leading-6 font-medium text-sky-700">
                  <span v-if="selectedProject"><span class="text-gray-400 text-lg">Project:</span> {{ selectedProject.name }}</span>
                  <span v-else>All Projects</span>
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                  <span v-if="selectedProject">Displaying information related to this project.</span>
                  <span v-else>Displaying consolidated information for {{ $store.state.projects.length }} projects.</span>
                </p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <!-- <router-link
                  to="/project/settings"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >Project configuration</router-link> -->
              </div>
            </div>
          </div>
          <dl
            class=" grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x"
          >
            <div
              v-for="item in stats"
              :key="item.name"
              class="px-4 py-5 sm:p-6"
            >
              <dt class="text-base font-normal text-gray-900">
                {{ item.name }}
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div :class="[item[period] === '0:00'?'text-gray-300': item.name ==='Hours Overtime'?'text-yellow-600': 'text-teal-600','flex items-baseline text-2xl font-semibold']">
                  {{ item[period] }}
                </div>
              </dd>
            </div>
          </dl>

        </div>

        <task-list></task-list>

      </div>

      <!-- Right column -->
      <div class="grid grid-cols-1 gap-4 sticky top-0">
        <new-time-record :narrow="true"></new-time-record>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HourStats from '../stats/HourStats.vue'
import NewTimeRecord from '../forms/NewTimeRecord.vue'
import TaskList from '../tables/TaskList.vue'

const stats = [
    {
        name: 'Hours Expected',
        daily: '8:00',
        weekly: '40:00',
        monthly: '160:00',
        range: '78:00',
        multiple: '78:00',
    },
    {
        name: 'Hours Worked',
        daily: '7:30',
        weekly: '18:00',
        monthly: '164:00',
        range: '77:00',
        multiple: '77:00',
    },
    {
        name: 'Hours Missing',
        daily: '0:30',
        weekly: '22:00',
        monthly: '0:00',
        range: '1:00',
        multiple: '1:00',
    },
    {
        name: 'Hours Overtime',
        daily: '0:00',
        weekly: '0:00',
        monthly: '4:00',
        range: '0:00',
        multiple: '0:00',
    },
]

export default {
    components: {
        HourStats,
        NewTimeRecord,
        TaskList,
    },
    computed: {
        ...mapState({
          selectedProject: state => state.selectedProject,
          period: state => state.period,
        }),
    },
    setup() {
        return {
            stats,
        }
    },
}
</script>
