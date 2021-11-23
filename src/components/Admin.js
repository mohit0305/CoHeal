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
            <b className='page_title' style={{textAlign: 'center'}}> Admin Dashboard</b>
			<div className="form">
				<b className="description marg-2"> Add or Delete Hospitals By Clicking The buttons Below </b>
				<div className="submit_btn_div marg-2">
				<Link to='/AddHospital'>
					<button>Add Hospital</button>
				</Link>
				</div>
				<div className="submit_btn_div danger marg-2">
				<Link to='/RemoveHospital'>
					<button >Remove Hospital</button>
				</Link>
				</div>
			</div>
        </div>
		);
	}
}
export default Hospital;
