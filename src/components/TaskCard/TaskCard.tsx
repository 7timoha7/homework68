import React, {useState} from 'react';
import {TaskType} from "../../types";
import {useAppDispatch, useAppSelector} from "../../App/hooks";
import {deleteTask, editTask, fetchTask} from "../../containers/App/taskThunks";
import "./TaskCard.css";
import PreloaderBtn from "../PreloaderBtn/PreloaderBtn";

interface Props {
  task: TaskType;
}

const TaskCard: React.FC<Props> = ({task}) => {

  const [taskState, setTaskState] = useState<TaskType>(task);

  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(state => state.task.removeLoading);
  const loadingStateEdit = useAppSelector(state => state.task.editLoading);

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
    <div className="cardBox">
      <div>
        <p>{task.title}</p>
      </div>
      <div>
        {loadingStateEdit === 'pending' ?
          <PreloaderBtn/> :
          <input className="checkBox" type="checkbox" checked={taskState.condition} onChange={onChangeTaskCheckbox}/>}
      </div>
      <div>
        {loadingState === 'pending' ?
          <button disabled className="btnDelete2" onClick={onClickDelete}>{<PreloaderBtn/>}</button> :
          <button className="btnDelete" onClick={onClickDelete}>Delete</button>}
      </div>
    </div>
  );
};

export default TaskCard;