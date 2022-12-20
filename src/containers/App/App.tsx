import React, {useEffect} from 'react';
import './App.css';
import AddNewTaskForm from "../../components/AddNewTaskForm/AddNewTaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";
import {useAppDispatch, useAppSelector} from "../../App/hooks";
import {fetchTask} from "./taskThunks";
import Preloader from "../../components/Preloader/Preloader";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const taskList = useAppSelector(state => state.task.item);
  const loadingState = useAppSelector(state => state.task.fetchLoading);

  return (
    <div className="App">
      <AddNewTaskForm/>
      {loadingState === 'pending' ? <Preloader/> : taskList.map(item => {
        return <TaskCard task={item} key={item.id}/>
      })}
    </div>
  );
}

export default App;
