import axiosInstance, { microServices } from './axiosInstance';

const login = async (credentials: any) => {
  let { phone, password } = credentials;

  if (phone.startsWith('+91')) {
    phone = phone.slice(3);
  }

  const response = await axiosInstance(
    'post',
    '/authentication/login',
    { phone, password },
    {
      server: microServices.AUTH_URL,
    }
  );
  return response.data;
};

const register = async (userData: any) => {
  const response = await axiosInstance('post', '/register', userData, {
    server: microServices.AUTH_URL,
  });
  return response.data;
};

const logout = async () => {
  const response = await axiosInstance(
    'post',
    '/logout',
    {},
    {
      server: microServices.AUTH_URL,
    }
  );
  return response.data;
};

const sendInvite = async (payload: any) => {
  const response = await axiosInstance('post', '/v1/auth/send-invite-link', payload, {
    server: microServices.AUTH_URL,
  });
  return response.data;
};

export { login, register, logout, sendInvite };
