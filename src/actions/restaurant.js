import { setError } from "./error";
import { loading } from './city';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchRestaurants=(restaurant) =>({
    type: 'FETCH_RESTAURANTS',
    restaurant
})

export const thunkRestaurants =(city='') =>{
    return (dispatch, getState) =>{
       
        fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
        .then(handleErrors)
        .then(res => res.json())
            .then((data) =>{
                console.log(data.restaurants);
                dispatch(loading(false));
                if( data.restaurants.length ) {
                    dispatch(fetchRestaurants(data.restaurants));
                }
                else {
                    dispatch(setError('No Restaurant for current City!!!'));
                }
            })
            .catch((error)=>{
                dispatch(setError('problem in accessing restaurant list through API. '+error));
            })
      
        .catch((error)=>{
            console.log(error);
            dispatch(setError('problem in accessing API initially.'+ error));//check your API key and limit of Basic API hits
        })
        
    }

}