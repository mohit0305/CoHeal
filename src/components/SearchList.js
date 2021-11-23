import React from 'react';



class SearchList extends React.Component {
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
         ]
      }
   }
  
   renderSlotsHeader() {
	let header = Object.keys(this.state.slots[0])
	return header.map((key, index) => {
	   return <th key={index} >{key.toUpperCase()}</th>
	})
 }

 
 renderBedsHeader() {
	let header = Object.keys(this.state.beds[0])
	return header.map((key, index) => {
	   return <th key={index} >{key.toUpperCase()}</th>
	})
 }

   renderSlotsData() {
	return this.state.slots.map((slot, index) => {
	   const { sno, hospital, vaccine, available  } = slot //destructuring
	   return (
		  <tr key={sno}>
			 <td>{sno}</td>
			 <td>{hospital}</td>
			 <td>{vaccine}</td>
			 <td>{available}</td>
		  </tr>
	   )
	})
 }


 renderBedsData() {
	return this.state.beds.map((bed, index) => {
	   const { sno, hospital, available  } = bed //destructuring
	   return (
		  <tr key={sno}>
			 <td>{sno}</td>
			 <td>{hospital}</td>
			 <td>{available}</td>
		  </tr>
	   )
	})
 }

  
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
		  <div>
         <div className="data_table">
            <b className="data_table_title">Available Vaccine Slots</b>
			   <table>
               <tbody>
                  <tr>{this.renderSlotsHeader()}</tr>
                  {this.renderSlotsData()}
               </tbody>
            </table>
         </div>
         
		   <div className="data_table">
         <b className="data_table_title">Available ICU Beds</b>
			   <table>
               <tbody>
                  <tr>{this.renderBedsHeader()}</tr>
                  {this.renderBedsData()}
               </tbody>
            </table>
		   </div>
		   </div>
      )
   }
}

export default SearchList; //exporting a component make it reusable and this is the beauty of react
