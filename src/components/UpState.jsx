import React from 'react'

const UpState = () => {
    const[person,setPerson]=React.useState({
        name:"JaSMEET",
        age:20,
        occupation:"developer"
    })
    const handleUpdateName=()=>{
        setPerson({
            ...person,
            name:"Muskan"
        })
    }
    const handleUpdateAge=()=>{
        setPerson({
            ...person,
            age:person.age+1
        })
    }
    const handleUpdateOccupation=()=>{
        setPerson({
            ...person,
            occupation:"Designer"
        })
    }
  return (
    <div>
        <h1>updateing object in react</h1>
        <p>name:{person.name}</p>
        <p>age:{person.age}</p>
        <p>occupation:{person.occupation}</p>
        <button onClick={handleUpdateName}>Update Name</button>
        <button onClick={handleUpdateAge}>increase age</button>
        <button onClick={handleUpdateOccupation}>Update Occupation</button>
      
    </div>
  )
}

export default UpState