import React, { useRef, useState } from 'react';

import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './TopBar.css';

import { CaratLogo } from '../../assets/Logo/CaratLogo';
import IconHamburger from '../../assets/Logo/IconHamburger';
import { SideBar } from '../Drawer';

const MenuButton = React.forwardRef((props, ref) => {
  return (
    <IconButton
      aria-label='Navigation'
      variant='ghost'
      _active={{ bg: 'gray.100' }}
      _hover={{ bg: 'gray.200' }}
      _dark={{ _hover: { bg: 'whiteAlpha.200' } }}
      {...props}
      ref={ref}
    >
      <IconHamburger fontSize='2xl' stroke='black' />
    </IconButton>
  );
});

const menuListConfig = [
  {
    title: 'Profile',
    description: 'Update name, email or default location, delete account',
    menuItemProps: {
      to: '/profile',
      as: Link,
    },
    order: 1,
  },
  {
    title: 'Transactions',
    description: 'View the history of payments sent and received',
    menuItemProps: {
      to: '/transactions',
      as: Link,
    },
    order: 2,
  },
  {
    title: 'Purchase',
    description: 'View the history of purchase transactions',
    menuItemProps: {
      to: '/purchase',
      as: Link,
    },
    order: 3,
  },
  {
    title: 'Logout',
    description: '',
    menuItemProps: {
      onClick: () => console.log('Logged out succesfully'),
    },
    order: 100000,
  },
];

function TopBar({ menuList, HeaderLogo, onClose, hederaAccountId }) {
  const NavBarHeaderLogo = HeaderLogo
    ? HeaderLogo
    : () => <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />;
  const btnRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const menuOptions = menuList ? [...menuListConfig, ...menuList] : menuListConfig;

  const handleOpenDrawer = () => setDrawerIsOpen(true);
  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <Flex
        position='fixed'
        top='0'
        insetStart='0'
        insetEnd='0'
        maxW='80ch'
        m='auto'
        align='center'
        pt='safe-top'
        px='5'
        h={'64px'}
        bg='gray.50'
        color='gray.800'
        justifyContent={'space-between'}
        _dark={{
          bg: 'gray.800',
          color: 'gray.50',
        }}
      >
        <Link className='navbar-header' to='/'>
          <NavBarHeaderLogo className='navbar-header' />
        </Link>
        <MenuButton
          ref={btnRef}
          display={{ base: 'flex' }}
          mr='-0.5rem'
          borderRadius='full'
          _focusVisible={{ shadow: 'outline' }}
          onClick={handleOpenDrawer}
        />
      </Flex>
      <Box />
      <SideBar
        menuList={menuOptions}
        HeaderLogo={NavBarHeaderLogo}
        btnRef={btnRef}
        isOpen={drawerIsOpen}
        handleClose={handleCloseDrawer}
        onClose={handleCloseDrawer}
        hederaAccountId={hederaAccountId ? hederaAccountId : '0.0.5101947'}
      />
    </>
  );
}

export default function TopBarComponent(props) {
  return <TopBar {...props} />;
}
