import React from 'react';
import HomePage from './components/Homepage';
import Login from './components/Login';
import HLogin from './components/HLogin';
import ALogin from './components/ALogin';
import Register from './components/Register'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import logo from './logo192.png';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentRoute: 'Home'
    }
  }
  onRouteChange = (route) =>{
    this.setState({currentRoute: route})
  }


  render(){ 
    return(
      <div>
        <Router>
          <div>
            <nav className='dt w-100 border-box pa2 ph5-ns'>
              <Link to="/" onClick={() => this.onRouteChange('Home')}><img className='dtc v-mid link dim pa2 pointer w-25' style={{ height: 50, width: 50 }} alt='logo 'src={logo}/> </Link>
              <div className='dtc v-mid w-75 tr'>
                {
                  this.state.currentRoute !== 'Home'? <Link to="/" onClick={() => this.onRouteChange('Home')}> <p className='link dim black underline f4-ns dib mr3 mr4-ns pointer'>Home</p></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== 'Login'? <Link to="/Login" onClick={() => this.onRouteChange('Login')}> <p className='link dim black underline f4-ns dib mr3 mr4-ns pointer'>Login</p></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== 'Register'? <Link to="/Register" onClick={() => this.onRouteChange('Register')}> <p className='link dim black underline f4-ns dib mr3 mr4-ns pointer'>Register</p></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== 'HLogin'? <Link to="/HLogin" onClick={() => this.onRouteChange('HLogin')}> <p className='link dim black underline f4-ns dib mr3 mr4-ns pointer'>Hospital Login</p></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== 'ALogin'? <Link to="/ALogin" onClick={() => this.onRouteChange('ALogin')}> <p className='link dim black underline f4-ns dib pointer'>Admin Login</p></Link>
                  : <span/>
                }
              </div>
              
            </nav>
  
            <Routes>
              <Route exact path="/" element = {<HomePage/>}></Route>
              <Route exact path="/Login" element = {<Login/>}></Route>
              <Route path="/Register" element = {<Register />}></Route>
              <Route path="/HLogin" element = {<HLogin/>}></Route>
              <Route path="/ALogin" element = {<ALogin/>}></Route>
            </Routes>
          
          </div>
        </Router>
      </div>
     
    );
  }
}
/*<button onClick={handleClick}>Search Vaccine/ICU bed</button>*/
export default App;