import { createStore } from 'vuex'
import { setStore, getStore, removeItem } from '../config/utils'
import projects from './projects' //TODO: fetch from API
import people from './people' //TODO: fetch from API
import descriptions from './descriptions' //TODO: fetch from API
import tasks from './tasks' //TODO: fetch from API
import projectDefaults from './projectDefaults' //TODO: fetch from API
import * as uuid from 'uuid'
import { stringifyQuery } from 'vue-router'
const today = new Date()
const startMonth = new Date(today.getFullYear(), today.getMonth(), 1)
const endMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

const user = getStore('user')
const store = createStore({
    state() {
        return {
            loginUser: user,
            actAsPM: false,
            PMUser: {
                name: 'Juliana Ponzio',
                email: 'juliana.ponzio@bairesdev.com',
                avatar: 'https://ca.slack-edge.com/T9U2U104U-U01CTG078RG-30f636af9db9-512'
            },
            projects,
            projectDefaults,
            descriptions,
            records: tasks.map((t) => ({ ...t, selected: false })),
            filteredRecords: tasks.map((t) => ({ ...t, selected: false })),
            filters: {
                period: [startMonth, endMonth],
                project: projects[0],
                focalPoint: people[0],
                overtime: null,
                overtimeType: null,
                overtimeReason: '',
                comments: '',
                taskCategory: null,
                taskDescription: null,
            },
            confirmModal: {
                isOpen: Boolean,
                confirmMessage: {
                    title: String,
                    message: String,
                    button: String,
                }

            }
        }
    },
    actions: {
        saveRecord({ dispatch, commit, state }, newRecord) {
            const {
                id = null,
                date,
                hours,
                focalPoint,
                taskCategory,
                taskDescription,
                overtime,
                overtimeType,
                overtimeReason,
                comments,
                repeat = 1,
            } = newRecord

            for (let i = 0; i < repeat; i++) {
                const record = {
                    id: id || uuid.v4(),
                    date,
                    hours,
                    project: state.filters.project,
                    focalPoint,
                    taskCategory,
                    taskDescription,
                    overtime,
                    overtimeType,
                    overtimeReason,
                    comments,
                    selected: false,
                }
                if (id) {
                    commit('editRecord', record)
                    break
                } else commit('addRecord', record)
            }
            dispatch('search')
        },
        removeRecord({ dispatch, commit }, recordId) {
            commit('removeRecord', recordId)
            dispatch('search')
        },
        setProjectDefault({ commit }, projectDefault) {
            commit('setProjectDefault', projectDefault)
        },
        setProject({ dispatch, commit }, project) {
            commit('setProject', project)
            dispatch('search')
        },
        setPeriod({ dispatch, commit }, period) {
            commit('setPeriod', period)
            dispatch('search')
        },
        setFocalPointFilter({ commit }, focalPoint) {
            commit('setFocalPointFilter', focalPoint)
        },
        setCommentsFilter({ commit }, comments) {
            commit('setCommentsFilter', comments)
        },
        setOvertimeReasonFilter({ commit }, overtimeReason) {
            commit('setOvertimeReasonFilter', overtimeReason)
        },
        setOvertimeFilter({ commit }, overtime) {
            commit('setOvertimeFilter', overtime)
        },
        setOvertimeTypeFilter({ commit }, overtimeType) {
            commit('setOvertimeTypeFilter', overtimeType)
        },
        setTaskCategoryFilter({ commit }, taskCategory) {
            commit('setTaskCategoryFilter', taskCategory)
        },
        setTaskDescriptionFilter({ commit }, taskDescription) {
            commit('setTaskDescriptionFilter', taskDescription)
        },
        search({ commit, state }) {
            //TODO: fetch from API
            const { filters, records } = state
            let filtered = records

            if (filters.project) {
                filtered = filtered.filter(
                    (f) => f.project.id === filters.project.id
                )
            }
            if (filters.period && filters.period.length) {
                const [start, end] = filters.period
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)
                filtered = filtered.filter((f) => {
                    return f.date >= start && f.date <= end
                })
            }

            //TODO: mock focal point filter
            //TODO: mock task description filter

            commit('setFilteredRecords', filtered)
        },
        confirmModal({ commit }, confirmMessage, selection, length){
            state.confirmModal.isOpen = true
            state.confirmModal.confirmMessage = confirmMessage
            commit('confirmModal', confirmModal, selection, length)
        }
        closeConfirmModal({ commit }, ){
            state.confirmModal.isOpen = false;
            state.confirmModal.confirmMessage = {
                title: '',
                message: '',
                button: '',
            }
        }
    },
    mutations: {
        setFilteredRecords(state, filtered) {
            state.filteredRecords = filtered
        },
        setFocalPointFilter(state, focalPoint) {
            state.filters.focalPoint = focalPoint
        },
        setCommentsFilter(state, comments) {
            state.filters.comments = comments
        },
        setOvertimeReasonFilter(state, overtimeReason) {
            state.filters.overtimeReason = overtimeReason
        },
        setOvertimeFilter(state, overtime) {
            state.filters.overtime = overtime
        },
        setOvertimeTypeFilter(state, overtimeType) {
            state.filters.overtimeType = overtimeType
        },
        setTaskCategoryFilter(state, taskCategory) {
            state.filters.taskCategory = taskCategory
        },
        setTaskDescriptionFilter(state, taskDescription) {
            state.filters.taskDescription = taskDescription
        },
        setLoginUser(state, us) {
            state.loginUser = us
            setStore('user', us)
        },
        setPMInterface(state) {
            state.actAsPM = true
        },
        removePMInterface(state) {
            state.actAsPM = false
        },
        removeLoginUser(state) {
            state.loginUser = null
            removeItem('user')
        },
        setProject(state, project) {
            if (project.id === 0) state.filters.project = null
            else state.filters.project = project
        },
        setProjectDefault(state, projectDefault) {
            state.projectDefaults.set(projectDefault.id, projectDefault)
        },
        setPeriod(state, per) {
            state.filters.period = per
        },
        addRecord(state, record) {
            state.records.unshift(record)
        },
        editRecord(state, record) {
            const index = state.records.findIndex((r) => r.id === record.id)
            if (~index) state.records[index] = record
        },
        removeRecord(state, recordId) {
            const index = state.records.findIndex((r) => r.id === recordId)
            if (~index) state.records.splice(index, 1)
        },
        confirmModal(state, confirmModal, selection, length) {
            const index = state.records.findIndex((r) => r.id === recordId)
            if (~index) state.records.splice(index, 1)
        },
    },
    modules: {
        getLoginUserInfo(state) {
            return state.loginUser
        },
    },
})
export default store
