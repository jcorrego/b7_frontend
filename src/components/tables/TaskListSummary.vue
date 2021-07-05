<template>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            stats: [
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
            ],
        }
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.filters.project,
            period: (state) => state.filters.period,
            actAsPM: (state) => state.actAsPM,
        }),
    },
}
</script>
