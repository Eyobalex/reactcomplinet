import { ADMIN_LOGIN, ADMIN_SIGNUP, CLIENT_LOGIN, CLIENT_SIGNUP, ERROR, LOGOUT } from '../actionTypes';

export default (state = {authData: null, errors: '', messages: ''}, action) => {
    switch (action.type) {
        case CLIENT_LOGIN:
            localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData: action?.payload, errors:"", messages: ""}
        case CLIENT_SIGNUP:
            // localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData: null, errors: '', messages: "You have successfully registerd. A verification email has been sent to your email."}
        case ADMIN_LOGIN:
            localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData: action?.payload}
        case ADMIN_SIGNUP:
            return {...state, authdata: null, errors: '', messages: "You have successfully registered as an admin"}
        case ERROR:
            return {...state, errors: action.payload, messages: ""};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData:null, erros: '', messages: ""};
        default:
            return state;
    }
}