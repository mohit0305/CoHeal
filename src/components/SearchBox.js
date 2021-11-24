import React from 'react';
import {Link} from 'react-router-dom'
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
		fetch('http://localhost:3001/searchava', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				pin: this.state.pin,
				opt: this.state.opt,
			})
		}).then(response => response.json())
		.then(list => {
			if(!(list[0].hid)){
				if(list == "Not Available") this.props.loadList([],this.state.opt);
				else {alert(list);
				console.log(list);
				this.props.loadList([],'')}
			}
			else{
				this.props.loadList(list,this.state.opt);
			}
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
