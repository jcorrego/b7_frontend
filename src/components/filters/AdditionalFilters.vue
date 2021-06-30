<template>
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
        <focal-point-filter></focal-point-filter>
        <task-description-filter></task-description-filter>
    </div>
</template>

<script>
import FocalPointFilter from '../forms/project/FocalPointFilter.vue'
import TaskDescriptionFilter from '../forms/project/TaskDescriptionFilter.vue'
export default {
    components: {
        FocalPointFilter,
        TaskDescriptionFilter,
    },
}
</script>

<style></style>
