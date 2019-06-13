import { act_employee_update, act_employee_create } from "../actions";

const initialState = {
  name: null,
  phone: null,
  shift: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case act_employee_update: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case act_employee_create: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};
