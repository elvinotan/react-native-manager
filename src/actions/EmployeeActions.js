export const act_employee_update = "act_employee_update";
export const act_employee_create = "act_employee_create";
export const act_employee_fetch = "act_employee_fetch";
export const act_employee_edit = "act_employee_edit";

import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const fEmployeeUpdate = props => {
  return dispatch => {
    dispatch({ type: act_employee_update, payload: props });
  };
};

export const fEmployeeCreate = ({ name, phone, shift }) => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: act_employee_create });
        Actions.pop();
      });
  };
};

export const fEmployeeEdit = ({ name, phone, shift, uid }) => {
  return dispatch => {
    dispatch({ type: act_employee_edit, payload: { name, phone, shift, uid } });
    Actions.employeeUpdate();
  };
};

export const fEmployeeFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: act_employee_fetch, payload: snapshot.val() });
      });
  };
};
