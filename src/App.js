import React from 'react';
import HomePage from './Components/Homepage';
import Login from './Components/Login';
import HLogin from './Components/HLogin';
import ALogin from './Components/ALogin';
import Register from './Components/Register';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import logo from './logo192.png';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentRoute: window.location.pathname
    }
  }
  onRouteChange = (route) =>{
    this.setState({currentRoute: route});
  }

  render(){
    return(
      <div>
        <Router>
          <div>
            <nav className='navbar'>
              <Link to="/" onClick={() => this.onRouteChange('/')}><img className='navbar_content' style={{ height: 50, width: 50 }} alt='logo 'src={logo}/> </Link>
              {/* <div className='navbar'> */}
                {
                  this.state.currentRoute !== '/'? <Link to="/" onClick={() => this.onRouteChange('/')}> <div className='navbar_content text'>Home</div></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== '/Login'? <Link to="/Login" onClick={() => this.onRouteChange('/Login')}> <div className='navbar_content text'>Login</div></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== '/Register'? <Link to="/Register" onClick={() => this.onRouteChange('/Register')}> <div className='navbar_content text'>Register</div></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== '/HLogin'? <Link to="/HLogin" onClick={() => this.onRouteChange('/HLogin')}> <div className='navbar_content text'>Hospital Login</div></Link>
                  : <span/>
                }{
                  this.state.currentRoute !== '/ALogin'? <Link to="/ALogin" onClick={() => this.onRouteChange('/ALogin')}> <div className='navbar_content text'>Admin Login</div></Link>
                  : <span/>
                }
              {/* </div> */}
              
            </nav>
            <div>
              <Routes>
                <Route exact path="/" element = {<HomePage/>}></Route>
                <Route exact path="/Login" element = {<Login/>}></Route>
                <Route path="/Register" element = {<Register />}></Route>
                <Route path="/HLogin" element = {<HLogin/>}></Route>
                <Route path="/ALogin" element = {<ALogin/>}></Route>
              </Routes>
            </div>

          </div>
        </Router>
      </div>
     
    );
  }
}
/*<button onClick={handleClick}>Search Vaccine/ICU bed</button>*/
export default App;
