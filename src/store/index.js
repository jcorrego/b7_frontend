import { createStore } from 'vuex'
import { setStore, getStore, removeItem } from '../config/utils'
import projects from './projects' //TODO: fetch from API
import people from './people' //TODO: fetch from API
import descriptions from './descriptions' //TODO: fetch from API
import tasks from './tasks' //TODO: fetch from API
import * as uuid from 'uuid'

const user = getStore('user')
const store = createStore({
    state() {
        return {
            loginUser: user,
            projects,
            descriptions,
            records: tasks.map((t) => ({ ...t, selected: false })),
            filteredRecords: tasks.map((t) => ({ ...t, selected: false })),
            newRecord: {
                date: new Date(),
                hours: '',
                focalPoint: people[0],
                taskCategory: null,
                taskDescription: null,
                overtime: false,
                overtimeType: null,
                overtimeReason: '',
                comments: '',
            },
            filters: {
                period: 'weekly',
                project: projects[0],
                focalPoint: people[0],
                overtime: null,
                overtimeType: null,
                overtimeReason: '',
                comments: '',
                taskCategory: null,
                taskDescription: null,
            },
        }
    },
    actions: {
        createRecord({ dispatch, commit, state }) {
            const {
                date,
                hours,
                focalPoint,
                taskCategory,
                taskDescription,
                overtime,
                overtimeType,
                overtimeReason,
                comments,
            } = state.newRecord
            const record = {
                id: uuid.v4(),
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
            console.log('createRecord', record)
            commit('addRecord', record)
            dispatch('clearNewRecord')
        },
        removeRecord({ dispatch, commit }, recordId) {
            commit('removeRecord', recordId)
            dispatch('search')
        },
        clearNewRecord({ commit }) {
            const mutations = new Map([
                ['setNewRecordDate', new Date()],
                ['setNewRecordHours', null],
                ['setNewRecordFocalPoint', people[0]],
                ['setNewRecordTaskCategory', null],
                ['setNewRecordTaskDescription', null],
                ['setNewRecordOvertime', false],
                ['setNewRecordOvertimeType', null],
                ['setNewRecordOvertimeReason', ''],
                ['setNewRecordComments', ''],
            ])

            for (const [mutation, value] of mutations.entries()) {
                commit(mutation, value)
            }
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
        setNewRecordDate({ commit }, date) {
            commit('setNewRecordDate', date)
        },
        setNewRecordHours({ commit }, hours) {
            commit('setNewRecordHours', hours)
        },
        setNewRecordComments({ commit }, comments) {
            commit('setNewRecordComments', comments)
        },
        setNewRecordFocalPoint({ commit }, focalPoint) {
            commit('setNewRecordFocalPoint', focalPoint)
        },
        setNewRecordTaskCategory({ commit }, taskCategory) {
            commit('setNewRecordTaskCategory', taskCategory)
        },
        setNewRecordTaskDescription({ commit }, taskDescription) {
            commit('setNewRecordTaskDescription', taskDescription)
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

            //TODO: mock date filter
            //TODO: mock focal point filter
            //TODO: mock task description filter

            commit('setFilteredRecords', filtered)
        },
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
        setNewRecordFocalPoint(state, focalPoint) {
            state.newRecord.focalPoint = focalPoint
        },
        setNewRecordComments(state, comments) {
            state.newRecord.comments = comments
        },
        setNewRecordTaskCategory(state, taskCategory) {
            state.newRecord.taskCategory = taskCategory
        },
        setNewRecordTaskDescription(state, taskDescription) {
            state.newRecord.taskDescription = taskDescription
        },
        setNewRecordOvertimeReason(state, overtimeReason) {
            state.newRecord.overtimeReason = overtimeReason
        },
        setNewRecordOvertime(state, overtime) {
            state.newRecord.overtime = overtime
        },
        setNewRecordOvertimeType(state, overtimeType) {
            state.newRecord.overtimeType = overtimeType
        },
        setNewRecordDate(state, date) {
            state.newRecord.date = date
        },
        setNewRecordHours(state, hours) {
            state.newRecord.hours = hours
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
        removeLoginUser(state) {
            state.loginUser = null
            removeItem('user')
        },
        setProject(state, project) {
            if (project.id === 0) state.filters.project = null
            else state.filters.project = project
        },
        setPeriod(state, per) {
            state.period = per
        },
        addRecord(state, record) {
            state.records.push(record)
        },
        removeRecord(state, recordId) {
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
