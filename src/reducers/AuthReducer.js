import { act_email_changed, act_password_changed } from "../actions";

const initialState = {
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case act_email_changed: {
      return { ...state, email: action.payload };
    }
    case act_password_changed: {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};
