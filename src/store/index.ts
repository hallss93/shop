import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modules from "./import-modules";

const baseURL =
  "http://localhost:3000/";

Vue.use(Vuex);

const Store = new Vuex.Store({ modules });

export const axiosInstance = axios.create({
  baseURL,
  timeout: 30000
});

axiosInstance.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      };
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async response => response,
  error => {
    console.log("error", error.response);

    return Promise.reject({
      error: error.response.data,
      code: error.response.status
    });
  }
);

(Store as any).axios = axiosInstance;

export default Store;
