import '../utils/script.js';
import { useState } from 'react';

export default function Todo() {
    let { task, setTask } = useState([])

    function addTask(name) {
        setTask([...task, { taskname: name }])
    }
    return <>
        <input id="task"></input>
        <button onClick={(addTask("anced"))}>Add</button>
        <ul>
            {task.map(ele => {
                <li>ele.taskname</li>
            })}
        </ul>

    </>

}