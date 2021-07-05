import { v4 } from 'uuid'
import people from './people'

const today = new Date()
const tasks = [
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 1),
        project: {
            id: 1,
        },
        hours: '3:25',
        taskDescription: 'Environment configuration',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 3),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: 'Code review',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 4),
        project: {
            id: 1,
        },
        hours: '0:15',
        taskDescription: 'Other',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 5),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: '1:1 meeting with Manager',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 6),
        project: {
            id: 1,
        },
        hours: '0:45',
        taskDescription: 'Backlog refinement meeting',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 7),
        project: {
            id: 1,
        },
        hours: '2:00',
        taskDescription: 'No assigned tasks',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 8),
        project: {
            id: 1,
        },
        hours: '3:25',
        taskDescription: 'Environment configuration',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 9),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: 'Code review',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 10),
        project: {
            id: 1,
        },
        hours: '0:15',
        taskDescription: 'Other',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 11),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: '1:1 meeting with Manager',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 12),
        project: {
            id: 1,
        },
        hours: '0:45',
        taskDescription: 'Backlog refinement meeting',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 13),
        project: {
            id: 1,
        },
        hours: '2:00',
        taskDescription: 'No assigned tasks',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 14),
        project: {
            id: 1,
        },
        hours: '3:25',
        taskDescription: 'Environment configuration',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 15),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: 'Code review',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 17),
        project: {
            id: 1,
        },
        hours: '0:15',
        taskDescription: 'Other',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 21),
        project: {
            id: 1,
        },
        hours: '1:30',
        taskDescription: '1:1 meeting with Manager',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 22),
        project: {
            id: 2,
        },
        hours: '0:45',
        taskDescription: 'Backlog refinement meeting',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: false,
    },
    {
        id: v4(),
        date: new Date(today.getFullYear(), today.getMonth(), 22),
        project: {
            id: 2,
        },
        hours: '2:00',
        taskDescription: 'No assigned tasks',
        comments: 'Ticket #234, solve the problem',
        focalPoint: people[0],
        overtime: true,
    },
]

export default tasks
