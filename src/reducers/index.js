import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import GenrealReducer from "./GenrealReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeListReducer from "./EmployeeListReducer";

export default combineReducers({
  auth: AuthReducer,
  general: GenrealReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeListReducer
});
