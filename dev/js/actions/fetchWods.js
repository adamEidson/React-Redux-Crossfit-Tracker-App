export function fetchWods(){
    return dispatch => {
        fetch('/api/wods');
    }
}