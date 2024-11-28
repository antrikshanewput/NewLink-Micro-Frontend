import React from 'react';

import {
  Box,
  Button,
//   CloseButton,
  Flex,
  IconButton,
  IconButtonProps,
//   SlideFade,
  useBreakpointValue,
//   useTheme,
} from '@chakra-ui/react';
import { MdArrowBack } from 'react-icons/md';
import { IconHamburger } from '../Logo';
import { CaratLogo } from '../Logo/CaratLogo';
import { CloseButton } from '../components/ui/close-button';
import { NavDrawer } from './NavDrawer';
import { Link } from 'react-router-dom';

// import { Icon } from '@/components/Icons';
// import { CaratLogo } from '@/components/Logo/CaratLogo';
// import IconHamburger from '@/components/Logo/IconHamburger';
// import { useLayoutContext } from '@/layout/LayoutContext';
// import { MainMenu } from '@/layout/MainMenu';
// import { NavDrawer } from '@/layout/NavDrawer';

const MenuButton = (props: Partial<IconButtonProps>) => {
//   const { navOnOpen } = useLayoutContext();
  return (
    <IconButton
      aria-label="Navigation"
    //   icon={
    //     <Icon
    //       icon={IconHamburger}
    //       fontSize="2xl"
    //       stroke="black"
    //       _dark={{ stroke: 'white' }}
    //     />
    //   }
    //   onClick={navOnOpen}
    //   variant="unstyled"
      _active={{ bg: 'gray.100' }}
      _hover={{ bg: 'gray.200' }}
      _dark={{ _hover: { bg: 'whiteAlpha.200' } }}
    >
        <IconHamburger stroke={'white'} fontSize="2xl"/>
    </IconButton>
  );
};

export const TopBar = () => {
//   const theme = useTheme();
//   const [offset, setOffset] = React.useState(0);
//   const { pathname } = useLocation();

//   const showDrawer = useBreakpointValue(
//     {
//       base: true,
//       [theme.layout.breakpoints.desktop]: false,
//     },
//     { ssr: false }
//   );

//   React.useEffect(() => {
//     const onScroll = () => setOffset(window.pageYOffset);
//     // clean up code
//     window.removeEventListener('scroll', onScroll);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

  const showTopNav = true;
  const showBackIcon = false;
//   !pathname || ['/', '/dashboard'].includes(pathname);
//   const showBackIcon =
//     pathname &&
//     [
//       '/transactions',
//       '/escrow',
//       '/settings',
//       '/security',
//       '/bitcarbon',
//     ].includes(pathname);

  return (
    <>
      {/* <SlideFade in offsetY={-40} style={{ zIndex: 5 }}> */}
        <Flex
          position="fixed"
          top="0"
          insetStart="0"
          insetEnd="0"
          // color="gray.50"
          maxW="80ch"
          m="auto"
          align="center"
          pt="safe-top"
          px="5"
        //   h={theme.layout.topBar.height}
          bg="gray.50"
          color="gray.800"
          justifyContent={'space-between'}
          // boxShadow={offset > 35 ? 'layout' : 'none'}
          _dark={{
            bg: 'gray.800',
            color: 'gray.50',
            // boxShadow: offset > 35 ? 'layout' : 'none',
          }}
        >
          <Box 
          as={Link}
          >
            {/* <CaratLogo
            //   fontSize="150px"
            //   bgColor={'purple.600'}
            //   fill="brand.600"
            //   _dark={{ fill: 'white' }}
            /> */}
            <CaratLogo fontSize='150px' fill='purple.600' _dark={{ fill: 'white' }} />
          </Box>
          {showTopNav ? (
            <MenuButton
              display={{ base: 'flex' }}
              mr="-0.5rem"
              borderRadius="full"
              _focusVisible={{ shadow: 'outline' }}
            //   bgColor={'transparent'}
            />
          ) : showBackIcon ? (
            <Button
            //   as={Link}
            //   to="/"
              fontSize="lg"
              pr="0"
              aria-label={'back button'}
            //   leftIcon={<MdArrowBack fontSize="xl" height="100px" />}
              background={'bottom'}
              border="none"
            >
                <MdArrowBack fontSize="xl" height="100px" />
              Back
            </Button>
          ) : (
            <CloseButton size="lg" 
            // as={Link} to="/" 
            />
          )}
        </Flex>
      {/* </SlideFade> */}
      <Box 
    //   h={theme.layout.topBar.height} 
    />
      <NavDrawer />
    </>
  );
};
