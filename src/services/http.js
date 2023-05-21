import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common.Authorization = 555;

export function get(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function post(url, data, config) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
