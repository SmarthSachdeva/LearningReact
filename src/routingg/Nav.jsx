import React from "react";
import { BrowserRouter , Route , Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';

const Nav =()=>{
    return(
        <div>
            <Switch>
                <Route path="/" Component={About}/>
                <Route path="/contact" Component={Contact} /> 
            </Switch>
            
        </div>
    )
}

export default Nav;