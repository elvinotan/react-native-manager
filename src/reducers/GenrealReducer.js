import { act_loading, act_login_success, act_login_fail } from "../actions";

const initialState = { loading: false, errors: null, user: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case act_loading: {
      return { ...state, loading: action.payload };
    }
    case act_login_success: {
      return { ...state, errors: null, user: action.payload };
    }
    case act_login_fail: {
      return { ...state, errors: action.payload, user: null };
    }
    default:
      return state;
  }
};
