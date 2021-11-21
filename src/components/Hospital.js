import React from 'react';
import '../App.css';
class Hospital extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hname: '',
            address:'',
            pin: 0,
            slot1:0,
            slot2:0,
            slot3:0,
            beds : 0
		}
	}
	onNameChange = (event) =>{this.setState({hname: event.target.value})}
	onAddressChange = (event) =>{this.setState({address: event.target.value})}
    onPinChange = (event) =>{this.setState({pin: event.target.value})}
    onSlot1Change = (event) =>{this.setState({slot1: event.target.value})}
    onSlot2Change = (event) =>{this.setState({slot2: event.target.value})}
    onSlot3Change = (event) =>{this.setState({slot3: event.target.value})}
    onBedChange = (event) =>{this.setState({beds: event.target.value})}
	onSubmitSearch = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hname: this.state.hname,
				pin: this.state.pin,
                address : this.state.address,
                slot1 : this.state.slot1,
                slot2 : this.state.slot2,
                slot3 : this.state.slot3,
                beds : this.state.beds
			})
		}).then(response => response.json())
		.then(list => {
			
		})
		console.log(this.state)
	}
	render(){
		
		return(
            <div>
        <div className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
            <h1> Hospital Dashboard</h1>
            <h2> {this.state.hname} </h2>
            <h3> {this.state.pin}</h3>
            <table className ="center">
                <thead>
                    <tr>
                        <th className = "mr3 pr3">Date</th>
                        <th className = "mr3 ">Available Vaccine Slots </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = "mr3 pr3">Today</td>
                    </tr>
                    <tr>
                        <td className = "mr3 pr3">Tommorow</td>
                    </tr>
                    <tr>
                        <td className = "mr3 pr3">next day</td>
                    </tr>
                </tbody>
                </table>
                <h4 className = "centre">Available Icu Beds  -  {this.state.beds}</h4>
            </div>
            <div>
            <article className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 " >
				<main className="pa4 black-80">
					<div className="measure left">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
							<legend className="f2 fw6 ph0 mh0">Update Vaccine slots</legend>
							<div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="hname">Today</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="number" 
									name="slot"  
									id="slot"
                                    placeholder="0"
									onChange={this.onSlot1Change}
								/>
              </div>
                             <div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="hname">Tomorrow</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="number" 
									name="slot2"  
									id="slot2"
                                    placeholder="0"
									onChange={this.onSlot2Change}
								/>
              </div>	    
                             <div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="hname">next day</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="number" 
									name="slot3"  
									id="slot3"
                                    placeholder="0"
									onChange={this.onSlot3Change}
								/>
              </div>	
						</fieldset>
						<div className="">
						<input 

								onClick={this.onSubmitSearch}
								className="b br-pill ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Update"/>
						</div>
					</div>
				</main>
			</article>
            
            <article className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 " >
				<main className="pa4 black-80">
					<div className="measure left">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
							<legend className="f2 fw6 ph0 mh0">Update ICU Beds</legend>
							<div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="hname">Available Beds</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="number" 
									name="beds"  
									id="beds"
                                    placeholder="0"
									onChange={this.onBedChange}
								/>
              </div>	
						</fieldset>
						<div className="">
						<input 

								onClick={this.onSubmitSearch}
								className="b br-pill ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Update"/>
						</div>
					</div>
				</main>
			</article>
            </div>
            </div>
		);
	}
}
export default Hospital;
