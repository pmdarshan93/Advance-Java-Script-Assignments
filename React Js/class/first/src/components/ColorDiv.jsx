import {useState} from 'react'

function ColorDiv({color}){
    const boxstyle={
        width : "300px",
        height : "300px",
        backgroundColor : color
    }
    return(
        <div style={boxstyle}> </div>
    )
}

export default ColorDiv