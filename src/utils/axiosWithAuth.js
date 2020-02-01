import axios from "axios";

const baseURL = "";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
