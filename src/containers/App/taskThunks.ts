import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiTask, EditTaskType, TaskMutation, TaskType} from "../../types";

export const fetchTask = createAsyncThunk<TaskType[]>(
  'task/fetch',
  async () => {
    const taskResponse = await axiosApi.get<ApiTask | null>('/tasks.json');
    const task = taskResponse.data;

    if (task) {
      return Object.keys(task).map(id => {
        return {
          ...task[id],
          id
        };
      });
    }
    return [];
  }
);

export const createTask = createAsyncThunk<void, TaskMutation>(
  'task/create',
  async (arg) => {
    await axiosApi.post('/tasks.json', arg);
  }
);

export const deleteTask = createAsyncThunk<void, string>(
  'task/delete',
  async (arg) => {
    await axiosApi.delete('/tasks/' + arg + '.json');
  }
);

export const editTask = createAsyncThunk<void, EditTaskType>(
  'task/edit',
  async (arg) => {
    await axiosApi.put('/tasks/' + arg.id + '.json', arg.taskEditTape);
  }
);

