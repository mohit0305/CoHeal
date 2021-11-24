import React from 'react';
import {useEffect, useState} from 'react'

class SearchList extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         list: this.props.list,
         listLength: this.props.listLength,
         opt: this.props.opt
      }
     console.log(this.state)
   }
  

	renderVListData(){
		return this.state.list.map((slot, index) => {
			const {name, date, ava  } = slot //destructuring
			return (
				<tr key={date}>
					<td className = "pr3">{date}</td>
					<td className = "pr3">{name}</td>
					<td className = "pr3">{ava}</td>
				</tr>
			)
		})
	}
	renderIListData(){
		return this.state.list.map((slot, index) => {
			const {name, ava  } = slot //destructuring
			return (
				<tr key={name}>
					<td className = "pr3">{name}</td>
					<td className = "pr3">{ava}</td>
				</tr>
			)
		})
	}


	render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
		return(
			<div>
			{
				this.state.list.length == 0 || this.state.listLength==0?
					<div className="br3 bg-gray black container">
						<div className="f4 mt3 mb2">No Nearby Hospitals Found</div>
						<div className="f5 mb3">Try different pincode</div>
					</div>
				: this.state.opt == 'Vacc'?
					<div>
						<div className="br4 ba b--black-10 mv4 w-100 w-100-m w-100-l mw7 shadow-5 center">
							<h1>Available Vaccine Slots</h1>
							<table id='slots' className="center">
								<tbody>
									<tr>
										<th className = "pr3">Date</th>
										<th className = "pr3">Hospital</th>
										<th className = "pr3">Available</th>
									</tr>
									{/*<tr>{this.renderListHeader()}</tr>*/}
									{this.renderVListData()}
								</tbody>
							</table>
						</div>
					</div>
				: this.state.opt == 'ICU'?
					<div>
						<div className="br4 ba b--black-10 mv4 w-100 w-100-m w-100-l mw7 shadow-5 center">
							<h1>Available ICU Beds</h1>
							<table id='slots' className="center">
								<tbody>
									<tr>
										<th className = "pr3">Hospital</th>
										<th className = "pr3">Available</th>
									</tr>
									{/*<tr>{this.renderListHeader()}</tr>*/}
									{this.renderIListData()}
								</tbody>
							</table>
						</div>
					</div>
				: <br/>
			}
			</div>






		)
	}



		  /*<div>
         <div className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
            <h1>Available Vaccine Slots</h1>
			<table id='slots' className="center">
               <tbody>
                  <tr>{this.renderSlotsHeader()}</tr>
                  {this.renderSlotsData()}
               </tbody>
            </table>
         </div>
         <div>
         {
         		this.state.listLength !==0? 
         		
         		<div className="br4 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
            <h1>Available Vaccine Slots</h1>
			<table id='slots' className="center">
               <tbody>
                  <tr>{this.renderListHeader()}</tr>
                  {this.renderListData()}
               </tbody>
            </table>
         </div>

         		:
         		<br/>
         }
         
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
		 </div>*/
}

export default SearchList; //exporting a component make it reusable and this is the beauty of rea