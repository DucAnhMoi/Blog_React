// Selector
// mount
// Handle Change among Sign Form
export const isSignInSelector = (state) => state.mount.isSignIn;
// Mount Screen ForgetPassword
export const mountForgetPasswordSelector = (state) =>
  state.mount.isMountForgetPassword;
// Mount Screen SignForm
export const mountSignFormSelector = (state) => state.mount.isMountSignForm;

// toastMessage
// Get data toastMessage
export const toastMessageSelector = (state) => state.toastMessage;

// blog
// Get data blogList
export const listBlogSelector = (state) => state.blog;
