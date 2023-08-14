// This code defines a functional React component named Counter. 
// The component's purpose is to display a counter value on the screen 
// and provide two buttons to increment and decrement the counter.

import React, { useState } from "react";
import './index.css';

const Counter=()=>{
    const [count , setCount] = useState(0);

    const incCnt = ()=>{
        setCount(count+1);
    }
    const decCnt = ()=>{
        setCount(count-1);
    }
    return(
        <>
            <div className="center">
                <h1>{count}</h1>
                <button onClick={incCnt}>+</button>
                <button onClick={decCnt}>-</button>
            </div>
        </>
    )
}   

export default Counter;
