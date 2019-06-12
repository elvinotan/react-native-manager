export const act_email_changed = "act_email_changed";
export const act_password_changed = "act_password_changed";

//loading
export const act_loading = "act_loading";

export const fEmailChanged = text => {
  console.log(`fEmailChanged ${text}`);

  return {
    type: act_email_changed,
    payload: text
  };
};

export const fPasswordChanged = text => {
  console.log(`fPasswordChanged ${text}`);
  return {
    type: act_password_changed,
    payload: text
  };
};

export const fLoading = load => {
  console.log(`fLoading ${load}`);
  return {
    type: act_loading,
    payload: load
  };
};
