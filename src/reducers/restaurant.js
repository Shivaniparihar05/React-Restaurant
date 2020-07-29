const defaultState={
    city:'', 
    restaurants:[],
    filteredRestaurants: [], // backup restaurant list for searching
    error: '',
    loading: false
};

export const restaurantReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'RESET_STATE':
            return defaultState;

        case 'SET_CITY':
            return {
                ...state,
                city: action.city
            }
        case 'FETCH_RESTAURANTS':
            return {
                ...state,
                restaurants:  [...state.restaurants , ...action.restaurant ],
                filteredRestaurants: [...state.restaurants , ...action.restaurant ]
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            }
        case 'FILTER_RESTAURANTS':
            const key = action.filter;
            let filteredList = state.filteredRestaurants;
            if (key.length) {
                filteredList = state.filteredRestaurants.filter(res => res.city.includes(key) || res.area.includes(key) || res.address.includes(key))
            }
            console.log("filter ==>", key.length)
            console.log("filteredRestaurants ==>", filteredList)
            return {
                ...state,
                restaurants: filteredList
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}