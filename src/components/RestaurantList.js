import React, { Component } from 'react';
import {connect} from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import '../styles/Summary.css';
import LoadingComponent from './LoadingComponent';

class RestaurantList extends Component {

  render() {
    const error = this.props.error;
    return (
      <div>
        {error ? (
          <p>{error}</p>
        ) : !this.props.loading ? (
          this.props.restaurants.length ? (
            <div>
              {this.props.restaurants.map((rest, index) => {
                return (
                  <RestaurantListItem
                    key={index}
                    {...rest}
                    {...this.props}
                  />
                );
              })}
            </div>
          ) : null
        ) : (
          <LoadingComponent />
        )}
      </div>
    );
  }
};

const mapStateToProps =({restaurants, city, error,loading }, props)=>({
    restaurants,
    city,
    error,
    loading,
})

export default connect(mapStateToProps)(RestaurantList);