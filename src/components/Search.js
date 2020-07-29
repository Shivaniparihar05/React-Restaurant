import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../actions/city';
import { resetState } from '../actions/city';
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
import { setLike } from '../actions/like';
 
const Search = (props) => {
  console.log('Search comp props', props);
  return (
    <div className='content-container content'>
      <div className='page-header'>
        <h2 className="page-header__title">Search Restaurant</h2>
       <center><div >
        <input className='input' type="text" placeholder="Enter City" maxLength="50" value={props.setCity} onChange={(e) => setCity(e.target.value)}/>
 
        </div>
        <button 
              onClick={(e)=>{
              console.log(e.target.value);
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.value));
              props.dispatch(thunkRestaurants(e.target.value, 1));
           
              props.history.push('/listing');
              }} >Search</button>
        
</center> 
        </div>
{/*         
        <input type="text" placeholder="Enter City" maxLength="50" value={props.setCity} onChange={(e) => setCity(e.target.value)}/>
        
        <button 
              onClick={(e)=>{
              console.log(e.target.value);
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.value));
              props.dispatch(thunkRestaurants(e.target.value, 1));
           
              props.history.push('/listing');
              }} >Search</button>
            
       */}
   
     
      <div className='button-container'>
        {
          props.city.map((item, index)=>{
            return <button key={index} 
              onClick={(e)=>{
              console.log(e.target.innerText);
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.innerText));
              props.dispatch(thunkRestaurants(e.target.innerText, 1));
           
              props.history.push('/listing');
            }} >{item}</button>
          })
        }
      </div>
    </div>
  )
}

Search.defaultProps={
  
 city: ['New york', 'Chicago', 'Delhi', 'Chennai']
 //city:[]
}



export default connect()(Search);