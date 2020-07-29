import React from 'react';
import {connect} from 'react-redux';
import {setCity, resetState, loading} from '../actions/city';
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
 
const Search = (props) => {
  console.log('Search comp props', props);
  let cityName = '';
  return (
    <div className="content-container content">
      <div className="page-header">
        <h2 className="page-header__title">Search Restaurant</h2>
        <center>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Enter City"
              maxLength="50"
              value={props.setCity}
              onChange={(e) => {cityName = e.target.value}}
            />
          </div>
          <button
            onClick={(e) => {
              console.log(e.target.value);
              props.dispatch(resetState());
              props.dispatch(setCity(cityName));
              props.dispatch(loading(true));
              props.dispatch(thunkRestaurants(cityName, 1));
            }}
          >
            Search
          </button>
        </center>
      </div>
    </div>
  );
}
export default connect()(Search);