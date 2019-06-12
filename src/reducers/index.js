import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GenrealReducer from "./GenrealReducer";

export default combineReducers({
  auth: AuthReducer,
  general: GenrealReducer
});
