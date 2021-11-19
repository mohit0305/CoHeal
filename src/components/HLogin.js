import React from 'react';

class HLogin extends React.Component {
	constructor(props){
		super(props);
		this.state ={
		    hid: 0,
			password: '',
		}
	}
	onHIDChange = (event) =>{this.setState({hid: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitRegister = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hid: this.state.hid,
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
				<b className="page_title">Hospital Login </b>
			        <div className="form">
                        <div className="form_input">
							<label>
								<span className="label">Hospital ID<b style={{color: "red"}}>*</b></span> 
							    <input type="number" name="hid" id="hid" placeholder="0000-0000-0000" onChange={this.onHIDChange}/>
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
export default HLogin;
