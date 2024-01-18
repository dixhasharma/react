import React,{useState} from 'react';

function Counter(){
    //using th usestate hook to declare a state variable 'count'
    //the first element of the array is the current state value, and the second
    const[count,setCount]=useState(0);
    //event handler to incraement thr count whenm the button is clickd
    const handleIncrement=()=>{
        setCount(count+1);
    };
    const handleReset =()=>{
        setCount(0);
    };

    const handleDecrement=()=>{
        setCount(count-1);
    };
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}
export default Counter;