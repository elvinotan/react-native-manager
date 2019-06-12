import firebase from "firebase";

export const act_email_changed = "act_email_changed";
export const act_password_changed = "act_password_changed";
export const act_clear_auth = "act_clear_auth";
export const act_loading = "act_loading";
export const act_login = "act_login";
export const act_login_success = "act_login_success";
export const act_login_fail = "act_login_fail";

export const fEmailChanged = text => {
  console.log(`fEmailChanged ${text}`);

  return dispatch => {
    dispatch({ type: act_email_changed, payload: text });
  };
};

export const fPasswordChanged = text => {
  console.log(`fPasswordChanged ${text}`);

  return dispatch => {
    dispatch({ type: act_password_changed, payload: text });
  };
};

export const fLoading = load => {
  console.log(`fLoading ${load}`);

  return dispatch => {
    dispatch({ type: act_loading, payload: load });
  };
};

export const fLoginUser = ({ email, password }) => {
  console.log(`fLoginUser ${email} ${password}`);

  const auth = firebase.auth();

  return dispatch => {
    console.log("into dispatch");

    dispatch({ type: act_loading, payload: true });
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: act_loading, payload: false });
        dispatch({ type: act_login_success, payload: user });
        dispatch({ type: act_clear_auth });
      })
      .catch(() => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: act_loading, payload: false });
            dispatch({ type: act_login_success, payload: user });
            dispatch({ type: act_clear_auth });
          })
          .catch(err => {
            dispatch({ type: act_loading, payload: false });
            dispatch({ type: act_login_fail, payload: err });
          });
      });
  };
};
