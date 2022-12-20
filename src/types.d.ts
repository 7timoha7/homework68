export interface TaskType {
  id: string,
  title: string;
  condition: boolean;
}

export interface ApiTask {
  [id: string]: TaskType
}

export interface EditTaskType {
  id:string;
  taskEditTape: TaskMutation;
}

export type TaskMutation = Omit<TaskType, 'id'>;