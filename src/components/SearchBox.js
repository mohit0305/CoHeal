import React from 'react';


function SearchBox({SearchChange,Select,SelectValue,ClearSearch,SearchValue,ClickSearch}){
    var name={SearchValue};
    var select = {SelectValue};
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-75-m w-75-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Search Vaccine /Icu beds</legend>
							<div className="flex items-center mt3">
								<label className="tr w-20 db fw6 lh-copy f6" htmlFor="name">Pincode*</label>
								<input 
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 ml3" 
									type="text" 
									name="name"  
                                    value = {name.SearchValue}
									id="name"
									onChange={SearchChange}
								/>
							</div>
                            <div className="flex items-center mt3">
							<label className="tr w-20 db fw6 lh-copy f6" htmlFor="gender"> Select Vaccine-slot / ICU - Beds</label>
								<select 
									className="pa2 f6 input-rese ba bg-transparent hover-bg-black hover-white w-80 ml3"
									id="gender"
									name="gender"
									onChange={Select}>
										<option disabled selected value="">Select Option</option>
										<option value="Vaccine Slot">Vaccine Slot</option>
										<option value="ICU - Beds">ICU - Beds</option>
								</select>
							</div>
						</fieldset>
						<div className="">
							<input 
								onClick={ClickSearch}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit"
                                value="Search"/>
						</div>
                        <div className="">
							<input 
								onClick={ClearSearch}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit"
                                value="Clear"/>
						</div>
					</div>
				</main>
			</article>
    );
}
export default SearchBox;


/*<div className = 'pa2'>
            <label style = {{marginRight : "100px", color : "white"}}> Enter Pincode :  
     <input className='pa3 ba b--green bg-lightest-blue'
            style = {{marginLeft : "30px"}} value={name.SearchValue} type = 'search' placeholder = 'Enter pincode'  onChange = {SearchChange} />
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
     </div> */