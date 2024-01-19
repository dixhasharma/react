import React from 'react'

const Marks = () => {
    const [name,setName]=React.useState("Aman")
    const [maths,setMaths]=React.useState(67);
    const [science,setScience]=React.useState(87);
  return (
    <div>
       <p>Name:{name}</p> 
       <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
       <h1>Enter your marks:</h1>
       <p>Maths:</p>
       <input type="text" value={maths} onChange={e=>setMaths(e.target.value)}/><br/>
       <p>Science:</p>
       <input type="text" value={science} onChange={e=>setScience(e.target.value)}/>
    </div>
  )
}

export default Marks;