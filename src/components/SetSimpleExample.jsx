import React,{useState} from "react";

const SetSimpleExample=()=>{
    const [name,setName]=React.useState('vishal');
    const [age,setAge]=React.useState(24);
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"></input>
            <br></br><br></br>
            <input type="text" value={age} onChange={e=>setName(e.target.value)} placeholder="Enter your age"></input>
        </div>
    )
}

export default SetSimpleExample;