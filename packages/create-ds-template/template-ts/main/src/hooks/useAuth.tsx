import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { login, register, logout, sendInvite } from '@/services/api/authApi';
import { AxiosError } from 'axios';

type ApiErrorResponse = {
  title?: string;
  message?: string;
  errorKey?: string;
};

export const useLogin = (
  config: UseMutationOptions<any, AxiosError<ApiErrorResponse>, { phone: number; password: string }> = {}
) => {
  return useMutation({ mutationFn: login, ...config });
};

export const useRegister = (config: UseMutationOptions<any, AxiosError<ApiErrorResponse>> = {}) => {
  return useMutation({ mutationFn: register, ...config });
};

export const useLogout = () => {
  return useMutation({ mutationFn: logout });
};

export const useSendInvite = (
  config: UseMutationOptions<
    any,
    AxiosError<ApiErrorResponse>,
    {
      phone: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      force?: boolean;
    }
  > = {}
) => {
  return useMutation({
    mutationFn: sendInvite,
    ...config,
  });
};
