import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const signUp = (userInfo, history) => dispatch => {
  dispatch({ type: "SIGN_UP_START" });
  if (userInfo.isBusiness) {
    axios
      .post(/* URL GOES HERE */ "", userInfo)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "SIGN_UP_SUCCESS", payload: res.data });
        console.log(history);
        history.push("/businessDashboard");
      })
      .catch(err => dispatch({ type: "SIGN_UP_FAILED", payload: err.message }));
  } else {
    axios
      .post(/* URL GOES HERE */ "", userInfo)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "SIGN_UP_SUCCESS", payload: res.data });
        console.log(history);
        history.push("/volunteerDashboard");
      })
      .catch(err => dispatch({ type: "SIGN_UP_FAILED", payload: err.message }));
  }
};

export const login = (userInfo, history) => dispatch => {
  dispatch({ type: "LOGIN_START" });
  if (userInfo.isBusiness) {
    axios
      .post(/* URL GOES HERE */ "", userInfo)
      .then(res => {
        console.log("login response", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user_id);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        history.push("/businessDashboard");
      })
      .catch(err => dispatch({ type: "LOGIN_FAILED", payload: err.message }));
  } else {
    axios
      .post(/* URL GOES HERE */ "", userInfo)
      .then(res => {
        console.log("login response", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user_id);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        history.push("/volunteerDashboard");
      })
      .catch(err => dispatch({ type: "LOGIN_FAILED" }));
  }
};
