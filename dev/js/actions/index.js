export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    }
    
};

export const selectUserDetail = (user) => {
    console.log("You clicked on user detail: ", user.first);
    return {
        type: "USER_DETAIL_SELECTED",
        payload: user
    }
    
};

export const SET_WODS = 'SET_WODS';

export function setWods(wods) {
    return {
        type: SET_WODS,
        wods
    }
} 

export function fetchGames() {
    return dispatch => {
        fetch('/api/wods')
        .then(res => res.json())
        .then(data => dispatch(setWods(data.wods)));
    }
}
