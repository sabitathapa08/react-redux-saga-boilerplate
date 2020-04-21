import axios from 'axios';

export const getApi = ({ url }) => {
  axios
    .get(url)
    .then(res => {
      if (res.data) return res.data;
    })
    .catch(err => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        return err.request;
      }
    });
};

export const postApi = ({ url, body }) => {
  axios
    .post(url, body)
    .then(res => {
      if (res.data) return res.data;
    })
    .catch(err => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        return err.request;
      }
    });
};

export const putApi = ({ url, body }) => {
  axios
    .put(url, body)
    .then(res => {
      if (res.data) return res.data;
    })
    .catch(err => {
      if (err.response) {
        return err.response;
      } else if (err.request) {
        return err.request;
      }
    });
};
