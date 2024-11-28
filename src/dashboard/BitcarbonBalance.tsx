import React from 'react';

import { Link as ChakraLink, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

export default function BitcarbonBalance() {
  const amount = 0;

  const amountFormat = (amount: number) => {
    return amount?.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  };

  return (
    <ChakraLink
    //   to={amount ? '/bitcarbon' : '/bitcarbon/buy'}
      variant={'underline'}
      fontWeight="500"
      color="purple.600"
      _dark={{ color: 'purple.600' }}
      colorPalette={'purple'}
      textDecorationThickness={'2px'}
    >
      {amount ? (
        <>
          + {amountFormat(amount)}
          <Text color='purple.600' as="span">
            {' '}
            Bitcarbon{' '}
          </Text>
        </>
      ) : (
        <Text color='purple.600'>
            Buy Bitcarbon
        </Text>
      )}
    </ChakraLink>
  );
}
