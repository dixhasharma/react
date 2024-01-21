import React from 'react'

const Localstorage = () => {
  return (
    <div>
    let count =0;
    
    while(count < 6000){
      window.localStorage.setItem(count, new Array(1024).join('a'));
      console.log(count++)
    }
    </div>
  )
}

export default Localstorage