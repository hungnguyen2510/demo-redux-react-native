import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.request.use(
  function (config) {
    const configWithToken = {
      ...config,
      headers: {...config.headers},
    };
    return configWithToken;
  },
  function (error) {
    console.log('Resquest error:', error);
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export default instance;
