import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getRequests = (isBusiness, id) => {
  return dispatch => {
    if (isBusiness) {
      axiosWithAuth()
        .get("api/requests/all")
        .then(res => {
          console.log("@getRequests", res.data);
          let filteredRes = res.data.filter(request => {
            console.log("inFilter:", request.business_id, id);
            return request.business_id == id;
          });
          console.log("@getRequests", filteredRes);
          dispatch({ type: "GET_REQUESTS", payload: filteredRes });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "REQUEST_ERROR", payload: err });
        });
    } else {
      axiosWithAuth()
        .get("api/requests/all")
        .then(res => {
          console.log(res);
          dispatch({ type: "GET_REQUESTS", payload: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "REQUEST_ERROR", payload: err });
        });
    }
  };
};

export const getSingleRequest = requestID => {
  console.log("in getSingleRequest", requestID);
  return dispatch => {
    axiosWithAuth()
      .get(`api/requests/${requestID}`)
      .then(res => {
        console.log(res);
        localStorage.setItem("request", JSON.stringify(res.data));
        dispatch({ type: "GET_SINGLE_REQUEST", payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "REQUEST_ERROR", payload: err });
      });
  };
};

export const createRequest = payload => {
  console.log("CR payload:", payload);
  return dispatch => {
    axiosWithAuth()
      .post("api/requests", payload)
      .then(res => {
        console.log(res);
        dispatch({ type: "CREATE_REQUEST", payload });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "REQUEST_ERROR", payload: err });
      });
  };
};

export const updateRequest = (payload, id) => {
  return dispatch => {
    axiosWithAuth()
      .put(`/api/requests/${id}`, payload)
      .then(res => {
        console.log(res);
        dispatch({ type: "UPDATE_REQUEST", payload });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "REQUEST_ERROR", payload: err });
      });
  };
};

export const deleteRequest = (payload, id) => {
  return dispatch => {
    axiosWithAuth()
      .delete(`/api/requests/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: "DELETE_REQUEST", payload });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "REQUEST_ERROR", payload: err });
      });
  };
};
