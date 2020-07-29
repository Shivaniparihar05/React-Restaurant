import React from 'react';
import '../styles/HomePage.css';
import Search from './Search';
import RestaurantList from './RestaurantList';
import RestaurantListHeader from './RestaurantListHeader';

const HomePage = (props) => (
  <div className="App">  .
  
    <Search {...props}/>
    <RestaurantListHeader {...props}/>
    <RestaurantList {...props} />
  </div>
)
      

export default HomePage;
