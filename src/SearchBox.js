import React from 'react';


function SearchBox({SearchChange,Select,SelectValue,ClearSearch,SearchValue,ClickSearch}){
    var name={SearchValue};
    var select = {SelectValue};
    return (
        <div className = 'pa2'>
            <label style = {{marginRight : "100px", color : "white"}}> Enter Pincode :  
     <input className='pa3 ba b--green bg-lightest-blue' style = {{marginLeft : "30px"}} value={name.SearchValue} type = 'search' placeholder = 'Enter pincode'  onChange = {SearchChange} />
     </label>
     <br></br>
     <label style = {{marginRight : "200px" , color : "white"}}> select Vaccine/ICU Bed : 
        <select style = {{marginLeft : "30px"}} onChange={Select}>
        <option value="Vaccine Slots">Vaccine Slots</option>
        <option value="ICU Beds">ICU Beds</option>
      </select>
      </label>
     <br></br>
     <br></br>
     <br></br>
    <button style = {{backgroundColor : "blueviolet" , marginRight : "50px",paddingLeft : "30px",paddingRight:"30px",color : "white"}} 
            className ='pa3' 
            onClick = {ClickSearch} > Search </button>
    <button style = {{backgroundColor : "blueviolet" , marginLeft : "50px",paddingLeft : "30px",paddingRight:"30px",color : "white"}}
            onClick={ClearSearch}> Clear </button>
     </div> 
    );
}
export default SearchBox;