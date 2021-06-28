<template>
  <div class="bg-white shadow overflow-hidden rounded-lg">
    <div class="py-5 flex border-b items-center">
      <div class="px-3">
        <i class="fad fa-stopwatch fa-3x text-secondary"></i>
      </div>
      <div class="">
        <p class="text-base font-normal text-gray-900 truncate">{{ title }}</p>
        <div class="flex items-baseline">
          <p class="text-2xl font-semibold text-primary">
            {{ value }}
          </p>
          <span class="ml-2 text-sm font-medium text-gray-500"> of {{ expected }},</span>
          <p class="text-green-600 ml-2 flex items-baseline text-sm font-semibold">
            behind by {{ behind }}
          </p>
        </div>
      </div>
    </div>
    <ul class="divide-y divide-gray-200">
      <li v-for="project in $store.state.projects" :key="project.id" class="px-6 py-4 flex justify-between">
        <div class="truncate text-gray-500 text-sm">{{ project.name }}</div>
        <div :class="[project.status === 'ok' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="project.status === 'ok'" class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="truncate">{{ project.hours }}</span>
          </div>
      </li>
    </ul>
  </div>

</template>

<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'


export default {
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
  },
  setup() {
    return {
      title: 'Monthly expected hours to date',
      value: '132h 30m',
      expected: '136h',
      behind: '3h 30m',
      change: '122', changeType: 'increase',
      items:[
        {id:1},
        {id:2},
      ],
    }
  },
}
</script>
