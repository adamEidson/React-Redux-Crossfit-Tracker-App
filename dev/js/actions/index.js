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
