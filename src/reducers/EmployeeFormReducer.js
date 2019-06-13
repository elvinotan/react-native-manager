import { act_employee_update } from "../actions";

const initialState = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case act_employee_update: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    default:
      return state;
  }
};
