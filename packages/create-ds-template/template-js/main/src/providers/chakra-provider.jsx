import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import system from '../utils/theme';

const ChakraProviderSetup = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

export default ChakraProviderSetup;
