<template>
    <div>
        <div class="px-4 py-5">
            <form class="space-y-6" action="#" method="POST">
                <div class="grid grid-cols-1 gap-6">
                    <focal-point v-model.sync="focalPoint"></focal-point>
                    <task-description v-model="description"></task-description>
                    <time-period v-model="timePeriod"></time-period>
                    <sort-results v-model="sortResults"></sort-results>
                </div>
            </form>
        </div>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
        <button
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
            Update config
        </button>
    </div>
</template>

<script>
import FocalPoint from '../../forms/FocalPoint.vue'
import TaskDescription from '../../forms/TaskDescription.vue'
import TimePeriod from '../../forms/TimePeriod.vue'
import SortResults from '../../forms/SortResults.vue'
import { mapState, mapActions } from 'vuex'
import people from '../../../store/people'

export default {
    components: {
        FocalPoint,
        TaskDescription,
        TimePeriod,
        SortResults,
    },
    data() {
        return {
            focalPoint: people[0],
            description: '',
            timePeriod: null,
            sortResults: null,
        }
    },
    watch: {
        selectedProject() {
            this.initProjectDefault()
        },
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.filters.project,
            projectDefaults: (state) => state.projectDefaults,
            descriptions: (state) => state.descriptions,
        }),
    },
    methods: {
        ...mapActions(['search', 'setProjectDefault']),
        save() {
            const project = {
                id: this.selectedProject.id,
                focalPoint: this.focalPoint,
                description: this.description,
                sortResults: this.sortResults,
                timePeriod: this.timePeriod,
            }
            this.setProjectDefault(project)
        },
        initProjectDefault() {
            const projectDefault = this.projectDefaults.get(
                this.selectedProject.id
            )
            if (projectDefault) {
                this.focalPoint = projectDefault.focalPoint
                this.sortResults = projectDefault.sortResults
                this.timePeriod = projectDefault.timePeriod
                this.description = projectDefault.description
            }
            console.log(projectDefault)
        },
    },
    mounted() {
        this.initProjectDefault()
    },
}
</script>
