// DigitalClock.jsx

import React from "react";
import './index.css';
import { useState } from "react";
import { useEffect } from "react";

export function DigitalClock() {

    const [time,setTime] =useState(new Date());


    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);


        return () =>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
      
        hours = hours % 12 || 12;
      
        function padZero(number) {
          return (number < 10 ? "0" : "") + number;
        }
      
        // Format the time string with padded zeros
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
      }
      

    
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
  };
