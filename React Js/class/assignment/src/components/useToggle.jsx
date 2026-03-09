import { useState } from "react";

export default function useToggle(initial = false){
    const [value, setValue] = useState(initial)

    const changeValue=()=>{
        setValue(!value)
    }

    return [value,changeValue];
}