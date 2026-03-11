import '../utils/script.js';
import { useState } from 'react';
import Task from '../components/Task.jsx';

export default function Todo() {
    let [task, setTask] = useState([{ "taskname": "darshan"}])
    let [name, setName] = useState("");

    function addTask() {
        setTask([...task, { taskname: name }])
        setName("");
    }

    function changeName(e) {
        setName(e.target.value)

    }

    function editTask(name){
        
    }
    return <>
        <input value={name} onChange={changeName} ></input>
        <button onClick={addTask} >Add</button>
        <ul>
            {task.map((ele, i) => (
                <Task key={i} name={ele.taskname} editTask={editTask}></Task>
            ))}
        </ul>

    </>

}