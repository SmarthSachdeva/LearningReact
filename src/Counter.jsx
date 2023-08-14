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
