<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <div class="bg-white border shadow rounded-lg">
          <dl class="
                            grid grid-cols-1
                            rounded-lg
                            bg-white
                            overflow-hidden
                            shadow
                            divide-y divide-gray-200
                            md:grid-cols-4 md:divide-y-0 md:divide-x
                        ">
            <div
              v-for="item in stats"
              :key="item.name"
              class="px-4 py-5 sm:p-4"
            >
              <dt class="text-base font-normal text-gray-900">
                {{ item.name }}
              </dt>
              <dd class="
                                    mt-1
                                    flex
                                    justify-between
                                    items-baseline
                                    md:block
                                    lg:flex
                                ">
                <div :class="[
                                        item[period] === '0:00'
                                            ? 'text-gray-300'
                                            : item.name === 'Hours Overtime'
                                            ? 'text-yellow-600'
                                            : 'text-teal-600',
                                        'flex items-baseline text-2xl font-semibold',
                                    ]">
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
        <select-project-menu></select-project-menu>
        <right-column-tabs v-if="selectedProject"></right-column-tabs>
        <hour-stats v-if="!selectedProject"></hour-stats>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HourStats from '../stats/HourStats.vue'
import RightColumnTabs from './Tabs/RightColumnTabs.vue'
import TaskList from '../tables/TaskList.vue'
import SelectProjectMenu from '../forms/SelectProjectMenu.vue'

//TODO: fetch from API
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
        RightColumnTabs,
        TaskList,
        SelectProjectMenu,
        RightColumnTabs,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.filters.project,
            period: (state) => state.filters.period,
        }),
    },
    setup() {
        return {
            stats,
        }
    },
}
</script>
