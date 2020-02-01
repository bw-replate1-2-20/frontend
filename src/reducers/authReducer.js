const initialState = {
  error: null,
  isFetching: false,
  email: "",
  password: "",
  description: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_START":
      return {
        ...state,
        isFetching: true
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        isFetching: false,
        ...action.payload
      };
    case "SIGN_UP_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: false,
        ...action.payload
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
