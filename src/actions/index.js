export const act_email_changed = "email_changed";
export const act_password_changed = "password_changed";

export const emailChanged = text => {
  return {
    type: act_email_changed,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: act_password_changed,
    payload: text
  };
};
