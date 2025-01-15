import React, { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import system from '@/utils/theme';

interface ChakraProviderSetupProps {
  children: ReactNode;
}

const ChakraProviderSetup: React.FC<ChakraProviderSetupProps> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

export default ChakraProviderSetup;
