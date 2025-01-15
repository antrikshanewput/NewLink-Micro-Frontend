import React from 'react';
import { Viewport } from '../components/Viewport';
import { useLocation } from 'react-router-dom';
import { menuList } from '../utils/menuList';
import { Loader } from '../assets/Loader';
import system from '../utils/theme';
import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster';
import TopBarComponent from '../components/TopBar';

const AppLayout = ({ children }) => {
  const { pathname } = useLocation();

  // if (profile.isLoading) return <Loader />;
  const hideTopBar = pathname && ['/settings', '/security', '/kyc'].includes(pathname);
  return (
    <Viewport>
      {/* <TopBar menuList={menuList} HeaderLogo={logo} /> */}
      <TopBarComponent menuList={menuList} />
      <Box h={`calc(4rem + ${system.token('spacing.safe-top')})`} />
      <Flex direction='column' flex='1' w='full' px='6' mx='auto' maxW={'80ch'}>
        {children}
      </Flex>
      <Toaster />
    </Viewport>
  );
};

export default AppLayout;
