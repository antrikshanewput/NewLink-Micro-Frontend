import './App.css';

import { useRef } from 'react';

import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom';

import { Loader } from './assets/Loader';
import { routes } from './routes';

export default function App(): JSX.Element {
  const routerRef = useRef<Router | null>(null);

  if (!routerRef.current) {
    routerRef.current = createBrowserRouter(routes, {
      basename: '/',
      future: {
        v7_normalizeFormMethod: true,
      },
    });
  }

  if (!routerRef.current) return <Loader />;

  return <RouterProvider router={routerRef.current} />;
}
