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
                :options="descriptions"
                :props="{ expandTrigger: 'hover' }"
                clearable
                filterable
            ></el-cascader>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        updateTaskCategory: { required: true },
        updateTaskDescription: { required: true },
    },
    data() {
        return {
            description: '',
        }
    },
    computed: {
        ...mapState({
            descriptions: (state) => state.descriptions,
        }),
    },
    methods: {
        handleTaskDescriptionChange(result) {
            const [category, description] = result
            this.updateTaskCategory(category)
            this.updateTaskDescription(description)
        },
    },
}
</script>
