import axios from 'axios';

const initialState = {
    user_name:'',
    id: '',
    profile_pic: ''
}
const GET_DATA = 'GET_DATA'

export function getData(id, user_name, profile_pic){
    return {
        type:  GET_DATA,
        payload: {id:'', user_name:'',profile_pic:''}
    }
}

export default function reducer (state=initialState, action) {
    switch (action.type) {
        // case: GET_DATA,
        // return {}
    
        default:
            return state
    }
}