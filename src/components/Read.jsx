import React,{useState} from "react";

const Read=()=>{
    const [message , setMessage]=useState("hello, React!")
    return(
        <div>
            <h2>Reading state in react</h2>
            <p>Current message: {message}</p>
            <button onClick={()=>setMessage("this is new message")}>
                Change message
            </button>
        </div>
    )
}

export default Read;