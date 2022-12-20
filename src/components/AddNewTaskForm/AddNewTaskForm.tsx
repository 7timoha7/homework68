import React, {useState} from 'react';
import {TaskMutation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../App/hooks";
import {createTask, fetchTask} from "../../containers/App/taskThunks";
import "./AddNewTaskForm.css";
import PreloaderBtn from "../PreloaderBtn/PreloaderBtn";

const AddNewTaskForm = () => {
  const [taskTextState, setTaskTextState] = useState<TaskMutation>({
    title: '',
    condition: false,
  });

  const dispatch = useAppDispatch();
  const loadingStateAdd = useAppSelector(state => state.task.addLoading);

  const onChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setTaskTextState(prev => ({...prev, title: text}));
  }

  const onSubmitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createTask(taskTextState));
    await dispatch(fetchTask());
    setTaskTextState(prev => ({...prev, title: ''}));
  }

  return (
    <div className="newTaskBox">
      <form onSubmit={onSubmitForm}>
        <input className="input" required value={taskTextState.title} onChange={onChangeTask} name='title' type="text"/>
        {loadingStateAdd === 'pending' ?
          <button disabled className="btnSubmit2">{<PreloaderBtn/>}</button> :
          <button className="btnSubmit">Add</button>}
      </form>
    </div>
  );
};

export default AddNewTaskForm;