import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const getRequests = userInfo => {
  if (userInfo.location) {
    axiosWithAuth()
      .get(/* URL GOES HERE */)
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
      .get(/* URL GOES HERE */)
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

export const createRequest = payload => {
  axiosWithAuth()
    .post(/* URL GOES HERE */ payload)
    .then(res => {
      console.log(res);
      dispatch({ type: "CREATE_REQUEST", payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "REQUEST_ERROR", payload: err });
    });
};

export const updateRequest = (payload, id) => {
  axiosWithAuth()
    .post(` URL GOES HERE w/ ID ${id}`, payload)
    .then(res => {
      console.log(res);
      dispatch({ type: "UPDATE_REQUEST", payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "REQUEST_ERROR", payload: err });
    });
};

export const deleteRequest = (payload, id) => {
  axiosWithAuth()
    .delete(` URL GOES HERE w/ ID ${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: "DELETE_REQUEST", payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "REQUEST_ERROR", payload: err });
    });
};
