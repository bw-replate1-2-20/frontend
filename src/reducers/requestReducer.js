const initialState = {
  error: null,
  business_id: "",
  requests: []
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQUESTS":
    case "CREATE_REQUEST":
    case "UPDATE_REQUEST":
    case "DELETE_REQUEST":
    case "REQUEST_ERROR":
    default:
      return state;
  }
};
