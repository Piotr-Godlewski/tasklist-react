import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
        loadingStatus: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload: taskIndex }) => {
            const index = tasks.findIndex(task => task.id === taskIndex);
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({ tasks }, { payload: taskIndex }) => {
            const index = tasks.findIndex(task => task.id === taskIndex);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
        fetchExampleTasks: (state) => { 
            state.loadingStatus = !state.loadingStatus;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loadingStatus = !state.loadingStatus;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectLoadingExampleTasks = state => selectTasksState(state).loadingStatus;

export default tasksSlice.reducer;