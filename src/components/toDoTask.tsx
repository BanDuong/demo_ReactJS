// import { ITask } from '../def_interfaces/App_interfaces'

const TodoTask = ({ taskObj, removeTask }: any) => {
    return (
        <li id={taskObj.id}>
            {taskObj.task} | {taskObj.finishTime}
            <button onClick={() => removeTask(taskObj.id) }> <span>X</span></button>
        </li>
    );
}

export default TodoTask;
