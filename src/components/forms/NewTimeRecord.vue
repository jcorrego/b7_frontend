<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mb-5">
    <div
      v-if="$store.state.selectedProject"
      class="bg-white rounded-lg shadow"
    >
      <div class=" px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          New Time Record
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Add a new work record for the selected project: <span class="text-primary italic">{{ $store.state.selectedProject.name }}</span>
        </p>
      </div>
      <input type="text">
    </div>
    <no-project-selected v-else></no-project-selected>
  </div>
</template>

<script>
import NoProjectSelected from '../messages/NoProjectSelected.vue'

export default {
    components: {
        NoProjectSelected,
    },
}
</script>
