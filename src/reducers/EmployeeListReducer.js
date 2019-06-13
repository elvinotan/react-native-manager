import { act_employee_fetch } from "../actions";

const initialState = {};
export default (state = initialState, action) => {
  console.log(action.payload);

  switch (action.type) {
    case act_employee_fetch: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
