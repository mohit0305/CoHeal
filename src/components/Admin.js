import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class Hospital extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hname: '',
		}
	}
	
	render(){
		
		return(
        <div className="container">
            <h1 className='page_title center'> Admin Dashboard</h1>
            <h2> Add or Delete Hospitals By Clicking The buttons Below </h2>
            <Link to='/AddHospital'><button className="submit_btn_div">Add Hospital</button></Link>
            <Link to='/RemoveHospital'><button className="submit_btn_div">Remove Hospital</button></Link>
            </div>
		);
	}
}
export default Hospital;