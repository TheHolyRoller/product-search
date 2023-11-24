'use client'

import {useState, useEffect, useCallback, useRef} from 'react'
import sc from '../Styles/SearchComponent.module.css'; 
import Dropdown from '../Components/Dropdown'; 
import MuiDropDown from '../Components/MuiDropDown'; 
import RangeDatePicker from '../Components/RangeDatePicker'; 
import Slider from '../Components/DiscreteSlider'; 
import ConditionSelector from '../Components/ConditionSelector'; 
import axios from 'axios';
import DropDown from '../Components/Dropdown'; 






/** 

Types of Search Parameters: 
1. Price Range Two Text Inputs 
2. Brands Drop Down check box menu 
3. Age Two Calendar Selectors 
4. Distance Range Slider 
5. Condition Drop down check box menu with the option for any type of condition. 


*/

function SearchComponent() {

const [minPrice, setMinPrice] = useState(""); 
const [maxPrice, setMaxPrice] = useState(""); 


// Add in the Send data function here 
const data = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "writing", "coding"],
};

function sendData() {
  // Use axios to send a post request to the backend server
  
  console.log('trying to send data')
  axios
    .post("http://localhost:5000/server", data)
    .then((response) => {
      // Do something with the response
      // For example, alert the response data
      alert(JSON.stringify(response.data));
      console.log('data send'); 
      
    })
    .catch((error) => {
      // Handle the error
      // For example, alert the error message
      alert(error.message);
      alter("this DID NOT WORK")
      console.error("this did not work")
    });
}


function handleSelect(value) {
  // Update the input state variable with the selected value
  setInput(value);

  // Do anything else you want with the selected value
  // For example, send it to the server or display it on the web page
}


  return (
    <div id={sc.mainContainer}>
    <div id={sc.subContainer} >
    
    <div id={sc.componentContainer} >
    <form id={sc.formContainer} >
    
    
    
    <div id={sc.titleContainer} >
    <div id={sc.titleSection} >
    
    Search for Deals 
    </div>
    

    
    
    </div>
    
    
    {/* Add in the button area here  */}
    <div id={sc.buttonAreaContainer} >
    <div id={sc.buttonArea} >
    
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    {/* Add in two input text buttons  */}
    
    <div id={sc.minButtonContainer} >
    <input type='text' id={sc.minInput} 
    label='minPrice' placeholder='min' 
    onChange={(input) => setMinPrice(minPrice)} /> 


    </div>
    <span id={sc.toSpan} >
    to
    </span>
    
    
    <div id={sc.minButtonContainer} >
    
    <input type='text' 
    id={sc.maxInput} 
    label='maxPrice' placeholder='max' 
    onChange={(input) => setMaxPrice(maxPrice)} /> 

    </div>    
    
    </div>
    <div id={sc.buttonContainer}  >
    <RangeDatePicker/> 
    
    </div>
    <div id={sc.buttonContainer} >
     
    <DropDown onSelect={handleSelect} /> 
    
    </div>
    <div id={sc.buttonContainer} >
      
    <Slider/> 

    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
   <ConditionSelector/> 
   
    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    
    {/* add in a on Click event handler here  */}
    <button onClick={sendData} >

        Submit 
        

    </button>
    
    
    </div>

        
        
    </div>
    

    
    </div>
    
    </form>

    </div>

    
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
  )
}

export default SearchComponent