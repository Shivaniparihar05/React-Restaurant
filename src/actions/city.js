export const setCity =(city) =>({
    type: 'SET_CITY',
    city
});

export const resetState = () =>({
    type: 'RESET_STATE'
});

export const loading = (loading) =>({
    type: 'SET_LOADING',
    loading
});