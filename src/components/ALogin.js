import React from 'react';

class ALogin extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			aid: 0,
			password: '',
		}
	}
	onAIDChange = (event) =>{this.setState({aid: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitALogin = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				aid: this.state.aid,
				password: this.state.password,
			})
		}).then(response => response.json())
		.then(admin => {
			if(!(admin.aid)){
				alert(admin);
				console.log(admin);
			}
			else{
				this.props.loadAdmin(admin);
			}
		})
		console.log(this.state);
	}
	render(){
		return(
			<div className="container">
				<b className="page_title">Admin Login </b>
				<div className="form">
				  <div className="form_input">
						<label>
							<span className="label">Admin ID:<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="aid" id="aid" placeholder="XXX" onChange={this.onAIDChange}/>
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
					<button onClick={this.onSubmitALogin} type="submit">Login</button>
				</div>
			</div>
		);
	}
}
export default ALogin;
