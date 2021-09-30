
import { 
    GET_USERS,
    GET_FEEDBACKS_A,
    SET_ACCOUNT_STATUS,
    ERROR} from '../actionTypes';




export default (state = {feedbacks:[], users:[], errors: '', messages: ''}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload, errors:'', messages: ''};
        case GET_FEEDBACKS_A:
            return {...state, feedbacks: action.payload, errors:'', messages: ''};
        case SET_ACCOUNT_STATUS:
            return {...state, users: state.users.map(user => (user._id === action.payload._id) ? action.payload : user), errors:'', messages: 'Account status changed'};
        
        case ERROR:
            return {...state, errors: action.payload, messages: ""};
            
        default:
            return state;

    }
}