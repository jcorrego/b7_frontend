<template>
  <div class="flex items-center justify-between">
    <div>
      <span class="relative inline-flex shadow-sm rounded-md">
        <button
          @click="setPeriod('daily')"
          type="button"
          :class="[period == 'daily' ? 'bg-secondary text-white hover:bg-teal-400': 'bg-white text-gray-700 hover:bg-gray-50',  'relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']"
        >
          Daily
        </button>
        <button
          @click="setPeriod('weekly')"
          type="button"
          :class="[period == 'weekly'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']"
        >
          Weekly
        </button>
        <button
          @click="setPeriod('monthly')"
          type="button"
          :class="[period == 'monthly'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']"
        >
          Monthly
        </button>

        <button
          @click="setPeriod('range')"
          type="button"
          :class="[period == 'range'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']"
        >
          Range
        </button>
      </span>
    </div>
    <div>
      <el-date-picker
        v-if="period == 'daily'"
        v-model="day"
        :disabled-date="disabledDate"
        type="date"
        placeholder="Pick a day"
      >
      </el-date-picker>
      <el-date-picker
        v-if="period == 'weekly'"
        v-model="week"
        :disabled-date="disabledDate"
        type="week"
        format="[Week] ww"
        placeholder="Pick a week"
      >
      </el-date-picker>
      <el-date-picker
        v-if="period == 'monthly'"
        v-model="month"
        :disabled-date="disabledDate"
        type="month"
        placeholder="Pick a month"
      >
      </el-date-picker>
      <el-date-picker
      v-if="period == 'range'"
        v-model="range"
        :disabled-date="disabledDate"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            disabledDate(time) {
                return time.getTime() > Date.now()
            },
            week: '',
            month: '',
            day: '',
            range: '',
            shortcuts: [
                {
                    text: 'Last week',
                    value: (() => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        return [start, end]
                    })(),
                },
                {
                    text: 'Last month',
                    value: (() => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        return [start, end]
                    })(),
                },
                {
                    text: 'Last 3 months',
                    value: (() => {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        return [start, end]
                    })(),
                },
            ],
        }
    },
    computed: {
        ...mapState({
            period: (state) => state.period,
        }),
    },
    methods: {
        ...mapMutations(['setPeriod']),
    },
}
</script>
