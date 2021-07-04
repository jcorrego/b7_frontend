<template>
    <div>
        <div class="px-4 py-5">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label
                        for="date"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Date
                    </label>
                    <div class="mt-1">
                        <el-date-picker
                            name="date"
                            class="
                                shadow-sm
                                focus:ring-sky-500 focus:border-sky-500
                                block
                                w-full
                                sm:text-sm
                                border-gray-300
                                rounded-md
                            "
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
                        >Worked Hours</label
                    >
                    <div class="mt-1">
                        <input
                            v-model="hours"
                            @blur="fixHours"
                            v-maska="'#:##'"
                            type="text"
                            name="hours"
                            id="hours"
                            placeholder="0:00"
                            class="text-right pr-4"
                            style="height: 40px"
                        />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <task-description v-model="description"></task-description>
                </div>

                <div class="sm:col-span-2">
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

                <div class="sm:col-span-2">
                    <focal-point v-model="focalPoint"></focal-point>
                </div>

                <div class="sm:col-span-2">
                    <label
                        for="comments"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Repeat record
                    </label>
                    <div class="mt-1">
                        <el-input
                            type="number"
                            name="repeat"
                            id="repeat"
                            placeholder="times to repeat"
                            v-model="repeat"
                            clearable
                        >
                        </el-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
        <button
            :disabled="!date || !taskDescription || !hours || !comments"
            type="submit"
            @click="save"
            class="
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-teal-600
                hover:bg-teal-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-teal-500
                disabled:opacity-50 disabled:cursor-not-allowed
            "
        >
            Save record
        </button>
    </div>
</template>

<script>
import FocalPoint from '../../forms/FocalPoint.vue'
import TaskDescription from '../../forms/TaskDescription.vue'
import people from '../../../store/people'
import { maska } from 'maska'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        FocalPoint,
        TaskDescription,
    },
    directives: { maska },
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
            hours: '',
            focalPoint: people[0],
            comments: '',
            description: '',
            taskDescription: '',
            repeat: 1,
        }
    },
    computed: {
        ...mapState({
            projectDefaults: (state) => state.projectDefaults,
            project: (state) => state.filters.project,
        }),
    },
    watch: {
        description(value) {
            const [_, description] = value
            this.taskDescription = description
        },
        project() {
            this.initProjectDefault()
        },
    },
    methods: {
        ...mapActions(['createRecord']),
        save() {
            this.createRecord({
                date: this.date,
                hours: this.hours,
                focalPoint: this.focalPoint,
                comments: this.comments,
                taskDescription: this.taskDescription,
                repeat: this.repeat,
            })
            this.initProjectDefault()
        },
        fixHours() {
            let tokens = this.hours.split(':')
            if (tokens[1].length == 0) tokens[1] = '00'
            else if (tokens[1].length == 1) tokens[1] = '0' + tokens[1]
            this.hours = tokens.join(':')
        },
        initProjectDefault() {
            this.hours = ''
            this.comments = ''
            if (!this.project) {
                this.focalPoint = people[0]
                this.description = ''
                return
            }
            const projectDefault = this.projectDefaults.get(this.project.id)
            if (projectDefault) {
                this.focalPoint = projectDefault.focalPoint
                this.description = projectDefault.description
            }
        },
    },
    mounted() {
        this.initProjectDefault()
    },
}
</script>
