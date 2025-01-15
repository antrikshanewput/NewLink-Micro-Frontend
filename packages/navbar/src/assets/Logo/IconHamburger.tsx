import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconHamburger = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg width="29px" height="29px" viewBox="0 0 29 29" {...rest}>
      <rect
        y="14.1421"
        width="4"
        height="4"
        transform="rotate(-45 0 14.1421)"
        fill="white"
      />
      <rect
        x="5.65723"
        y="8.48523"
        width="4"
        height="4"
        transform="rotate(-45 5.65723 8.48523)"
        fill="white"
      />
      <rect
        x="11.3135"
        y="2.82837"
        width="4"
        height="4"
        transform="rotate(-45 11.3135 2.82837)"
        fill="white"
      />
      <rect
        x="5.65723"
        y="19.799"
        width="4"
        height="4"
        transform="rotate(-45 5.65723 19.799)"
        fill="white"
      />
      <rect
        x="11.3135"
        y="14.1421"
        width="4"
        height="4"
        transform="rotate(-45 11.3135 14.1421)"
        fill="white"
      />
      <rect
        x="16.9707"
        y="8.48523"
        width="4"
        height="4"
        transform="rotate(-45 16.9707 8.48523)"
        fill="white"
      />
      <rect
        x="11.3135"
        y="25.4558"
        width="4"
        height="4"
        transform="rotate(-45 11.3135 25.4558)"
        fill="white"
      />
      <rect
        x="16.9707"
        y="19.799"
        width="4"
        height="4"
        transform="rotate(-45 16.9707 19.799)"
        fill="white"
      />
      <rect
        x="22.627"
        y="14.1421"
        width="4"
        height="4"
        transform="rotate(-45 22.627 14.1421)"
        fill="white"
      />
    </chakra.svg>
  );
};
export default IconHamburger;
