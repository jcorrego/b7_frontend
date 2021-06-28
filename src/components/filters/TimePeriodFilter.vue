<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <button @click="selected = 'daily'" type="button" :class="[selected == 'daily' ? 'bg-secondary text-white hover:bg-teal-400': 'bg-white text-gray-700 hover:bg-gray-50',  'relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']">
      Daily
    </button>
    <button @click="selected = 'weekly'" type="button" :class="[selected == 'weekly'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']">
      Weekly
    </button>
    <button @click="selected = 'monthly'" type="button" :class="[selected == 'monthly'?'bg-secondary text-white hover:bg-teal-400':'bg-white text-gray-700 hover:bg-gray-50','-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500']">
      Monthly
    </button>
  </span>
</template>

<script>
export default {
    data() {
        return {
            selected: 'weekly'
        }
    },
}
</script>
