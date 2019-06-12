import {
  act_email_changed,
  act_password_changed,
  act_clear_auth
} from "../actions";

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
    case act_clear_auth: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
