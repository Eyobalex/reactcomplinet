import * as api from '../api/index';
import { DELETE_FEEDBACK, ERROR, GET_FEEDBACKS, CREATE_FEEDBACK, EDIT_FEEDBACK } from '../actionTypes';


export const getMyFeedBacks = pageNumber => async (dispatch) => {
    try {
        const {data} = await api.getMyFeedBacks(pageNumber);
        dispatch({type: GET_FEEDBACKS, payload:  data.data});
        console.log("from dbs",data);
    } catch (error) {
        console.log("from db",error?.response?.data.status);
        dispatch({type: ERROR, payload: error?.response?.data?.status});
    }
}


export const deleteFeedback = data => async (dispatch) => {
    try {
        await api.deleteFeedBack(data?._id);
        dispatch({type: DELETE_FEEDBACK, payload: data?._id});
        
    } catch (error) {
        dispatch({type: ERROR, payload: error?.response?.data});
    }
}
export const createFeedback = formData => async (dispatch) => {
    try {
        const {data} =  await api.createFeedback(formData);

        console.log("create", data);
        dispatch({type: CREATE_FEEDBACK, payload: data?.review});
        
    } catch (error) {
        console.log("ididj",error.response);
        dispatch({type: ERROR, payload: error?.response?.data});

    }
}


export const editFeedback = form_data => async (dispatch) => {
    try {
        const {data} = await api.editFeedback(form_data);
        console.log('action', data.data);
        dispatch({type: EDIT_FEEDBACK, payload: data?.data})
    } catch (error) {
        console.log("edit error",error.response.data);
        dispatch({type: ERROR, payload: error?.response?.data});

    }
}