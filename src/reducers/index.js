import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GenrealReducer from "./GenrealReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";

export default combineReducers({
  auth: AuthReducer,
  general: GenrealReducer,
  employeeForm: EmployeeFormReducer
});
