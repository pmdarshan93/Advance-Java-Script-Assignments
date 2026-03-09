import { useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToggle from "./useToggle";

export default function Password({name}){
    const [show, setShow] = useToggle(false)
    const navigate = useNavigate();

    // const changeStatus =()=>{
    //     setShow(!show);
    // }
    const goHome = () =>{
        navigate("/")
    }
    let params = useParams();
    return(
        <div>
            <p><Link to="/">{params.param}</Link></p>
            <input type={show? "text" : "password"}></input>
            <button onClick={goHome}>Go Home</button>
            <button onClick={setShow}>{show ? "hide" : "show"}</button>
        </div>
    )
}
