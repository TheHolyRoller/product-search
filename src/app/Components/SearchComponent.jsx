'use client'
import React from 'react'
import sc from '../Styles/SearchComponent.module.css'; 




function SearchComponent() {
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
    
    <div id={sc.maxButtonContainer} >
    <input type='text' id={sc.minInput} label='minPrice' placeholder='min' /> 
    

    </div>
    <span id={sc.toSpan} >
    to
    </span>
    
    
    <div id={sc.minButtonContainer} >
    
    <input type='text' id={sc.maxInput} label='maxPrice' placeholder='max' /> 

    
    </div>    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    <button>

        Find a deal 
        
        

    </button>
    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    <button>

        Find a deal 
        
        

    </button>
    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    <button>

        Find a deal 
        
        

    </button>
    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    <button>

        Find a deal 
        
        

    </button>
    
    
    </div>
    <div id={sc.buttonContainer} >
    
    
    {/* Add in the button here  */}
    <button>

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