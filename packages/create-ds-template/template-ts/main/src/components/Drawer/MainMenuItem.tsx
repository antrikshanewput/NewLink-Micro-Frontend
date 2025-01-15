import { Box, BoxProps } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export default function MainMenuItem({ handleClose, to, ...rest }: BoxProps & { to?: string } & any) {
  const { pathname } = useLocation();

  const isActive = to === '/' ? pathname === '/' : pathname?.startsWith(to);

  return (
    <Box
      bg={isActive ? 'gray.100' : 'transparent'}
      to={to}
      justifyContent='flex-start'
      position='relative'
      opacity={isActive ? 1 : 0.8}
      fontWeight='bold'
      borderRadius='md'
      px='3'
      py='1'
      color={'#000000'}
      _hover={{
        bg: 'gray.100',
        color: '#000000',
      }}
      onClick={handleClose}
      {...rest}
    />
  );
}
