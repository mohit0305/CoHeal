import React from 'react';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			name: '',
		    uid: 0,
			phno: 0,
			password: '',
		}
	}
	onNameChange = (event) =>{this.setState({name: event.target.value})}
	onUIDChange = (event) =>{this.setState({uid: event.target.value})}
	onNumberChange = (event) =>{this.setState({phno: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitRegister = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				uid: this.state.uid,
				phno: this.state.phno,
				password: this.state.password,
			})
		}).then(response => response.json())
		.then(user => {
			if(user){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
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
								<span className="label"> Name<b style={{color: "red"}}>*</b></span>
							    <input type="text" name="name" id="name" onChange={this.onNameChange}/>
							</label>
						</div>
                        <div className="form_input">
							<label>
								<span className="label">User ID<b style={{color: "red"}}>*</b></span> 
							    <input type="number" name="uid" id="uid" placeholder="0000-0000-0000" onChange={this.onUIDChange}/>
							</label>
						</div>
						<div className="form_input">
							<label>
								<span className="label"> Phone Number<b style={{color: "red"}}>*</b></span>
							    <input type="number"name="number" id="number" onChange={this.onNumberChange}/>
							</label>
						</div>
						<div className="form_input">
							<label>
								<span className="label"> Password<b style={{color: "red"}}>*</b></span>
							    <input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
							</label>
						</div>
					</div>
					<div className="submit_btn_div">
						<button onClick={this.onSubmitRegister} type="submit">Login</button>
					</div>
			</div>
		);
	}
}
export default Login;
