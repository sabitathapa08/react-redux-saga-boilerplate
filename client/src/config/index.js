import axios from 'axios';

// let csrfVal = window.csrf ? window.csrf : process.env.CSRF;
const tokenVal = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : 'sample_token';

const baseURL = 'url_here';

const setDefault = () => {
  axios.defaults.baseURL = baseURL;
  // axios.defaults.headers.common["X-CSRFTOKEN"] = csrfVal;
  axios.defaults.headers.common.Authorization = tokenVal;
};

export default setDefault;
