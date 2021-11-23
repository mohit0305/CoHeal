import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			uid: 0,
			password: '',
		}
	}
	onUIDChange = (event) =>{this.setState({uid: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitLogin = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				uid: this.state.uid,
				password: this.state.password,
			})
		}).then(response => response.json())
		.then(citizen => {
			if(!(citizen.uid)){
				alert(citizen);
				console.log(citizen);
			}
			else{
				this.props.loadCitizen(citizen);
			}
		})
		console.log(this.state)
	}

	render(){
		return(
			<div className="container">
				<b className="page_title">Login </b>
			        <div className="form">
            <div className="form_input">
							<label>
								<span className="label">UID<b style={{color: "red"}}>*</b>:</span> 
							    <input type="number" name="uid" id="uid" placeholder="XXXXXXXXXXXX" onChange={this.onUIDChange}/>
							</label>
						</div>
						<div className="form_input">
							<label>
								<span className="label">Password<b style={{color: "red"}}>*</b>:</span>
							    <input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
							</label>
						</div>
					</div>
					<div className="submit_btn_div">
					   <Link to="/Citizen">	<button onClick={this.onSubmitLogin} type="submit">Login</button> </Link>
					</div>
					<div className="f5 pt2">
						New User?<b> </b>
						<Link to="/Register" onClick={() => this.props.onRouteChange('/Register')}> <p className='link black dim underline dib pointer'>Register Here</p></Link>
					</div>
			</div>
		);
	}
}
export default Login;
