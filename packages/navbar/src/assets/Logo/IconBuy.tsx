import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconBuy = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg width='7' height='7' viewBox='0 0 24 24' {...rest}>
      <rect x='2' y='2' width='20' height='20' rx='2' strokeLinejoin='round' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6V11.5H6C5.72386 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.72386 12.5 6 12.5H11.5V18C11.5 18.2761 11.7239 18.5 12 18.5C12.2761 18.5 12.5 18.2761 12.5 18V12.5H18C18.2761 12.5 18.5 12.2761 18.5 12C18.5 11.7239 18.2761 11.5 18 11.5H12.5V6Z'
      />
    </chakra.svg>
  );
};
export default IconBuy;
