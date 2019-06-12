import { act_loading } from "../actions";

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case act_loading:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
