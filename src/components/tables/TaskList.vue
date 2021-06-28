<template>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
        <div class="p-4 text-center">
          <time-period-filter></time-period-filter>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-sky-50">
            <tr>
              <th></th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date / Hours
              </th>
              <th
                scope="col"
                class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1"
              >
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Overtime hours"
                  placement="top-start"
                >
                  <span>OT</span>
                </el-tooltip>
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Comments
              </th>
              <th class="pr-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="(task,index) in tasks"
              :key="index"
              :class="[task.selected?'bg-teal-50':'','cursor-pointer hover:bg-gray-50']"
            >
              <td @click="task.selected = !task.selected"
                class="pl-4">
                <div class="flex items-center h-5">
                  <input
                    :id="'task['+index+']'"
                    :name="'task['+index+']'"
                    type="checkbox"
                    class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    :checked="task.selected"
                  />
                </div>
              </td>
              <td @click="task.selected = !task.selected"
              class="px-6 py-2 whitespace-nowrap">
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-400">
                    {{ task.date }}
                  </div>
                  <div class="text-sm text-primary font-bold">{{ task.hours }}</div>
                </div>
              </td>
              <td @click="task.selected = !task.selected"
              class="py-2 whitespace-nowrap">
                <el-popover
                  v-if="task.overtime"
                  placement="top-start"
                  :width="200"
                  trigger="hover"
                >
                  <template #reference>
                    <div class="bg-red-500 flex-shrink-0 flex items-center justify-center w-2 h-2 text-white text-sm font-medium rounded">
                    </div>
                  </template>
                  <div class="text-red-400">Overtime</div>
                  <div>{{ task.hours }}</div>
                  <div>To be compensated</div>
                </el-popover>
                <div
                  v-else
                  class="bg-green-500 flex-shrink-0 flex items-center justify-center w-2 h-2 text-white text-sm font-medium rounded"
                ></div>
              </td>
              <!-- <td class="px-6 py-4 whitespace-nowrap"> -->
              <!-- <div class="text-sm text-gray-900">{{ task.hours }}</div> -->
              <!-- </td> -->
              <td @click="task.selected = !task.selected"
              class="px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ task.category }}</div>
                <div class="text-sm text-gray-500">{{ task.description }}</div>
              </td>
              <td @click="task.selected = !task.selected"
              class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ task.comments }}</div>
              </td>
              <td class="pr-6">
                <Menu
                  as="div"
                  class="relative flex justify-end items-center"
                >
                  <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    <span class="sr-only">Open options</span>
                    <DotsVerticalIcon
                      class="w-5 h-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems class="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']"
                        >
                          <PencilAltIcon
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Edit
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']"
                        >
                          <DuplicateIcon
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Duplicate
                        </a>
                        </MenuItem>
                      </div>
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']"
                        >
                          <TrashIcon
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Delete
                        </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </td>
            </tr>
          </tbody>
          <tfoot class="bg-gray-50">
            <tr>
              <td colspan="6" class="px-6 py-3 text-gray-500 text-sm">
                <div class="flex items-center justify-between">
                  <div>Displaying <span class="font-bold text-primary">{{ tasks.length }}</span> records</div>
                  <div v-if="selected.length" class="flex items-center">
                    <div class="mr-2"><span class="font-bold text-primary">{{ selected.length }}</span> records selected</div>
                    <button type="button" class="mr-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <i class="fad fa-trash-alt mr-2"></i>
                      Delete
                    </button>
                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                      <i class="fad fa-clone mr-2"></i>
                      Duplicate
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
    DotsVerticalIcon,
    DuplicateIcon,
    PencilAltIcon,
    TrashIcon,
} from '@heroicons/vue/solid'

import TimePeriodFilter from '../filters/TimePeriodFilter.vue'

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        DotsVerticalIcon,
        DuplicateIcon,
        PencilAltIcon,
        TrashIcon,
        TimePeriodFilter,
    },
    data() {
        return {
            tasks: [
                {
                    date: '2021-06-28',
                    hours: '03:25',
                    category: 'Testing',
                    description: 'Environment configuration',
                    comments: 'Ticket #234, solve the problem',
                    overtime: false,
                    selected: false,
                },
                {
                    date: '2021-06-28',
                    hours: '01:30',
                    category: 'Development',
                    description: 'Code Review',
                    comments: 'Ticket #234, solve the problem',
                    overtime: false,
                    selected: false,
                },
                {
                    date: '2021-06-28',
                    hours: '00:15',
                    category: 'Other',
                    description: 'Other',
                    comments: 'Ticket #234, solve the problem',
                    overtime: true,
                    selected: false,
                },
                {
                    date: '2021-06-28',
                    hours: '01:30',
                    category: 'Meetings (Internal)',
                    description: '1:1 meeting with Manager',
                    comments: 'Ticket #234, solve the problem',
                    overtime: false,
                    selected: false,
                },
                {
                    date: '2021-06-28',
                    hours: '00:45',
                    category: 'Development',
                    description: 'Backlog refinement meeting',
                    comments: 'Ticket #234, solve the problem',
                    overtime: false,
                    selected: false,
                },
                {
                    date: '2021-06-28',
                    hours: '02:00',
                    category: 'Idle time',
                    description: 'No assigned tasks',
                    comments: 'Ticket #234, solve the problem',
                    overtime: true,
                    selected: false,
                },
            ],
        }
    },
    computed:{
      selected(){
        return this.tasks.filter((item)=>item.selected)
      }
    },
}
</script>
