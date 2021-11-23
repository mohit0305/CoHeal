import React from 'react';
import {Link} from 'react-router-dom';


class Book extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         slots: [
            { sno: 1, hospital: '', vaccine: '', available : 10 },
            { sno: 2, hospital: '', vaccine: '', available : 10  },
            { sno: 3, hospital: '', vaccine: '', available : 10  },
            { sno: 4, hospital: '', vaccine: '', available : 10  }
         ],
		 beds: [
            { sno: 1, hospital: '', available : 10 },
            { sno: 2, hospital: '', available : 10  },
            { sno: 3, hospital: '', available : 10  },
            { sno: 4, hospital: '', available : 10  }
         ],
         hname:'',//hname - hospital name for vaccine booking
         bhname:'',//bhname - hospital name for icu bed booking
         vaccine:''
      }
   }
  
   onHnameChange = (event) =>{this.setState({hname: event.target.value})}
	onOptChange = (event) =>{this.setState({vaccine: event.target.value})}
   onBHnameChange = (event) =>{this.setState({bhname: event.target.value})}

   renderSlotsHeader() {
	let header = Object.keys(this.state.slots[0])
	return header.map((key, index) => {
	   return <th key={index} className = "pr3">{key.toUpperCase()}</th>
	})
 }




 
 renderBedsHeader() {
	let header = Object.keys(this.state.beds[0])
	return header.map((key, index) => {
	   return <th key={index} className = "pr3">{key.toUpperCase()}</th>
	})
 }

   renderSlotsData() {
	return this.state.slots.map((slot, index) => {
	   const { sno, hospital, vaccine, available  } = slot //destructuring
	   return (
		  <tr key={sno}>
			 <td className = "pr3">{sno}</td>
			 <td className = "pr3">{hospital}</td>
			 <td className = "pr3">{vaccine}</td>
			 <td className = "pr3">{available}</td>
		  </tr>
	   )
	})
 }


 renderBedsData() {
	return this.state.beds.map((bed, index) => {
	   const { sno, hospital, available  } = bed //destructuring
	   return (
		  <tr key={sno}>
			 <td className = "pr3">{sno}</td>
			 <td className = "pr3">{hospital}</td>
			 <td className = "pr3">{available}</td>
		  </tr>
	   )
	})
 }

  
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
		  <div>
         <div className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
            <h1>Available Vaccine Slots</h1>
			<table id='slots' className="center">
               <tbody>
                  <tr>{this.renderSlotsHeader()}</tr>
                  {this.renderSlotsData()}
               </tbody>
            </table>
         </div>
		 <div className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
         <h1>Available ICU Beds</h1>
			<table id='slots' className="center">
               <tbody>
                  <tr>{this.renderBedsHeader()}</tr>
                  {this.renderBedsData()}
               </tbody>
            </table>
		 </div>
       <div className="br2 container">
				<b className="page_title">Provide Vaccine Slots Booking Details</b>
				<div className="form">
					<div className="form_input">
						<label>
							<span className="label">Enter Hospital Name(from above list) </span>
							<input type="text" id="hname" name="hname" placeholder="from available Slots list" onChange={this.onHnameChange} />
						</label>	
					</div>
					<div className="form_input">
						<label>
							<span className="label">Select Vaccine:</span>
							<select id="opt" name="opt" defaultValue="" onChange={this.onOptChange}>
								<option disabled value="" >--</option>
								<option value="Vacc">Covishield</option>
								<option value="ICU">Covaxin</option>
							</select>
						</label>
					</div>
				</div>
				<div className="submit_btn_div">
					  <button className="sub-btn grow" id="sub-btn" onClick={this.onSubmitSearch}>Book</button>
				</div>
			</div>
         <div className="br2 container">
				<b className="page_title">Provide ICU Beds Booking Details</b>
				<div className="form">
					<div className="form_input">
						<label>
							<span className="label">Enter Hospital Name(from above list) </span>
							<input type="text" id="hname" name="hname" placeholder="from Available Beds list" onChange={this.onBHnameChange} />
						</label>	
					</div>
				</div>
				<div className="submit_btn_div">
					  <button className="sub-btn grow" id="sub-btn" onClick={this.onSubmitSearch}>Book</button>
				</div>
			</div>
         
		 </div>
      )
   }
}

export default Book;