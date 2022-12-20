import React, {useEffect} from 'react';
import './App.css';
import AddNewTaskForm from "../../components/AddNewTaskForm/AddNewTaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";
import {useAppDispatch} from "../../App/hooks";
import {fetchTask} from "./taskThunks";
import {useSelector} from "react-redux";
import {RootState} from "../../App/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTask());
    // dispatch(createTask({title:"555",condition:false,}))
  }, [dispatch]);

  const taskList = useSelector((state: RootState) => state.task.item);
  console.log(taskList);


  return (
    <div className="App">
      <AddNewTaskForm/>
      {taskList.map(item => {
        return <TaskCard task={item} key={item.id}/>
      })}
    </div>
  );
}

export default App;
