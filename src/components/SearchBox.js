import React from 'react';

class SearchBox extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			pin: 0,
			opt: ''
		}
	}
	onPinChange = (event) =>{this.setState({pin: event.target.value})}
	onOptChange = (event) =>{this.setState({opt: event.target.value})}


	onSubmitSearch = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				pin: this.state.pin,
				opt: this.state.opt,
			})
		}).then(response => response.json())
		.then(list => {
				this.props.loadList(list);
		})
		console.log(this.state)
	}
	render(){
		return(
			<div className="br2 container">
				<b className="page_title">Search Avilability</b>
				<div className="form">
					<div className="form_input">
						<label>
							<span className="label">Enter Pincode:</span>
							<input type="number" id="pin" name="pin" placeholder="XXXXXX" onChange={this.onPinChange} />
						</label>	
					</div>
					<div className="form_input">
						<label>
							<span className="label">Select Option:</span>
							<select id="opt" name="opt" defaultValue="" onChange={this.onOptChange}>
								<option disabled value="" >--</option>
								<option value="Vacc">Vaccination Slots</option>
								<option value="ICU">ICU Bed</option>
							</select>
						</label>
					</div>
				</div>
				<div className="submit_btn_div">
					<button className="sub-btn grow" id="sub-btn" onClick={this.onSubmitSearch}>Search</button>
				</div>
			</div>
           
		);
	}
}
export default SearchBox;
