import * as api from '../api/index';
import { 
    GET_USERS,
    GET_FEEDBACKS_A,
    SET_ACCOUNT_STATUS,
    ERROR} from '../actionTypes';



    export const getUsers = () => async (dispatch) =>{
        try {
            const {data} = await api.getUsers();
            console.log('gsu', data);
            dispatch({type: GET_USERS, payload: data.data});
        } catch (error) {
            dispatch({type: ERROR, payload: error?.response?.data?.status})
        }
    }

    export const getFeedbacks = () => async (dispatch) =>{
        try {
            const {data} = await api.getFeedBacks();
            dispatch({type: GET_FEEDBACKS_A, payload: data.data});
        } catch (error) {
            dispatch({type: ERROR, payload: error?.response?.data?.status})
        }
    }

    export const setAccountStatus = (userId, status) => async dispatch => {
        try {
            const {data} = await api.setAccountStatus({userId, isDisabled: status});

            console.log("sas", data.data);
            dispatch({type: SET_ACCOUNT_STATUS, payload: data?.data})
        } catch (error) {
            dispatch({type: ERROR, payload: error?.response?.data?.status})
        }
    }


