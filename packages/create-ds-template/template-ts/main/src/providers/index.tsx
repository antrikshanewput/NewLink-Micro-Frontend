import React, { ReactNode } from 'react';
import ReactQueryProvider from './react-query-provider';
import ChakraProviderSetup from './chakra-provider';
import { AuthProvider } from '@/contexts/authContext';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <ReactQueryProvider>
    <AuthProvider>
      <ChakraProviderSetup>{children}</ChakraProviderSetup>
    </AuthProvider>
  </ReactQueryProvider>
);

export default Providers;
