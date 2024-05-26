import {Platform} from 'react-native';
import axios from 'axios';

export const baseUrl =
  Platform.OS === 'android' ? 'http://10.0.2.2:4000' : 'http://localhost:4000';

axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const {get, post, put, delete: del} = axios;
