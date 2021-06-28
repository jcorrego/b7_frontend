<template>
  <label
    for="view"
    class="block text-sm font-medium text-gray-700"
  >
    Default Time Period View
  </label>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      Privacy setting
    </RadioGroupLabel>
    <div class="bg-white rounded-md -space-y-px">
      <RadioGroupOption
        as="template"
        v-for="(setting, settingIdx) in timeViews"
        :key="setting.name"
        :value="setting"
        v-slot="{ checked, active }"
      >
        <div :class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === timeViews.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
          <span
            :class="[checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']"
            aria-hidden="true"
          >
            <span class="rounded-full bg-white w-1.5 h-1.5" />
          </span>
          <div class="ml-3 flex flex-col">
            <RadioGroupLabel
              as="span"
              :class="[checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium']"
            >
              {{ setting.name }}
            </RadioGroupLabel>
            <RadioGroupDescription
              as="span"
              :class="[checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm']"
            >
              {{ setting.description }}
            </RadioGroupDescription>
          </div>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { ref } from 'vue'
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'

const timeViews = [
    {
        name: 'Daily',
        description: 'Displays the tasks for a given date. Defaults to today.',
    },
    {
        name: 'Weekly',
        description:
            'Display list of tasks for selected week. Defaults to running week.',
    },
    {
        name: 'Monthly',
        description:
            'Calendar and list view for a month. Defaults to running month.',
    },
]

export default {
    components:{
        RadioGroup,
        RadioGroupDescription,
        RadioGroupLabel,
        RadioGroupOption,
    },
    setup() {
        const selected = ref(timeViews[0])

        return {
            timeViews,
            selected,
        }
    },
}
</script>
