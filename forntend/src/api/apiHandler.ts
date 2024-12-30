/* eslint-disable no-console */
import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
  CreateAxiosDefaults,
} from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
};

const apiHandler = axios.create(axiosConfig);

const logOnDev = (
  message: string,
  log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError
) => {
  if (process.env.NODE_ENV === 'development') console.log(message, log);
};

apiHandler.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;

    console.timeEnd(`${method?.toUpperCase()} >>> ${url}`);
    logOnDev(
      `✨ [${method?.toUpperCase()}] ${url} | Response ${response?.status}`,
      response
    );

    return response;
  },
  (error) => {
    const { message, config } = error;
    const { status, data } = error.response;
    console.timeEnd(`${config?.method?.toUpperCase()} >>> ${config?.url}`);
    console.log(
      `${config?.method?.toUpperCase()} >>> ${config?.url} | Error ${status} ${
        data?.message || ''
      } | ${message}`
    );
    logOnDev(
      `🚨 [${config.method?.toUpperCase()}] ${config.url} | Error ${status} ${
        data?.message || ''
      } | ${message}`,
      error
    );

    return Promise.reject(error);
  }
);

export default apiHandler;
