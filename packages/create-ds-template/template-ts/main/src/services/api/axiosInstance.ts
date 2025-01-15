import axios from 'axios';

const axiosClient = (baseUrl, config) =>
  axios.create({
    baseURL: baseUrl,
    ...config,
  });

const microServicesURLs = {
  AUTH_URL: 'http://localhost:3395/',
  BLOCK_URL: '',
};

const clients = {};
const microServices = {};

for (const key in microServicesURLs) {
  const axiosInstance = axiosClient(microServicesURLs[key], {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  microServices[key] = key;
  clients[key] = axiosInstance;
}

export default (method, uri, data = {}, configs = {}) => {
  const {
    successMessage = null,
    server = microServices.TIKIT_TEMPLATE,
    headers = {},
    params = {},
    responseType = 'json',
    handlerEnabled = true,
    loader = true,
  } = configs;

  const axiosConfig = {
    headers,
    params,
    handlerEnabled,
    loader,
  };

  if (responseType) {
    axiosConfig.responseType = responseType;
  }

  if (successMessage) {
    axiosConfig.successMessage = successMessage;
  }

  return clients[server][method](uri, method === 'get' || method === 'delete' ? axiosConfig : data, axiosConfig);
};

export { microServices };
