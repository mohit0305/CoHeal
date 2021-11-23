import React from 'react';
import {Link} from 'react-router-dom';

class RemoveHospital extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hid: 0,
			pin: 0,
		}
	}
	onHIDChange = (event) =>{this.setState({hid: event.target.value})}
	onPinCodeChange = (event) =>{this.setState({pin: event.target.value})}

    
	onSubmitHLogin = (event)=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hid: this.state.hid,
				pin: this.state.pin,
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
				<b className="page_title">Remove Hospital</b>
				<div className="form">
				  <div className="form_input">
						<label>
							<span className="label">Hospital ID:<b style={{color: "red"}}>*</b></span> 
							<input type="number" name="hid" id="hid" placeholder="XXXXXXXX" onChange={this.onHIDChange}/>
						</label>
					</div>
					<div className="form_input">
						<label>
							<span className="label">PinCode:<b style={{color: "red"}}>*</b></span>
							<input type="number" name="pin" id="XXXXXX" onChange={this.onPinCodeChange}/>
						</label>
					</div>
				</div>
				<div className="submit_btn_div danger">
					<Link to='/Admin' onClick={this.onSubmitHLogin} >
						<button type="submit">Remove Hospital</button>
					</Link>
				</div>
			</div>

		);
	}
}
export default RemoveHospital;
