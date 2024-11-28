import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconClose = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg height="6" viewBox="0 0 24 24" {...rest}>
      <path d="M2 2L22 22" stroke-linecap="round" />
      <path d="M22 2L2 22" stroke-linecap="round" />
    </chakra.svg>
  );
};

export default IconClose;
