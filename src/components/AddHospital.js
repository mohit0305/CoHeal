import React from 'react';
import {Link} from 'react-router-dom';

class AddHospital extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hid: 0,
			hname:'',
			address:'',
			pin: 0,
			contact:0
		}
	}
	onHIDChange = (event) =>{this.setState({hid: event.target.value})}
	onHNameChange = (event) =>{this.setState({hname: event.target.value})}
	onAddressChange = (event) =>{this.setState({address: event.target.value})}
	onPinCodeChange = (event) =>{this.setState({pin: event.target.value})}
	onContactChange = (event) =>{this.setState({contact: event.target.value})}

    
	onSubmitHLogin = (event)=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hid: this.state.hid,
				pin: this.state.pin,
				hname: this.state.hname,
				address: this.state.address,
				contact: this.state.contact
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
				<b className="page_title">Add Hospital</b>
				<div className="form">
				  <div className="form_input">
						<label>
							<span className="label">Hospital ID:<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="hid" id="hid" placeholder="XXXXXXXX" onChange={this.onHIDChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">Hospital Name:<b style={{color: "red"}}>*</b></span> 
							<input type="text" name="hid" id="hid" placeholder="Name of Hospital" onChange={this.onHNameChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">PinCode:<b style={{color: "red"}}>*</b></span>
							<input type="password" name="password" id="XXXXX" onChange={this.onPinCodeChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">Address:<b style={{color: "red"}}>*</b></span> 
							<input type="text" name="hid" id="hid" placeholder="Address" onChange={this.onAddressChange}/>
						</label>
					</div>
					
					<div className="form_input">
						<label>
							<span className="label">Contact No. - :<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="hid" id="hid" placeholder="XXXXXXXXXX" onChange={this.onContactChange}/>
						</label>
					</div>
					
				</div>
				<div className="submit_btn_div">
					<Link to='/Admin' onClick={this.onSubmitHLogin} >
						<button type="submit">Add Hospital</button>
					</Link>
				</div>
			</div>

		);
	}
}
export default AddHospital;
