import React, {FC, ChangeEvent, useState} from 'react'
import './App.css'
import toDoTask from './components/toDoTask'
// import demoApp from './components/demoApp'
import {ITask} from './def_interfaces/App_interfaces'
 
const App: FC = () => {
  
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
    const newTask = {
      task: task,
      finishTime: finishTime
    }
    showListTask([...listTask, newTask])
    setTask("")
    setFinishTime(0)
  }

  return (
    <div className="App">
      <div className="header">
        <input type="text" value={task} placeholder="Task..." name="task" onChange={handleChange} autoFocus></input>
        <input type="number" value={finishTime} placeholder="finish day..." name="finishTime" onChange={handleChange}></input>
        <button id="bt-add" onClick={addTask}>ADD</button>
      </div>
      <div className="show-list-task">
        { listTask.map((taskItem, index) => {
          return <li key={index}>{taskItem.task} | {taskItem.finishTime}</li>
        })}
      </div>
    </div> 
  )
}

export default App;
