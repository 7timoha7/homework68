import {createSlice} from "@reduxjs/toolkit";
import {TaskType} from "../../types";
import {createTask, deleteTask, editTask, fetchTask} from "./taskThunks";


interface TaskState {
  item: TaskType[];
  fetchLoading: 'idle' | 'pending' | 'success' | 'failure',
}

const initialState: TaskState = {
  item: [],
  fetchLoading: 'idle',
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state) => {
      state.fetchLoading = 'pending';
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.fetchLoading = 'success';
      state.item = action.payload;
    });
    builder.addCase(fetchTask.rejected, (state) => {
      state.fetchLoading = 'failure';
    });

    builder.addCase(createTask.pending, (state) => {
      state.fetchLoading = 'pending';
    });
    builder.addCase(createTask.fulfilled, (state) => {
      state.fetchLoading = 'success';
    });
    builder.addCase(createTask.rejected, (state) => {
      state.fetchLoading = 'failure';
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.fetchLoading = 'pending';
    });
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.fetchLoading = 'success';
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.fetchLoading = 'failure';
    });

    builder.addCase(editTask.pending, (state) => {
      state.fetchLoading = 'pending';
    });
    builder.addCase(editTask.fulfilled, (state) => {
      state.fetchLoading = 'success';
    });
    builder.addCase(editTask.rejected, (state) => {
      state.fetchLoading = 'failure';
    });
  }
});

export const taskReducer = taskSlice.reducer;