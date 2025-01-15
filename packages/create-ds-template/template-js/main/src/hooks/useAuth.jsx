import { useMutation } from '@tanstack/react-query';
import { login, register, logout, sendInvite } from '@/services/api/authApi';

export const useLogin = (config = {}) => {
  return useMutation({ mutationFn: login, ...config });
};

export const useRegister = (config = {}) => {
  return useMutation({ mutationFn: register, ...config });
};

export const useLogout = () => {
  return useMutation({ mutationFn: logout });
};

export const useSendInvite = (config = {}) => {
  return useMutation({
    mutationFn: sendInvite,
    ...config,
  });
};
