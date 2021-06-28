<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <button @click="value = daily" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
      Daily
    </button>
    <button @click="value = weekly" type="button" :class="[value == 'weekly'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium   focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']">
      Weekly
    </button>
    <button @click="value = monthly" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
      Monthly
    </button>
  </span>
</template>

<script>
export default {
    data() {
        return {
            options:[
                {key: 'daily', label: 'Daily'},
                {key: 'weekly', label: 'Weekly'},
                {key: 'monthly', label: 'Monthly'},
            ],
            value: 'weekly'
        }
    }
}
</script>
