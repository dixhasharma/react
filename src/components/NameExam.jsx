import React,{useState} from 'react'

const NameExam = () => {
    const[name,setName]=useState('santosh rawat');
  return (
    <div>
        <p>NameExam: {name}</p>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default NameExam