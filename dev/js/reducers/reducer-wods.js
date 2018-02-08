import {SET_WODS } from '../actions/index';

export default function (state=[], action={}) {

    switch(action.type) {
        case SET_WODS:
            return action.wods;
            break;
        default: return state;
    }
    return state;

}