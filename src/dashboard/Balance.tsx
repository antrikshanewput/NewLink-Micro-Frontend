import React from 'react';

import { StatRoot, StatHelpText,
     StatValueText, 
     Text, VStack } from '@chakra-ui/react';

// import { amountFormat } from '@/common/common';

export default function Balance() {
  const amount =  0;
  const formatBalance = () => {
    const val =
    //   (balance?.data?.carats &&
    //     amountFormat(balance?.data?.carats, currency, undefined, 2)) ||
      '0.00';
    return (
      val && (
        <Text fontSize={'54px'}>
          {val?.split('.')[0]}
          <Text as="span" fontSize={'16px'}>
            .{val?.split('.')[1]}
          </Text>
        </Text>
      )
    );
  };

  return (
    <VStack
      flex="1"
      alignItems={'flex-start'}
      justifyContent={'center'}
      gap={7}
    >
      <StatRoot fontSize={'24px'}>
        <StatValueText
          fontSize={'5xl'}
          color="purple.600"
          _dark={{ color: 'brand.300' }}
        >
          {formatBalance()}
        </StatValueText>
        <StatHelpText fontSize={'lg'} pl="1">
          {/* {balance?.data?.currency === 'USD' && 'US'}
          {amountFormat(amount, currency, 'currency')} */}
          ₹ 0.00
        </StatHelpText>
      </StatRoot>
    </VStack>
  );
}
