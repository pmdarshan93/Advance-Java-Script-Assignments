import { useState } from 'react'

function Counter(){
    const [count,setCount] =useState(0)

    function handleClick(){
        setCount(count+1)
        console.log("NEW Count value : ",count);
    }
    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={handleClick}>Click  e</button>
        </div>
    )
}

export default Counter