import { CREATE_FEEDBACK, DELETE_FEEDBACK, ERROR, GET_FEEDBACKS, EDIT_FEEDBACK} from '../actionTypes';

export default (state = {feedbacks: [], errors: '', messages: ''}, action) => {
    switch (action.type) {
        case GET_FEEDBACKS:
            console.log("rdcer", action.payload);
            return {...state, feedbacks: action?.payload, errors: ''};

        case ERROR:
            return {...state, errors:  action.payload, messages: ""};
        case CREATE_FEEDBACK:
            return {...state, feedbacks: [...state.feedbacks, action.payload], errors: '', messages: "you have successfully created a feedback"};

        case DELETE_FEEDBACK:

            console.log(action.payload, "jsjsjjsj");
            const fdbs = state.feedbacks.filter(feedback => feedback._id !== action.payload);
            return {...state, feedbacks:  fdbs, errors: '', messages: "You have successfully deleted the feedback"};

        case EDIT_FEEDBACK:

            const arr = state.feedbacks.map(feedback => (feedback._id !== action.payload._id) ? action.payload : feedback);

            console.log("edit state", action.payload);

            return {...state, feedbacks: state.feedbacks.map(feedback => (feedback._id === action.payload._id) ? action.payload : feedback), errors: '', messages:'you have successfully edited the feedback'}

        default:
            return state;
    }
}