// Action Creator

// Handle Change among Sign Form
export const changeSignIn = () => {
  return {
    type: "isSignIn",
    payload: "a",
  };
};
// Mount Screen ForgetPassword
export const mountForgetPassword = () => {
  return {
    type: "isMountForgetPassword",
    payload: "a",
  };
};
// Mount Screen SignForm
export const mountSignForm = () => {
  return {
    type: "isMountSignForm",
    payload: "a",
  };
};
// Delete Toast
export const deleteToast = (data) => {
  return {
    type: "deleteToast",
    payload: data,
  };
};
// Add Toast
export const addToast = (data) => {
  return {
    type: "addToast",
    payload: data,
  };
};
