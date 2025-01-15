'use client';

import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '@/contexts/authContext';

const GuardAuthenticated = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  const { pathname, search } = useLocation();

  if (!isAuthenticated) {
    const redirect = !pathname || ['/', '/logout'].includes(pathname) ? '/login' : `/login?redirect=${pathname}${search}`;
    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
};

export default GuardAuthenticated;
