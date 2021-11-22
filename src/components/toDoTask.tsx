import React from 'react'
import { ITask } from '../def_interfaces/App_interfaces'

const toDoTask = (taskObj: ITask) => {
    return (
        <li>{taskObj.task}</li>
    )
}

export default toDoTask
