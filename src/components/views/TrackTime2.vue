
<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">

        <div
          v-if="selectedProject"
          class="bg-white shadow rounded-lg overflow-hidden"
        >
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h2 class="text-xl leading-6 font-medium text-sky-700">
                  {{ selectedProject.name }}
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                  There are some configurations that you can make to this project.
                </p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <router-link
                  to="/project/settings"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >Go to project configuration</router-link>
              </div>
            </div>
          </div>
          <dl
            v-if="selectedProject"
            class=" grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"
          >
            <div
              v-for="item in stats2"
              :key="item.name"
              class="px-4 py-5 sm:p-6"
            >
              <dt class="text-base font-normal text-gray-900">
                {{ item.name }}
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl font-semibold text-teal-600">
                  {{ item.stat }}
                  <span class="ml-2 text-sm font-medium text-gray-500"> from {{ item.previousStat }} </span>
                </div>

                <div :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
                  <ArrowSmUpIcon
                    v-if="item.changeType === 'increase'"
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <ArrowSmDownIcon
                    v-else
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                  <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                  {{ item.change }}
                </div>
              </dd>
            </div>
          </dl>

        </div>


        <task-list></task-list>

      </div>

      <!-- Right column -->
      <div class="grid grid-cols-1 gap-4">
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
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'

const stats = [
    { name: 'Total Hours', stat: '132h 35m' },
    { name: 'Avg. Weekly Hours', stat: '40h 10m' },
    { name: 'Avg. Daily Hours', stat: '8h 2m' },
]
const stats2 = [
    {
        name: 'Total Hours',
        stat: '132:35',
        previousStat: '130:10',
        change: '12%',
        changeType: 'increase',
    },
    {
        name: 'Avg. Weekly Hours',
        stat: '40:10',
        previousStat: '40:05',
        change: '2.02%',
        changeType: 'increase',
    },
    {
        name: 'Avg. Daily Hours',
        stat: '08:02',
        previousStat: '08:10',
        change: '4.05%',
        changeType: 'decrease',
    },
]

export default {
    components: {
        HourStats,
        NewTimeRecord,
        TaskList,
        ArrowSmDownIcon,
        ArrowSmUpIcon,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.selectedProject,
        }),
    },
    setup() {
        return {
            stats,
            stats2,
        }
    },
}
</script>
