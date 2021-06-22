<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Track Time Page
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">New Time Record</h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Here you can register your work time in the current project.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form>
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="date"
                            class="block text-sm font-medium text-gray-700"
                          >Date</label>
                          <el-date-picker
                            name="date"
                            id="date"
                            v-model="date"
                            type="date"
                            placeholder="Pick a day"
                          >
                          </el-date-picker>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="hours"
                            class="block text-sm font-medium text-gray-700"
                          >Hours</label>
                          <input
                            ref="hours"
                            v-mask="timeMask"
                            v-model="hours"
                            type="text"
                            name="hours"
                            id="hours"
                            placeholder="00:00"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-16 shadow-sm sm:text-sm border-gray-300 rounded-md text-right"
                          >
                          <p class="mt-2 text-sm text-gray-500">
                          i.e. (HH:MM)
                        </p>
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="project"
                          class="block text-sm font-medium text-gray-700"
                        >Project</label>
                        <select
                          id="project"
                          name="project"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Some sample project 1</option>
                          <option>Some sample project 2</option>
                          <option>Some sample project 3</option>
                        </select>
                      </div>

                      <div>
                        <label
                          for="description"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Category / Task Description
                        </label>
                        <div class="mt-1">
                          <el-cascader
                            v-model="description"
                            :options="options"
                            :props="{ expandTrigger: 'hover' }"
                            @change="handleChange"
                          ></el-cascader>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                          Add details about tasks.
                        </p>
                      </div>

                      <div>
                        <label
                          for="comments"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Comments
                        </label>
                        <div class="mt-1">
                          <textarea
                            id="comments"
                            name="comments"
                            rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Tickets IDs, links..."
                          ></textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                          Add details about tasks.
                        </p>
                      </div>

                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$refs.hours.focus();
  },
  data() {
    return {
      hours: '',
      date: new Date(),
      description: '',
      options: [
        {
          value: 'Absence',
          label: 'Absence',
          children: [
            {
              value: 'Personal Reasons',
              label: 'Personal Reasons',
            },
            {
              value: 'National Holiday',
              label: 'National Holiday',
            },
          ],
        },
        {
          value: 'Development',
          label: 'Development',
          children: [
            {
              value: 'Architecture definition',
              label: 'Architecture definition',
            },
            {
              value: 'Code review',
              label: 'Code review',
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(data) {
      console.log(data);
    },
    timeMask(value) {
      const hour = [/[0-9]/];
      const hours = [/[0-2]/, value.charAt(0) === '2' ? /[0-3]/ : /[0-9]/];
      const minutes = [/[0-5]/, /[0-9]/];
      if (value.length === 1) return hour;
      if (value.length === 2 && value.charAt(0) <= 5) return minutes;
      if (value.length === 2 && value.charAt(0) > 5) return [...hour, ':', ...minutes];
      if (value.length === 3) return [...hour, ':', ...minutes];
      if (value.length === 4) return [...hour, ':', ...minutes];
      if (value.length === 5) return [...hours, ':', ...minutes];
      return [...hours, ':', ...minutes];
    },
  },
};
</script>

<style>
.el-input__inner {
  border-color: rgba(209, 213, 219, 1);
  border-radius: 0.375rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.el-scrollbar__wrap {
  height: auto;
}
.el-cascader {
  width: 100%;
}
</style>
