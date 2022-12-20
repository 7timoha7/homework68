import React, {useState} from 'react';
import {TaskMutation} from "../../types";
import {useAppDispatch} from "../../App/hooks";
import {createTask, fetchTask} from "../../containers/App/taskThunks";

const AddNewTaskForm = () => {
  const [taskTextState, setTaskTextState] = useState<TaskMutation>({
    title: '',
    condition: false,
  });

  const dispatch = useAppDispatch();

  const onChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setTaskTextState(prev => ({...prev, title: text}));
  }

  const onSubmitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createTask(taskTextState));
    await dispatch(fetchTask());
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input required onChange={onChangeTask} name='title' type="text"/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNewTaskForm;