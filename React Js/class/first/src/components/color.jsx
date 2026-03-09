import {useState} from 'react';

function Color({color, setColor}){
    return(
        <div>
            <input type='color' value={color} onChange={(e)=>setColor(e.target.value)} />
            <p>Selected Color : {color}</p>
        </div>
    )
}

export default Color