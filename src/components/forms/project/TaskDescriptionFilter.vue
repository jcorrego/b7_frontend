<template>
    <div>
        <label
            for="description"
            class="block text-sm font-medium text-gray-700"
        >
            Task Description
        </label>
        <div class="mt-1">
            <el-cascader
                v-model="description"
                @change="handleTaskDescriptionChange"
                class="w-full"
                placeholder="Select task category and description"
                :options="$store.state.descriptions"
                :props="{ expandTrigger: 'hover' }"
                clearable
                filterable
            ></el-cascader>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            description: '',
        }
    },
    methods: {
        ...mapActions(['setTaskCategoryFilter', 'setTaskDescriptionFilter']),
        handleTaskDescriptionChange(result) {
            const [category, description] = result
            this.setTaskCategoryFilter(category)
            this.setTaskDescriptionFilter(description)
        },
    },
}
</script>
