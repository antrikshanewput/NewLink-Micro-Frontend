import { ComponentProps } from 'react';

import { chakra } from '@chakra-ui/react';

const IconSend = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  return (
    <chakra.svg viewBox="0 0 27 31" {...rest}>
      <g id="Art">
        <g id="Art">
          <path
            id="Vector 176"
            d="M1.36621 29.5666H25.6329"
            // stroke="#2B2B3A"
            strokeWidth="1.73333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector 177"
            d="M0.802192 21.9752C0.438776 22.2867 0.396689 22.8339 0.708188 23.1973C1.01969 23.5607 1.56681 23.6028 1.93023 23.2913L0.802192 21.9752ZM26.497 1.89972C26.5337 1.42249 26.1766 1.00585 25.6994 0.969138L17.9223 0.370905C17.4451 0.334195 17.0285 0.691312 16.9917 1.16855C16.955 1.64579 17.3121 2.06242 17.7894 2.09913L24.7023 2.6309L24.1705 9.54381C24.1338 10.021 24.4909 10.4377 24.9682 10.4744C25.4454 10.5111 25.862 10.154 25.8988 9.67675L26.497 1.89972ZM1.93023 23.2913L26.1969 2.49127L25.0689 1.17523L0.802192 21.9752L1.93023 23.2913Z"
            // fill="#2B2B3A"
          />
        </g>
      </g>
    </chakra.svg>
  );
};
export default IconSend;
