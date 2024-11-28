import React from 'react';

import {
  DrawerRoot,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
//   DrawerOverlay,
DrawerBackdrop
} from '@chakra-ui/react';
import { CaratLogo } from '../Logo/CaratLogo';

// import { CaratLogo } from '@/components/Logo/CaratLogo';
// import { useRtl } from '@/hooks/useRtl';
// import { useLayoutContext } from '@/layout/LayoutContext';
// import { MainMenu } from '@/layout/MainMenu';

export const NavDrawer = ({ ...rest }) => {
//   const { navIsOpen, navOnClose } = useLayoutContext();
//   const { rtlValue } = useRtl();
  return (
    <DrawerRoot
    //   isOpen={navIsOpen}
    //   placement="right"
    //   onClose={() => navOnClose?.()}
    //   {...rest}
    >
      <DrawerBackdrop>
        <DrawerContent >
          <DrawerCloseTrigger  />
          <DrawerHeader>
            {/* <CaratLogo
            //   fontSize="150px"
            //   fill="brand.600"
            //   _dark={{ fill: 'white' }}
            /> */}
            <CaratLogo fontSize='150px' fill='brand.600' _dark={{ fill: 'white' }} />
          </DrawerHeader>
          <DrawerBody p="2">
            {/* <MainMenu direction="column" /> */}
          </DrawerBody>
        </DrawerContent>
      </DrawerBackdrop>
    </DrawerRoot>
  );
};
