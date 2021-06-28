
<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <section aria-labelledby="section-1-title">
          <h2
            class="sr-only"
            id="section-1-title"
          >Section title</h2>
          <new-time-record></new-time-record>
          <div class="mb-5 rounded-lg bg-white overflow-hidden shadow">
            <div class="p-6 h-64">
              Select time period <br>
              Add form
            </div>
          </div>
        </section>
      </div>

      <!-- Right column -->
      <div class="grid grid-cols-1 gap-4">
        <HourStats />
        <section aria-labelledby="section-2-title mt-5">
          <h2
            class="sr-only"
            id="section-2-title"
          >Section title</h2>
          <div class="rounded-lg bg-white overflow-hidden shadow">
            <div class="p-6 ">
              Project Configuration<br>
              Period summary
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import HourStats from '../stats/HourStats.vue'
import NewTimeRecord from '../forms/NewTimeRecord.vue'

export default {
    components: {
        HourStats,
        NewTimeRecord,
    },
}
</script>
