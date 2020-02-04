import axios from "axios";

export const signUp = (userInfo, history, isBusiness) => dispatch => {
  console.log("in the sigunup form", userInfo, isBusiness);
  dispatch({ type: "SIGN_UP_START" });
  if (isBusiness) {
    axios
      .post(
        "https://replate-food-reuse.herokuapp.com/api/auth/register/business",
        userInfo
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "SIGN_UP_SUCCESS", payload: res.data });
        history.push("/businessDashboard");
      })
      .catch(err => dispatch({ type: "SIGN_UP_FAILED", payload: err.message }));
  } else {
    axios
      .post(
        "https://replate-food-reuse.herokuapp.com/api/auth/register/volunteer",
        userInfo
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "SIGN_UP_SUCCESS", payload: res.data });
        history.push("/volunteerDashboard");
      })
      .catch(err => dispatch({ type: "SIGN_UP_FAILED", payload: err.message }));
  }
};

export const login = (userInfo, history, isBusiness) => dispatch => {
  console.log("in the login form", userInfo, isBusiness);
  dispatch({ type: "LOGIN_START" });
  if (isBusiness) {
    axios
      .post(
        "https://replate-food-reuse.herokuapp.com/api/auth/login/business",
        userInfo
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        history.push("/businessDashboard");
      })
      .catch(err => dispatch({ type: "LOGIN_FAILED", payload: err.message }));
  } else {
    axios
      .post(
        "https://replate-food-reuse.herokuapp.com/api/auth/login/volunteer",
        userInfo
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        history.push("/volunteerDashboard");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_FAILED" });
      });
  }
};
