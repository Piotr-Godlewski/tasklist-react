import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loadingStatus: false,
        searchStatus: false,
    },
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
            state.searchStatus = true;
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
            state.searchStatus = true;
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
export const selectSearchStatus = state => selectTasksState(state).searchStatus;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;