import { useState } from "react";
import { useReducer } from "react";

// 
// const init ={tasks:[]};


// function reducer(state, action){
//     if(action.type=="add"){
//         return {
//             task : " ",
//             tasks : [...state.tasks, state.task]}
//     }
//     // else if (action.type)
//     }

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

// const [tasks, dispatch] = useReducer(reducer, initialValue)
  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask(""); // clear input
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2> To-Do List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}