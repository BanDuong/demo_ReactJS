import React, {FC, ChangeEvent, useState} from 'react'
import './App.css'

import {ITask} from './def_interfaces/App_interfaces'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [ID, setId] = useState<number>(0);
  const [task, setTask] = useState<string>('')
  const [finishTime, setFinishTime] = useState<number>(0)
  const [listTask, showListTask] = useState<ITask[]>([])
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    if(e.target.name === "task"){
      setTask(e.target.value)
    }else{
      setFinishTime(Number(e.target.value))
    }
  }

  const addTask = (): void =>{
    const id: number = ID + 1;
    const newTask = {
      id: id,
      task: task,
      finishTime: finishTime
    }
    showListTask([...listTask, newTask])
    setId(id);
    setTask("");
    setFinishTime(0);
  }

  const removeTask = (idRemoveTask: number): void =>{
    showListTask(listTask.filter((filterTask) => {
        return filterTask.id !== idRemoveTask;
    }));
  }

  return (
    <div className="App">
      <div className="header">
        <input type="text" value={task} placeholder="Task..." name="task" onChange={handleChange} autoFocus></input>
        <input type="number" value={finishTime} placeholder="finish day..." name="finishTime" onChange={handleChange}></input>
        <button id="bt-add" onClick={addTask}>ADD</button>
      </div>
      <div className="show-list-task">
        { listTask.map((taskItem) => {
          return <TodoTask key={taskItem.id.toString()} taskObj={taskItem} removeTask={removeTask}/>
        })}
      </div>
    </div> 
  )
}

export default App;
