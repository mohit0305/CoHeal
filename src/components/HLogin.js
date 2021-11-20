import React from 'react';
import {Link} from 'react-router-dom';

class HLogin extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hid: 0,
			password: ''
		}
	}
	onHIDChange = (event) =>{this.setState({hid: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

    
	onSubmitHLogin = (event)=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hid: this.state.hid,
				password: this.state.password,
			})
		}).then(response => response.json())
		.then(hospital => {
			if(!(hospital.uid)){
				alert(hospital);
				console.log(hospital);
				event.preventDefault();
			}
			else{
				this.props.loadHospital(hospital);
			}
		})

		console.log(this.state)
	}

	render(){
		
		return(
			<div className="container">
				<b className="page_title">Hospital Login</b>
				<div className="form">
				  <div className="form_input">
						<label>
							<span className="label">Hospital ID:<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="hid" id="hid" placeholder="XXXXXXXX" onChange={this.onHIDChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">Password:<b style={{color: "red"}}>*</b></span>
							<input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
						</label>
					</div>
				</div>
				<div className="submit_btn_div">
					<Link to='/Hospital' onClick={this.onSubmitHLogin} >
						<button type="submit">Login</button>
					</Link>
				</div>
			</div>

		);
	}
}
export default HLogin;