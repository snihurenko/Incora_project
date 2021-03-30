import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.151:3000'
});

instance.interceptors.request.use(res => {
  const token = localStorage.getItem('token');

  if (token) {
    res.headers = {
      Authorization: `Bearer ${token}`
    };
  }
  return res;
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.status === 401) {
      window.location.replace('/login');
    }
    console.log(err.response);
    return Promise.reject(err);
  }
);

export default {
  instance
};
