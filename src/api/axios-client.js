import axios from 'axios';
import { getToken } from '../utils/token';

const axiosComponent = (contentType) => {
  const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    headers: {
      'Content-type': contentType,
      Authorization: `Bearer ${getToken()}`,
    },
  });

  axiosClient.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const res = error.response;
      if (res.status === '401') {
      } else {
        console.log(res.status);
      }
      return Promise.reject(error);
    }
  );

  return axiosClient;
};

export const axiosForJson = axiosComponent('application/json');
