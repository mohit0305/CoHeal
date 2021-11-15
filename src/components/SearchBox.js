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
				name: this.state.name,
				uid: this.state.uid,
			})
		}).then(response => response.json())
		.then(list => {
			
		})
		console.log(this.state)
	}
	render(){
		return(
			<article className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Search Availability</legend>
							<div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="pin">Enter Pincode</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="number" 
									name="pin"  
									id="pin"
                  placeholder="XXXXXX"
									onChange={this.onPinChange}
								/>
              </div>
							<div className="flex items-center mt3">
							<label className="tr w-25 db fw6 lh-copy f6" htmlFor="opt">Select Option</label>
								<select 
									className="pa2 br-pill f6 input-rese ba bg-transparent hover-bg-black hover-white w-75 ml3"
									id="opt"
									name="opt"
									onChange={this.onOptChange}>
										<option selected disabled value="">--</option>
										<option value="Vacc">Vaccination Slots</option>
										<option value="ICU">ICU Beds</option>

								</select>
							</div>
						</fieldset>
						<div className="">
							<input 

								onClick={this.onSubmitSearch}
								className="b br-pill ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Search"/>

						</div>
					</div>
				</main>
			</article>

		);
	}
}
export default SearchBox;

