import React, { startTransition, useCallback } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import Logout from '../pages/Logout/Logout';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PageDashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import ProfilePage from '../pages/Profile';
import { mfeRoutes } from './mfeRoutes';
import AppLayout from '../layouts/AppLayout';
import Register from '../pages/Register';
import { GuardPublicOnly } from '@/components/Auth';
import GuardAuthenticated from '@/components/Auth/GuardAuthenticated';

const useTransitionNavigate = () => {
  const navigate = useNavigate();
  return useCallback(
    (to, options) => {
      startTransition(() => {
        navigate(to, options);
      });
    },
    [navigate]
  );
};

export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'logout', element: <Logout /> },
      {
        path: 'login',
        element: (
          <GuardPublicOnly>
            <Login />
          </GuardPublicOnly>
        ),
      },
      {
        path: 'register',
        element: (
          <GuardPublicOnly>
            <Register />
          </GuardPublicOnly>
        ),
      },
      {
        path: '',
        element: (
          <GuardAuthenticated>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </GuardAuthenticated>
        ),
        children: [
          { path: '', element: <PageDashboard /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'transactions', element: <Transactions /> },
          { path: '*', element: <ErrorPage errorCode={404} /> },
          ...mfeRoutes,
        ],
      },
    ],
  },
  { path: '*', element: <ErrorPage errorCode={404} /> },
];

export { useTransitionNavigate };
