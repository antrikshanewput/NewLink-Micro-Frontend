import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconMicroPayment = () => {
  return (
    <chakra.svg width="8" height="8" viewBox="0 0 32 36" >
      <rect
        x="1"
        y="1.32349"
        width="29.9997"
        height="33.333"
        rx="1.66665"
        //stroke="white"
        stroke-width="1.66665"
      />
      <rect
        x="6"
        y="22.99"
        width="6.6666"
        height="6.6666"
        rx="1.66665"
        stroke-width="1.66665"
      />
      <path
        d="M26.0006 34.6658V24.6659C26.0006 23.7455 25.2544 22.9993 24.3339 22.9993H21.0006C20.0802 22.9993 19.334 23.7455 19.334 24.6659V34.6658"
        //stroke="white"
        stroke-width="1.66665"
      />
      <circle cx="22.013" cy="29.4385" r="0.833325" />
      <path
        d="M9.01972 13.6691C3.74753 16.08 1.55268 13.5751 1.04865 11.8654C1.01273 11.7436 1 11.6169 1 11.4899V2.99941C1 2.07895 1.74619 1.33276 2.66665 1.33276H29.3331C30.2535 1.33276 30.9997 2.07895 30.9997 2.99941V9.16191C30.9997 10.3562 29.7024 11.0607 28.5482 11.3678C27.4365 11.6634 26.5338 12.6116 25.0592 13.6691C22.683 15.3731 19.7127 13.9531 18.5246 13.1011C17.3365 12.2491 15.8513 10.5451 9.01972 13.6691Z"
        //stroke="white"
        stroke-width="1.66665"
      />
    </chakra.svg>
  );
};
export default IconMicroPayment;
