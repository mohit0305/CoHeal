import React from 'react';
import {useNavigate} from "react-router-dom";
import App from './App';
import Login from './Login';
import Register from './Register'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { render } from '@testing-library/react';
function Navigation(){

    return(
   <div>
       <Router>
       <div>
   
    <div>
    <Link to="/"> <button style = {{backgroundColor : "cyan",paddingLeft : "50px",paddingRight:"50px",marginRight : "50px"}}>  Login</button> </Link>
    <Link to="/Register"> <button style = {{backgroundColor : "cyan",paddingLeft : "50px",paddingRight:"50px",marginRight : "50px"}}>  Register</button> </Link>
    <Link to="/App">  <button style = {{backgroundColor : "cyan",paddingLeft : "50px",paddingRight:"50px"}} > Search  </button></Link>
      </div>
      
      <hr />

      <Routes>
        <Route exact path="/" element = {<Login />}></Route>
        <Route path="/Register" element = {<Register />}></Route>
        <Route path="/App" element = {<App />}></Route>
      </Routes>
    
    </div>
       </Router>
   </div>
    );
    
    
}
/*<button onClick={handleClick}>Search Vaccine/ICU bed</button>*/
export default Navigation;