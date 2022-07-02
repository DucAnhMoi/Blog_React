// Store initial
const initialState = {
  isSignIn: true,
  isMountForgetPassword: true,
  isMountSignForm: false,
  listToast: [],
};
// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Sign Form
    case "isSignIn":
      return {
        ...state,
        isSignIn: (state.isSignIn = !state.isSignIn),
      };
    case "isMountForgetPassword":
      return {
        ...state,
        isMountForgetPassword: (state.isMountForgetPassword =
          !state.isMountForgetPassword),
      };
    case "isMountSignForm":
      return {
        ...state,
        isMountSignForm: (state.isMountSignForm = !state.isMountSignForm),
      };
    // ToastMessage
    case "deleteToast":
      return {
        ...state,
        listToast: state.listToast.filter(
          (toast) => toast.id !== action.payload
        ),
      };
    case "addToast":
      return {
        ...state,
        listToast: [...state.listToast, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
