import { combineReducers } from "redux";
import auth from "./auth";
import feedback from "./feedback";
import admin from "./admin";

export default combineReducers({
    auth,
    feedback,
    admin,
});