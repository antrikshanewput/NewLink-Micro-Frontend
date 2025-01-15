import React from 'react';

import './Drawer.css';
import { Flex, Separator, Stack, Text } from '@chakra-ui/react';
import { DrawerRoot, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerBackdrop } from '../ui/drawer';
import MainMenuItem from './MainMenuItem';
import { ClipboardIconButton, ClipboardRoot } from '../ui/clipboard';

export interface NavDrawerProps {
  menuList: Array<{
    menuItemProps: {
      to?: string;
      as?: React.ElementType;
      onClick?: () => void;
    };
    title: string;
    description?: string;
    order: number;
  }>;
  HeaderLogo: React.ElementType;
  isOpen: boolean;
  onClose: () => void;
  handleClose: () => void;
  hederaAccountId: string;
  btnRef?: React.RefObject<any>;
  styling?: object;
  [key: string]: any;
}

const AccountNumber: React.FC<{ hederaAccountId: string }> = ({ hederaAccountId, ...rest }) => {
  return (
    <>
      <Flex
        role='group'
        position='relative'
        w='full'
        textAlign='center'
        justifyContent={'center'}
        px='3'
        py='2'
        fontSize='16px'
        fontWeight='bold'
        alignItems={'center'}
        outline='none'
        color='gray.500'
        gap='2'
        _hover={{ bg: 'none' }}
        _focusVisible={{ bg: 'gray.50' }}
        _dark={{
          color: 'gray.200',
          _focusVisible: { bg: 'gray.800' },
          _hover: { bg: 'none' },
        }}
        {...rest}
      >
        <Text as='span' fontSize='12px'>
          Hedera Account:
        </Text>
        <Text as='span' textDecoration={'underline'} color={'brand.600'} _dark={{ color: 'brand.400' }}>
          {hederaAccountId}
        </Text>
        <ClipboardRoot value={hederaAccountId} timeout={1000}>
          <ClipboardIconButton bg={'transparent'} />
        </ClipboardRoot>
      </Flex>
      <Separator
        border={0}
        borderBottom='1px solid'
        borderColor='inherit'
        marginTop='var(--chakra-space-1)'
        marginBottom='var(--chakra-space-1)'
        opacity='0.6'
      />
    </>
  );
};

export default function NavDrawer({
  menuList,
  HeaderLogo,
  isOpen,
  onClose,
  hederaAccountId,
  handleClose,
  styling,
}: NavDrawerProps) {
  const orderedMenuList = menuList.sort((a, b) => a.order - b.order);
  return (
    <DrawerRoot open={isOpen} onOpenChange={onClose} placement='end'>
      <DrawerBackdrop />
      <DrawerContent {...styling}>
        <DrawerHeader className='drawer-header' pt={'4'}>
          {<HeaderLogo />}
        </DrawerHeader>
        <DrawerBody p='2'>
          <Stack direction='column' gap={'1'}>
            {orderedMenuList.map((item, index) => (
              <React.Fragment key={index}>
                <MainMenuItem handleClose={handleClose} {...item.menuItemProps}>
                  <Flex flexDirection={'column'}>
                    <Text w='100%' fontSize='16px' lineHeight={'1.5rem'} marginBottom='0' fontWeight='600'>
                      {item.title}
                    </Text>
                    <Text fontSize='12px' lineHeight='1.2rem' fontWeight={'400'}>
                      {item.description}
                    </Text>
                  </Flex>
                </MainMenuItem>
                <Separator
                  border={0}
                  borderBottom='1px solid'
                  borderColor='inherit'
                  marginTop='var(--chakra-space-1)'
                  marginBottom='var(--chakra-space-1)'
                  opacity='0.6'
                />
              </React.Fragment>
            ))}
            <AccountNumber hederaAccountId={hederaAccountId} />
          </Stack>
        </DrawerBody>
        <DrawerCloseTrigger
          asChild
          bg={'transparent'}
          _hover={{ bgColor: 'transparent', border: 'none', outline: 'none' }}
          top={'3'}
        />
      </DrawerContent>
    </DrawerRoot>
  );
}
