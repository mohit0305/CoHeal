import React from 'react';
class HLogin extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			hname: 0,
            pass: ''
		}
	}
	onNameChange = (event) =>{this.setState({hname: event.target.value})}
	onPassChange = (event) =>{this.setState({pass: event.target.value})}

    
	onSubmitSearch = ()=>{
		fetch('', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				hname: this.state.hname,
				pass: this.state.pass,
			})
		}).then(response => response.json())
		.then(list => {
			
		})
		console.log(this.state)
	}
	render(){
		
		return(
			<article className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center" >
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Hospital Login</legend>
							<div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="hname">Hospital's name</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="text" 
									name="hname"  
									id="hname"
                  placeholder="Name of Hospital"
									onChange={this.onNameChange}
								/>
              </div>
                    <div className="flex items-center mt3">
								<label className="tr w-25 db fw6 lh-copy f6" htmlFor="pass">Password</label>
								<input 
									className="pa2 br-pill input-reset ba bg-transparent hover-bg-black hover-white w-75 ml3" 
									type="Password" 
									name="pass"  
									id="pass"
                  placeholder="Password"
									onChange={this.onPassChange}
								/>
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
export default HLogin;