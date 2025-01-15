import { toaster } from '@/components/ui/toaster';

export const toasterDefaultConfig = {
  duration: 1000,
  closable: true,
};

export const toastError = ({ title, description }) =>
  toaster.create({
    ...toasterDefaultConfig,
    type: 'error',
    title,
    description,
    duration: 5000,
  });

export const toastWarning = ({ title, description }) =>
  toaster.create({
    ...toasterDefaultConfig,
    type: 'warning',
    title,
    description,
    duration: 2000,
  });

export const toastSuccess = ({ title, description }) =>
  toaster.create({
    ...toasterDefaultConfig,
    type: 'success',
    title,
    description,
    duration: 2000,
  });

export const toastInfo = ({ title, description }) =>
  toaster.create({
    ...toasterDefaultConfig,
    type: 'info',
    title,
    description,
  });
