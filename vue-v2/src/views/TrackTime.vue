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
                            @change="handleChange"
                            filterable
                            class="w-full"
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
    console.log(this.$refs.hours);
    this.$refs.hours.focus();
  },
  data() {
    return {
      hours: '',
      date: new Date(),
      description: '',
      options: [
        {
          value: 'absence',
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
            {
              value: 'Compensation day',
              label: 'Compensation day',
            },
            {
              value: 'Vacations',
              label: 'Vacations',
            },
            {
              value: 'Sick leave',
              label: 'Sick leave',
            },
            {
              value: 'Paid Time Off',
              label: 'Paid Time Off',
            },
            {
              value: 'Unpaid Time Off',
              label: 'Unpaid Time Off',
            },
            {
              value: 'Other - Absence',
              label: 'Other - Absence',
            },
          ],
        },
        {
          value: 'development',
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
            {
              value: 'Demo preparation',
              label: 'Demo preparation',
            },
            {
              value: 'Deployment',
              label: 'Deployment',
            },
            {
              value: 'Environment setup',
              label: 'Environment setup',
            },
            {
              value: 'Features development',
              label: 'Features development',
            },
            {
              value: 'Test cases development',
              label: 'Test cases development',
            },
            {
              value: 'Research / Analysis',
              label: 'Research / Analysis',
            },
            {
              value: 'Spike',
              label: 'Spike',
            },
            {
              value: 'Bug Fixing',
              label: 'Bug Fixing',
            },
            {
              value: 'Design',
              label: 'Design',
            },
            {
              value: 'Writing User Stories',
              label: 'Writing User Stories',
            },
            {
              value: 'Requirements analysis',
              label: 'Requirements analysis',
            },
            {
              value: 'Peer review',
              label: 'Peer review',
            },
            {
              value: 'DB Automation',
              label: 'DB Automation',
            },
            {
              value: 'DB Maintenance',
              label: 'DB Maintenance',
            },
            {
              value: 'Research and Learning',
              label: 'Research and Learning',
            },
            {
              value: 'Configuration',
              label: 'Configuration',
            },
            {
              value: 'Library Upgrade',
              label: 'Library Upgrade',
            },
            {
              value: 'Refactor',
              label: 'Refactor',
            },
            {
              value: 'Support',
              label: 'Support',
            },
            {
              value: 'Integration',
              label: 'Integration',
            },
            {
              value: 'Debug',
              label: 'Debug',
            },
            {
              value: 'On call',
              label: 'On call',
            },
            {
              value: 'Mockups Design',
              label: 'Mockups Design',
            },
            {
              value: 'Graphic Design',
              label: 'Graphic Design',
            },
            {
              value: 'Wireframes Design',
              label: 'Wireframes Design',
            },
            {
              value: 'UI definition',
              label: 'UI definition',
            },
            {
              value: 'Other - Development',
              label: 'Other - Development',
            },
          ],
        },
        {
          value: 'administrative',
          label: 'Administrative',
          children: [
            {
              value: 'Email revision/answering',
              label: 'Email revision/answering',
            },
            {
              value: 'Daily Progress Report',
              label: 'Daily Progress Report',
            },
            {
              value: 'Weekly Progress Report',
              label: 'Weekly Progress Report',
            },
            {
              value: 'Other - Administrative',
              label: 'Other - Administrative',
            },
          ],
        },
        {
          value: 'documentation',
          label: 'Documentation',
          children: [
            {
              value: 'Technical Writing',
              label: 'Technical Writing',
            },
            {
              value: 'Diagrams drawing',
              label: 'Diagrams drawing',
            },
            {
              value: 'Documentation reading',
              label: 'Documentation reading',
            },
            {
              value: 'Documentation writing',
              label: 'Documentation writing',
            },
            {
              value: 'Research',
              label: 'Research',
            },
            {
              value: 'Other - Documentation',
              label: 'Other - Documentation',
            },
          ],
        },
        {
          value: 'idle_time',
          label: 'Idle time',
          children: [
            {
              value: 'Travel',
              label: 'Travel',
            },
            {
              value: 'Partial Assigment',
              label: 'Partial Assigment',
            },
            {
              value: 'Internet issues',
              label: 'Internet issues',
            },
            {
              value: 'No assigned tasks',
              label: 'No assigned tasks',
            },
            {
              value: 'Other - Idle time',
              label: 'Other - Idle time',
            },
          ],
        },
        {
          value: 'internal_process',
          label: 'Internal Process',
          children: [
            {
              value: 'Technical Screenings',
              label: 'Technical Screenings',
            },
            {
              value: 'Staffing Technical Interview',
              label: 'Staffing Technical Interview',
            },
            {
              value: 'Coding challenges review',
              label: 'Coding challenges review',
            },
            {
              value: 'Reviewing exams',
              label: 'Reviewing exams',
            },
            {
              value: 'Other - Internal Process',
              label: 'Other - Internal Process',
            },
          ],
        },
        {
          value: 'meetings_client',
          label: 'Meetings (Client)',
          children: [
            {
              value: '1-1 with client focal point',
              label: '1-1 with client focal point',
            },
            {
              value: 'Backlog refinement meeting',
              label: 'Backlog refinement meeting',
            },
            {
              value: 'Blocker removal meeting',
              label: 'Blocker removal meeting',
            },
            {
              value: 'Client side training',
              label: 'Client side training',
            },
            {
              value: 'Sprint Planning',
              label: 'Sprint Planning',
            },
            {
              value: 'Sprint Retrospective',
              label: 'Sprint Retrospective',
            },
            {
              value: 'Sprint Review / Demo',
              label: 'Sprint Review / Demo',
            },
            {
              value: 'Client Meeting',
              label: 'Client Meeting',
            },
            {
              value: 'Daily Meeting',
              label: 'Daily Meeting',
            },
            {
              value: 'KickOff Meeting',
              label: 'KickOff Meeting',
            },
            {
              value: 'Other - Meetings (Client)',
              label: 'Other - Meetings (Client)',
            },
          ],
        },
        {
          value: 'meetings_internal',
          label: 'Meetings (Internal)',
          children: [
            {
              value: '1:1 meeting with HRBP',
              label: '1:1 meeting with HRBP',
            },
            {
              value: '1:1 meeting with Manager',
              label: '1:1 meeting with Manager',
            },
            {
              value: 'Team building meeting',
              label: 'Team building meeting',
            },
            {
              value: 'Other - Meetings (Internal)',
              label: 'Other - Meetings (Internal)',
            },
          ],
        },
        {
          value: 'other',
          label: 'Other',
          children: [
            {
              value: 'Other',
              label: 'Other',
            },
          ],
        },
        {
          value: 'testing',
          label: 'Testing',
          children: [
            {
              value: 'Exploratory',
              label: 'Exploratory',
            },
            {
              value: 'Production Verification',
              label: 'Production Verification',
            },
            {
              value: 'Test Creation/design',
              label: 'Test Creation/design',
            },
            {
              value: 'Smoke testing',
              label: 'Smoke testing',
            },
            {
              value: 'Environment configuration',
              label: 'Environment configuration',
            },
            {
              value: 'Functional Testing',
              label: 'Functional Testing',
            },
            {
              value: 'Regression testing',
              label: 'Regression testing',
            },
            {
              value: 'Testathon / UAT',
              label: 'Testathon / UAT',
            },
            {
              value: 'Coding',
              label: 'Coding',
            },
            {
              value: 'Manual testing',
              label: 'Manual testing',
            },
            {
              value: 'Test case execution',
              label: 'Test case execution',
            },
          ],
        },
        {
          value: 'training',
          label: 'Training (Trainee)',
          children: [
            {
              value: 'Receiving mentoring support',
              label: 'Receiving mentoring support',
            },
            {
              value: 'Online course',
              label: 'Online course',
            },
            {
              value: 'Project Onboarding (Trainee)',
              label: 'Project Onboarding (Trainee)',
            },
            {
              value: 'Reading Documentation',
              label: 'Reading Documentation',
            },
            {
              value: 'Internal course',
              label: 'Internal course',
            },
            {
              value: 'Self training',
              label: 'Self training',
            },
            {
              value: 'Other - Training (Trainee)',
              label: 'Other - Training (Trainee)',
            },
            {
              value: 'Providing mentoring support',
              label: 'Providing mentoring support',
            },
            {
              value: 'Project Onboarding (Trainer)',
              label: 'Project Onboarding (Trainer)',
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
