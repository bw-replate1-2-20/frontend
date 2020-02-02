const initialState = {
  error: null,
  requests: []
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQUESTS":
      return {
        ...state,
        requests: [...action.payload]
      };
    case "CREATE_REQUEST":
      return {
        ...state,
        requests: [...state.requests, action.payload]
      };
    case "UPDATE_REQUEST":
      const updatedRequestList = state.requests.filter(request => {
        return request.id !== action.payload.id;
      });
      return {
        ...state,
        requests: [...updatedRequestList, action.payload]
      };
    case "DELETE_REQUEST":
      const newRequestList = state.requests.filter(request => {
        return request.id !== action.payload.id;
      });
      return {
        ...state,
        requests: [...newRequestList]
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
