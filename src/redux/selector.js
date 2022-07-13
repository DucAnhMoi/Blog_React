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

export const postsSelector = (state) => state.home.posts;
export const commentsSelector = (state) => state.home.comments;
export const albumsSelector = (state) => state.home.comments;
export const photosSelector = (state) => state.home.comments;
export const todosSelector = (state) => state.home.comments;
export const usersSelector = (state) => state.home.comments;
export const statusSelector = (state) => state.home.status;
