<template>
  <div>
    <div
      v-if="$store.state.selectedProject"
      class="rounded-lg shadow"
    >
      <div class="bg-white rounded-t-lg">
        <div >
          <div class="sm:hidden">
            <label
              for="tabs"
              class="sr-only"
            >Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            >
              <option
                v-for="tab in tabs"
                :key="tab.name"
                :selected="tab.current"
              >{{ tab.name }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav
                class="-mb-px flex"
                aria-label="Tabs"
              >
                <a
                  v-for="tab in tabs"
                  @click.prevent="selectTab(tab)"
                  :key="tab.name"
                  :href="tab.href"
                  :class="[tab.current ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm']"
                  :aria-current="tab.current ? 'page' : undefined"
                >
                  {{ tab.name }}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div v-if="selectedTab == 'new'">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
            <h3 class="text-lg font-medium leading-6 text-gray-700">Add a new time record</h3>
            <p class="mt-1 text-sm text-gray-500">
              Add a new work record for the selected project: <span class="text-primary italic">{{ $store.state.selectedProject.name }}</span>
            </p>
          </div>
          <div class="px-4 py-5">
            <div :class="[narrow ? '' :'sm:grid-cols-6','grid grid-cols-1 gap-y-6 gap-x-4 ']">
              <div :class="narrow ? '' : 'sm:col-span-1'">
                <label
                  for="date"
                  class="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <div class="mt-1">
                  <el-date-picker
                    name="date"
                    class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    v-model="date"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    :shortcuts="shortcuts"
                  >
                  </el-date-picker>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="hours"
                  class="block text-sm font-medium text-gray-700"
                >Worked Hours</label>
                <div class="mt-1"><input
                    v-model="hours"
                    v-maska="'#:##'"
                    type="text"
                    name="hours"
                    id="hours"
                    placeholder="0:00"
                    class="text-right pr-4"
                    @blur="fixHours"
                    style="height: 40px;"
                  >
                </div>
              </div>

              <div :class="narrow?'':'sm:col-span-4'">
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-700"
                >
                  Task Description
                </label>
                <div class="mt-1">
                  <el-cascader
                    v-model="description"
                    class="w-full"
                    placeholder="Select task category and description"
                    :options="$store.state.descriptions"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange"
                    clearable
                    filterable
                  ></el-cascader>
                </div>
              </div>

              <div :class="narrow?'':'sm:col-span-4'">
                <label
                  for="comments"
                  class="block text-sm font-medium text-gray-700"
                >
                  Comments
                </label>
                <div class="mt-1">
                  <el-input
                    name="comments"
                    id="comments"
                    placeholder="Tickets IDs, links..."
                    v-model="comments"
                    clearable
                  >
                  </el-input>
                </div>
              </div>

              <div :class="narrow?'':'sm:col-span-2'">
                <default-focal-point></default-focal-point>
              </div>

            </div>
          </div>

        </div>
        <div v-else-if="selectedTab == 'project'">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
            <h3 class="text-lg font-medium leading-6 text-gray-700">Project Default Values</h3>
            <p class="mt-1 text-sm text-gray-500">
              This information will be used when creating new time tracker records for this project.
            </p>
          </div>
          <div class="px-4 py-5">
            <form
                class="space-y-6"
                action="#"
                method="POST"
              >
                <div class="grid grid-cols-1 gap-6">
                  <default-focal-point></default-focal-point>
                  <default-time-period></default-time-period>
                  <default-sort-results></default-sort-results>
                  <default-task-description></default-task-description>
                </div>
              </form>
          </div>
        </div>
        <div v-else-if="selectedTab == 'search'">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
            <p class="mt-1 text-sm text-gray-500">
              You can search within this selected project by using multiple criteria.
            </p>
          </div>
          <div class="px-4 py-5">
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
        <button
          v-if="selectedTab == 'new'"
          :disabled="!date || !description || !hours || !comments"
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save record
        </button>
        <button
          v-if="selectedTab == 'project'"
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update config
        </button>
        <button
          v-if="selectedTab == 'search'"
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>

    </div>
    <no-project-selected v-else></no-project-selected>
  </div>
</template>

<script>
import NoProjectSelected from '../messages/NoProjectSelected.vue'
import DefaultFocalPoint from '../forms/project/DefaultFocalPoint.vue'
import DefaultTimePeriod from '../forms/project/DefaultTimePeriod.vue'
import DefaultSortResults from '../forms/project/DefaultSortResults.vue'
import DefaultTaskDescription from '../forms/project/DefaultTaskDescription.vue'

import { maska } from 'maska'

export default {
    components: {
        NoProjectSelected,
        DefaultFocalPoint,
        DefaultTimePeriod,
        DefaultSortResults,
        DefaultTaskDescription,
    },
    directives: { maska },
    props: { narrow: { default: false } },
    data() {
        return {
            disabledDate(time) {
                return time.getTime() > Date.now()
            },
            shortcuts: [
                {
                    text: 'Today',
                    value: new Date(),
                },
                {
                    text: 'Yesterday',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        return date
                    })(),
                },
                {
                    text: 'A week ago',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        return date
                    })(),
                },
            ],
            date: new Date(),
            description: '',
            hours: '',
            comments: '',
            tabs: [
                { name: 'New Time Record', href: 'new', current: true },
                { name: 'Project Config', href: 'project', current: false },
                { name: 'Advanced Search', href: 'search', current: false },
            ],
            selectedTab: 'new',
        }
    },
    methods: {
        handleChange(value) {
            console.log(value)
        },
        fixHours() {
            let tokens = this.hours.split(':')
            if (tokens[1].length == 0) tokens[1] = '00'
            else if (tokens[1].length == 1) tokens[1] = '0' + tokens[1]
            this.hours = tokens.join(':')
        },
        selectTab(selected) {
            this.selectedTab = selected.href
            this.tabs.forEach(function (tab) {
                if (tab.href == selected.href) tab.current = true
                else tab.current = false
            })
        },
    },
}
</script>
