<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comments
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  OT
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(task,index) in tasks" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ task.date }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ task.hours }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ task.category }}</div>
                  <div class="text-sm text-gray-500">{{ task.description }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ task.comments }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="task.overtime" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Yes
                  </span>
                  <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    No
                </span>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tasks = [
  {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: false,
  },
  {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: false,
  },
  {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: true,
  },
    {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: false,
  },
  {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: false,
  },
  {
    date: '2021-06-28',
    hours: '01:30',
    category: 'Development',
    description: 'Code Review',
    comments: 'Ticket #234, solve the problem',
    overtime: true,
  },

]

export default {
  setup() {
    return {
      tasks,
    }
  },
}
</script>
