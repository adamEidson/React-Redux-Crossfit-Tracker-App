export const selectUserDetail = (user) => {
    console.log("You clicked on a user detail: ", user.first);
    return {
        type: "USER_DETAIL_SELECTED1",
        payload: user
    }
    
};