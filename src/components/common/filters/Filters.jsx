import React from 'react'
import "./Filters.css"
const Filters = ({filterlist}) => {
  return (
    <div className='filters'>
      {filterlist && filterlist.map((filter)=>{
        return <filterItem filter={filter} key={filter.id}/>
      })}
    </div>
  )
}

export default Filters