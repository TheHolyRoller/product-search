'use client'

import 'react-datepicker/dist/react-datepicker.css'

import React, { useState, useCallback, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import rp from '../Styles/RangeDatePicker.module.css'; 

export default function RangeDatePicker() {
  const [date, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  
  return (
  <>
  
  <div id={rp.mainContainer} >
  
   
  
    <div 
    style={{margin: '0.2rem', padding: '0rem',  color: 'black', display: 'block' }} 
    >
       <DatePicker 
      style={{color: 'black'}}
      // onChange={handleEndDateChange}
      selected={date} onChange={(date) => setStartDate(date)}
      
      
      />
    </div>
    <div
    style={{margin: '0.2rem', padding: '0rem',  color: 'black', display: 'block'}} 
    >
      <DatePicker 
      style={{color: 'black'}}
      
      selected={endDate} onChange={(endDate) => setEndDate(endDate)} />
    </div>
  </div>
    
  </>
    
  );
}










