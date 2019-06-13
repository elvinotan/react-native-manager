export const act_employee_update = "act_employee_update";

export const fEmployeeUpdate = props => {
  return dispatch => {
    dispatch({ type: act_employee_update, payload: props });
  };
};
