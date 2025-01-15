import React from 'react';
import ReactQueryProvider from './react-query-provider';
import ChakraProviderSetup from './chakra-provider';
import { AuthProvider } from '@/contexts/authContext';

const Providers = ({ children }) => (
  <ReactQueryProvider>
    <AuthProvider>
      <ChakraProviderSetup>{children}</ChakraProviderSetup>
    </AuthProvider>
  </ReactQueryProvider>
);

export default Providers;
