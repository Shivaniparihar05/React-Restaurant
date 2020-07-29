import { setError } from "./error";

 const API_KEY =`${process.env.REACT_APP_ZOMATO_API_KEY}`;

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

export const thunkRestaurants =(city='', start=1) =>{
    return (dispatch, getState) =>{
       
        fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
        .then(handleErrors)
        .then(res => res.json())
        .then((data) =>{
            console.log(data.restaurants);
             data.restaurants.forEach((restaurant) =>{
                  const name = restaurant.name;
                   fetch(`http://opentable.herokuapp.com/api/restaurants?name=${name}`)
                   .then(handleErrors)
                    .then(res => res.json())
                    .then((review) =>{
                        //reviews
                        const restaurantObj = {
                            ...restaurant
                         }
                        dispatch(fetchRestaurants(restaurantObj));
                    })
                     .catch((error)=>{
                        dispatch(setError('problem in accessing reviews through API. '+error));
                    })
                 })

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