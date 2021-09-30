import * as api from '../api/index';
import { CLIENT_LOGIN, ADMIN_LOGIN, CLIENT_SIGNUP, ERROR, LOGOUT, ADMIN_SIGNUP } from '../actionTypes';

export const clientLogin =  (formData, router) => async dispatch => {
    try {
        const {data} = await api.clientLogin(formData);
        dispatch({type: CLIENT_LOGIN, payload: data});
        router.push('/home')
    } catch (error) {
        dispatch({type: ERROR, payload: error?.response?.data?.status});
    }
}
export const clientSignup =  (formData, router) => async dispatch => {
    try {
        const {data} = await api.clientSignup(formData);
        dispatch({type: CLIENT_SIGNUP, payload: data});
    } catch (error) {
        console.log('signup', error?.response?.data);
        dispatch({type: ERROR, payload: error?.response?.data});
    }
}

export const adminSignup = formdata => async dispatch => {
    try {
        const {data} = await api.adminRegister(formdata); 
        dispatch({type: ADMIN_SIGNUP, payload: data.data});
    } catch (error) {
        console.log("err sign", error?.response?.data);

        dispatch({type: ERROR, payload: error?.response?.data});
    }
}

export const adminLogin =  (formData, router) => async dispatch => {
    try {
        const {data} = await api.adminLogin(formData);
        dispatch({type: ADMIN_LOGIN, payload: data});
        router.push('/admin');
    } catch (error) {
        dispatch({type: ERROR, payload: error?.response?.data});
        
    }
}


export const logout = (router) => async dispatch => {
    try {
        // await api.logout(); //
        dispatch({type: LOGOUT})
        router.push('/')
    } catch (error) {
        dispatch({type: ERROR, payload: error?.response?.data});
    }

}