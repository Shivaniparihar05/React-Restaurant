import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterRestaurants} from '../actions/filter';
import '../styles/Summary.css';

class RestaurantListHeader extends Component {

  render() {
    return (
      <div>
        {!this.props.loading ? 
            this.props.filteredRestaurants.length ? 
            (
                <div className="content-container outline page-header">
                  <h2 className="page-header__title">
                    <small>Showing restaurants in </small>"
                    <strong>{this.props.city}</strong>"
                  </h2>
                  <div>
                    <h3>Refine</h3>
                    <input
                      onChange={(e) => {
                        this.props.dispatch(filterRestaurants(e.target.value));
                      }}
                    />
                  </div>
                </div>
            ): null: null}
      </div>
    );
  }
};

const mapStateToProps =({ filteredRestaurants, city, loading }, props)=>({
    filteredRestaurants,
    city,
    loading,
})

export default connect(mapStateToProps)(RestaurantListHeader);