// This code defines a React component named UseStateTime. 
// The component's purpose is to continuously display and update the 
// current time using the useState hook in React.

import React , {useState} from "react";
import './index.css';


const UseStateTime = () =>{
    var date = new Date();
    
    var time = date.toLocaleTimeString();
    var [ctime , setTime] = useState(time);

    setInterval(()=>{
        time = date.toLocaleTimeString();
        setTime(time)
    },1000)
    

    return(
        <div className='center'>
            <div class="row">
                <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> {ctime}</h3>
                
            </div>
        </div>
      
    </div>
    )
}   

export default UseStateTime;