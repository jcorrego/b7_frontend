import { createStore } from 'vuex'
import { setStore, getStore, removeItem } from '../config/utils'
import projects from './projects' //TODO: fetch from API
import people from './people' //TODO: fetch from API
import descriptions from './descriptions' //TODO: fetch from API

const user = getStore('user')
const store = createStore({
    state() {
        return {
            loginUser: user,
            projects,
            descriptions,
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
        search() {
            //TODO: fetch from API
            console.error('not implemented yet')
        },
    },
    mutations: {
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
    },
    modules: {
        getLoginUserInfo(state) {
            return state.loginUser
        },
    },
})
export default store
