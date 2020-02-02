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
