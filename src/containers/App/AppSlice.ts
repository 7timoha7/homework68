import {createSlice} from "@reduxjs/toolkit";
import {TaskType} from "../../types";
import {createTask, deleteTask, editTask, fetchTask} from "./taskThunks";


interface TaskState {
  item: TaskType[];
  fetchLoading: 'idle' | 'pending' | 'success' | 'failure',
  addLoading: 'idle' | 'pending' | 'success' | 'failure',
  removeLoading: 'idle' | 'pending' | 'success' | 'failure',
  editLoading: 'idle' | 'pending' | 'success' | 'failure',
}

const initialState: TaskState = {
  item: [],
  fetchLoading: 'idle',
  addLoading: 'idle',
  removeLoading: 'idle',
  editLoading: 'idle',
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
      state.addLoading = 'pending';
    });
    builder.addCase(createTask.fulfilled, (state) => {
      state.addLoading = 'success';
    });
    builder.addCase(createTask.rejected, (state) => {
      state.addLoading = 'failure';
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.removeLoading = 'pending';
    });
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.removeLoading = 'success';
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.removeLoading = 'failure';
    });

    builder.addCase(editTask.pending, (state) => {
      state.editLoading = 'pending';
    });
    builder.addCase(editTask.fulfilled, (state) => {
      state.editLoading = 'success';
    });
    builder.addCase(editTask.rejected, (state) => {
      state.editLoading = 'failure';
    });
  }
});

export const taskReducer = taskSlice.reducer;