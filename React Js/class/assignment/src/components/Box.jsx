import { useContext } from "react"
import { UserContext } from "../App"

export default function Box({componenet}){
const name = useContext(UserContext)

    return (
        <div style={{border : "3px solid red"}}>
        {componenet}
        <p>{name}</p>
        
        </div>
    )
}