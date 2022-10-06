import axios from "axios";

const url = process.env.VUE_API_HOST;

axios.interceptors.request.use((config) => {
  config.url = url + config.url;
  let token = null;
  let userData = localStorage.getItem("usuario");

  if (userData) {
    userData = JSON.stringify(userData);
    token = userData.token;
  }
  if (token) {
    config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  }
});

export default (V) => {
  Object.defineProperties(V.prototype, {
    $http: {
      get() {
        return axios;
      },
      post() {
        return axios;
      },
      put() {
        return axios;
      },
      patch() {
        return axios;
      },
    },
  });
};
