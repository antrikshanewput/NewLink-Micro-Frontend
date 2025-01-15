import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconReceive = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg width="16" height="18" viewBox="0 0 16 18" {...rest}>
      <g id="Art">
        <path
          id="Vector 176"
          d="M1 17.3333H15"
          // stroke="#2B2B3A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector 177"
          d="M15.3254 1.71288C15.5351 1.53317 15.5593 1.21752 15.3796 1.00786C15.1999 0.798193 14.8843 0.773912 14.6746 0.953624L15.3254 1.71288ZM0.501472 13.2949C0.480293 13.5702 0.686323 13.8106 0.961652 13.8318L5.4484 14.1769C5.72373 14.1981 5.96409 13.9921 5.98527 13.7167C6.00645 13.4414 5.80042 13.201 5.52509 13.1799L1.53688 12.8731L1.84366 8.88485C1.86484 8.60953 1.65881 8.36916 1.38348 8.34798C1.10815 8.3268 0.867786 8.53283 0.846607 8.80816L0.501472 13.2949ZM14.6746 0.953624L0.674604 12.9536L1.3254 13.7129L15.3254 1.71288L14.6746 0.953624Z"
        />
      </g>
    </chakra.svg>
  );
};
export default IconReceive;
