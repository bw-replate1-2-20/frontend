import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getRequests = userInfo => {
  return dispatch => {
    if (userInfo) {
      axiosWithAuth()
        .get("api/requests/all")
        .then(res => {
          console.log(res);
          const filteredRes = res.data.filter(
            request => request.business_id === userInfo.id
          );
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
          /* dispatch({ type: "GET_REQUESTS", payload: [{},{}] }); */
          dispatch({ type: "REQUEST_ERROR", payload: err });
        });
    }
  };
};

export const createRequest = payload => {
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
      .post(`/api/requests/${id}`, payload)
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
