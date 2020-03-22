import axios from "axios";

const baseURL = "https://replate-food-reuse.herokuapp.com/";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
