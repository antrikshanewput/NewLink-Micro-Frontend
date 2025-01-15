'use client';

import { ReactNode } from 'react';

import { Navigate, useLocation, useSearchParams } from 'react-router-dom';

import { useAuthContext } from '@/contexts/authContext';

const GuardPublicOnly = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  const { search } = useLocation();
  const [searchParams] = useSearchParams();

  if (isAuthenticated) {
    let redirect = searchParams.get('redirect') ?? '/';

    // redirect with all query params while scaning the qr
    if (redirect.includes('/scan-qr') || redirect.includes('/qr-auth')) {
      redirect = search.replace('?redirect=', '') ?? '/';
    }

    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
};

export default GuardPublicOnly;
