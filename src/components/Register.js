import React from 'react';
import {Link} from 'react-router-dom';
class Register extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			name: '',
			uid: 0,
			age: 0,
			gender: '',
			phno: 0,
			address: '',
			email: '',
			password: '',
		}
	}
	onNameChange = (event) =>{this.setState({name: event.target.value})}
	onUIDChange = (event) =>{this.setState({uid: event.target.value})}
	onAgeChange = (event) =>{this.setState({age: event.target.value})}
	onGenderChange = (event) =>{this.setState({gender: event.target.value})}
	onNumberChange = (event) =>{this.setState({phno: event.target.value})}
	onAddressChange = (event) =>{this.setState({address: event.target.value})}
	onEmailChange = (event) =>{this.setState({email: event.target.value})}
	onPasswordChange = (event) =>{this.setState({password: event.target.value})}

	onSubmitRegister = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				uid: this.state.uid,
				age: this.state.age,
				gender: this.state.gender,
				phno: this.state.phno,
				address: this.state.address,
				email: this.state.email,
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
			<article className="br3 ba b--black-10 mv4 w-100 w-75-m w-75-l mw8 shadow-5 center" >
				<main className="pa4 black-80">
					<div className="">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Register</legend>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="name">Name* :</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="text" 
									name="name"  
									id="name"
									onChange={this.onNameChange}
								/>
							</div><div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="uid">UID* :</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="number" 
									name="uid"  
									id="uid"
									placeholder="XXXX-XXXX-XXXX"
									onChange={this.onUIDChange}
								/>
							</div>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="age">Age* :</label>
								<input 
									className="pa2 input-rese ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="number"
									name="age"  
									id="age"
									onChange={this.onAgeChange}
								/>
							</div>
							<div className="flex items-center mt3">
							<label className="tr w-20 db fw6 lh-copy f6" htmlFor="gender">Gender* :</label>
								<select 
									className="pa2 f6 input-rese ba bg-transparent hover-bg-black hover-white w-80 ml3"
									id="gender"
									name="gender"
									onChange={this.onGenderChange}>
										<option disabled selected value="">Select Option</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Other">Other</option>
								</select>
							</div>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="number">Phone Number* :</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="number" 
									step="0"
									name="number"  
									id="number"
									onChange={this.onNumberChange}
								/>
							</div>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="address">Address :</label>
								<textarea
									style={{resize:'none'}}
									className="pa2 input-rese ba bg-transparent hover-bg-black hover-white w-80 ml3"
									id="address"
									name="address"
									onChange={this.onAddressChange}></textarea>
							</div>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="email-address">Email :</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="email" 
									name="email-address"  
									id="email-address"
									onChange={this.onEmailChange}
								/>
							</div>
							<div className="flex items-center mv3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="password">Password* :</label>
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
						<Link to="/Login"><input 
								onClick={this.onSubmitRegister}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
								</Link>
						</div>
					</div>
				</main>
			</article>
		);
	}
}
export default Register;