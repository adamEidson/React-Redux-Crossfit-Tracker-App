import { combineReducers } from "redux";
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import WodsReducer from './reducer-wods'

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    wods: WodsReducer
});

export default allReducers;