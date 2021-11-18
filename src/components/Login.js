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
			<article className="br3 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center" >
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Login</legend>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="name">Name*</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="text" 
									name="name"  
									id="name"
									onChange={this.onNameChange}
								/>
							</div>
                            <div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="uid">UID*</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="number" 
									name="uid"  
									id="uid"
									placeholder="0000-0000-0000"
									onChange={this.onUIDChange}
								/>
							</div>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="number">Phone Number*</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="number" 
									name="number"  
									id="number"
									onChange={this.onNumberChange}
								/>
							</div>
							<div className="flex items-center mv3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="password">Password*</label>
								<input 
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="password" 
									name="password" 
									id="password"
									onChange={this.onPasswordChange}
								/>
							</div>
						</fieldset>
						<div className="">
							<input 
								onClick={this.onSubmitRegister}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Login"/>
						</div>
					</div>
				</main>
			</article>
		);
	}
}
export default Login;