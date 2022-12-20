import React, {useState} from 'react';
import {TaskType} from "../../types";
import {useAppDispatch} from "../../App/hooks";
import {deleteTask, editTask, fetchTask} from "../../containers/App/taskThunks";

interface Props {
  task: TaskType;
}

const TaskCard: React.FC<Props> = ({task}) => {

  const [taskState, setTaskState] = useState<TaskType>(task)

  const dispatch = useAppDispatch();

  const onClickDelete = async () => {
    const id: string = task.id;
    await dispatch(deleteTask(id));
    await dispatch(fetchTask());
  }

  const onChangeTaskCheckbox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskState(prevState => ({
      ...prevState,
      condition: e.target.checked
    }));
    await dispatch(editTask({
      taskEditTape: {
        ...taskState,
        condition: e.target.checked
      },
      id: task.id
    }));
    await dispatch(fetchTask());
  }

  return (
    <div>
      <div>
        <p>{task.title}</p>
      </div>
      <div>
        <input type="checkbox" checked={taskState.condition} onChange={onChangeTaskCheckbox}/>
        <span>Done</span>
      </div>
      <div>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;