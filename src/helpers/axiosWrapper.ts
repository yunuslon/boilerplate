import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {API_URL} from 'shared/constans';

type CustomHeaders = Record<string, string>;

type CustomOptions = {
  MAIN_URL?: string;
  customHeaders?: CustomHeaders;
  xhrLogic?: string;
};

const request = async function (options: AxiosRequestConfig & CustomOptions) {
  const requestHeaders = options.customHeaders || {
    'Content-type': 'application/json',
    Accept: 'application/json',
  };
  let tokenParam = {};
  let baseParam = {
    'device-type': Platform.OS,
    'os-version': parseInt(Platform.Version.toString(), 10),
    'app-version': DeviceInfo.getVersion(),
  };

  // You can call the token here and use it in the token parameter.
  // if (condition) {
  //   tokenParam = {
  //     Authorization: 'Bearer your_token',
  //    ### or ##
  //     'X-Access-Token': "Your token",
  //     'x-refresh-token': "Refresh token",
  //   };
  // }
  const client = axios.create({
    baseURL: options.MAIN_URL || API_URL,
    headers: {...requestHeaders, ...baseParam, ...tokenParam},
    timeout: options?.xhrLogic?.includes('timeout')
      ? options.timeout || 60000
      : 0,
    timeoutErrorMessage: 'axios-default-timeout',
  });
  const onSuccess = function (response: AxiosResponse) {
    // sentryHandleSuccess(sentryVar, response);
    return response.data;
  };
  const onError = async function (error: AxiosError) {
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('General Error:', error.message);
    }
    return Promise.reject(error.response || error.message);
  };
  return client(options).then(onSuccess).catch(onError);
};

export default request;
