import React from 'react';
import HomePage from './Components/Homepage';
import Login from './Components/Login';
import HLogin from './Components/HLogin';
import ALogin from './Components/ALogin';
import Register from './Components/Register';
import Hospital from './Components/Hospital';
import Admin from './Components/Admin';
import Citizen from './Components/Citizen';
import GetSlip from './Components/GetSlip'
import AddHospital from './Components/AddHospital';
import RemoveHospital from './Components/RemoveHospital';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import logo from './logo192.png';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentRoute: window.location.pathname,
      admin: {
        islogged: false,
        aid:''
      },
      hospital: {
        islogged: false,
        hid:'',
        name:'',
        address:'',
        pincode:''
      },
      citizen: {
        islogged: false,
        uid:'',
        name:'',
        age:'',
        gender:'',
        address:''
      }
    }
    console.log(this.state)
  }
  
  onRouteChange = (route) =>{
    this.setState({currentRoute: route});
  }

  loadAdmin= (admin)=>{
    this.setState({admin:{
      islogged: true,
      aid: admin.aid
    }})
  }

  loadCitizen= (citizen) =>{
    this.setState({citizen:{
      islogged: true,
      uid: citizen.uid,
      name: citizen.name,
      age: citizen.age,
      gender: citizen.gender,
      address: citizen.address
    }})
  }

  loadHospital= (hospital) =>{
    this.setState({hospital:{
      islogged: true,
      hid: hospital.hid,
      name: hospital.name,
      address: hospital.address,
      pincode: hospital.pincode
    }})
  }

  logout = () =>{
    this.setState({
      currentRoute: '/',
      admin: {
        islogged: false,
        aid:''
      },
      hospital: {
        islogged: false,
        hid:'',
        name:'',
        address:'',
        pincode:''
      },
      citizen: {
        islogged: false,
        uid:'',
        name:'',
        age:'',
        gender:'',
      }
    })
  }

  render(){
    return(
      <div>
        <Router>
          <div>
            <nav className='navbar'>
              <Link to="/" onClick={() => this.onRouteChange('/')}><img className='navbar_content' style={{ height: 50, width: 50 }} alt='logo 'src={logo}/> </Link>
              { this.state.admin.islogged || this.state.citizen.islogged || this.state.hospital.islogged ?
                  <Link to="/" onClick={() => this.logout()}> <div className='navbar_content text'>Log Out</div></Link>
                :
                
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
              
              
            </nav>
            <div>
              <Routes>
                <Route exact path="/" element = {<HomePage/>}></Route>
                <Route exact path="/Login" element = {<Login loadCitizen={this.loadCitizen} onRouteChange={this.onRouteChange}/>}></Route>
                <Route path="/Register" element = {<Register loadCitizen={this.loadCitizen} onRouteChange={this.onRouteChange}/>}></Route>
                <Route path="/HLogin" element = {<HLogin loadHospital={this.loadHospital} onRouteChange={this.onRouteChange}/>}></Route>
                <Route path="/ALogin" element = {<ALogin loadAdmin={this.loadAdmin}/>}></Route>
                <Route path="/Hospital" element = {<Hospital hospital={this.state.hospital}/>}></Route>
                <Route path="/Admin" element = {<Admin admin={this.state.admin}/>}></Route>
                <Route path="/Citizen" element = {<Citizen citizen={this.state.citizen}/>}></Route>
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
