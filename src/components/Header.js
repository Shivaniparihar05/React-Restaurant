import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
        <div className='App-name'>
          <div className='App-symbol'>
           <center><i className="fa fa-cutlery fa-spin fa-2x"  aria-hidden='true' /></center> 
          </div>
          <br/>
          <br/>
          <div className='App-title'>
           <center>&nbsp;&nbsp;Let's Meet to Eat</center>
         
          </div>
        </div>
  )
};