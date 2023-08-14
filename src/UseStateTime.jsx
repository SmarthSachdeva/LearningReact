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