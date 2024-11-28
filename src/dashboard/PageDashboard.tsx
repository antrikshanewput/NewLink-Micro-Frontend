import React from 'react';
import { Page, PageContent , PageBottomBar} from '../components/Page';
import {
  Box,
  Button,
//   Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  Stack,
//   Text,
  VStack,
} from '@chakra-ui/react';
import { IconReceive, IconSend } from '../Logo';
import IconBuy from '../Logo/IconBuy';
import styled from '@emotion/styled';
import Balance from './Balance';
import BitcarbonBalance from './BitcarbonBalance';
// import { TopBar } from '../layout/TopBar';
// import { IP_DATA } from 'constant';
// import { Link, useNavigate } from 'react-router-dom';

// import { amountFormat } from '@/common/common';
// import { pluralize } from '@/common/common';
// import AccountLockedBanner from '@/components/Banner/AccountLockedBanner';
// import NotificationDrawer from '@/components/NotificationDrawer';
// import { Page, PageBottomBar, PageContent } from '@/components/Page';
// import TransactionList from '@/features/transaction/TransactionList';
// import { useTransactionList } from '@/features/transaction/services';
// import { Loader } from '@/layout/Loader';
// import PrivateModeHint from '@/layout/PrivateModeHint';

// import IconBuy from '../../components/Logo/IconBuy';
// import IconReceive from '../../components/Logo/IconReceive';
// import IconSend from '../../components/Logo/IconSend';
// import { getLocalStorage } from '../../hooks/common';
// import { useStateContext } from '../contexts/StateContext';
// import { useEscrowList } from '../escrow/services';
// import Balance from './Balance';
// import BitcarbonBalance from './BitcarbonBalance';
// import { useBalance } from './services';

const StyleBtn = styled(Button)({
  width: '130px',
  height: '260px',
  borderTopLeftRadius: '260px',
  borderBottomLeftRadius: '260px',
  overflow: 'hidden',
});

export default function PageDashboard() {
//   const ipData = getLocalStorage(IP_DATA);
//   const { profile } = useStateContext();
//   const currency = ipData?.currency;
//   const balance = useBalance({ currency });
//   const { transactions } = useTransactionList({ limit: 2 });
//   const { data: escrow } = useEscrowList({ userId: profile?.id });
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const [channelProps, setChannelProps] = React.useState<any>();

//   if (balance?.isLoading) {
//     return <Loader />;
//   }

  return (
    <Page containerSize="md" overflow={'hidden'}>
      {/* <TopBar/> */}
      <Stack p={3}>
        {/* <PrivateModeHint />
        <AccountLockedBanner /> */}
      </Stack>
      <PageContent>
        <Stack mt="20px">
          <Flex justifyContent="space-between" h="300px" alignItems="center">
            <Balance ></Balance>
            <VStack>
              <StyleBtn
                mr={{ base: '-25px', lg: 'auto' }}
                // to="/send"
                // variant="primary"
                _dark={{
                  bgGradient:
                    'linear-gradient(122deg, brand.400 0%, gray.50 69.19%)',
                  color: 'gray.800',
                }}
                bgColor={'purple.600'}
                bgGradient="linear-gradient(232deg, brand.600 28.08%, brand.400 100.03%)"
                // rightIcon={
                  
                // }
                // onClick={() => {
                //   setChannelProps({
                //     onSubmit: (channel: string) => {
                //       navigate(`/send?channel=${channel}`);
                //       setChannelProps(null);
                //     },
                //     onClose: () => setChannelProps(null),
                //   });
                // }}
              >
                Send
                <IconSend
                    width="11px"
                    fill="white"
                    stroke="white"
                    _dark={{ fill: 'black', stroke: 'black' }}
                  />
              </StyleBtn>
            </VStack>
          </Flex>
          <BitcarbonBalance  />
          {/* {escrow?.totalValidEscrowAccounts ? (
            <ChakraLink to="/escrow" as={Link}>
              <Text as="u">{`
              ${pluralize(
                amountFormat(escrow?.totalAmount),
                'Carat'
              )} in ${pluralize(
                escrow?.totalValidEscrowAccounts,
                'escrow account'
              )}
              `}</Text>
            </ChakraLink> */}
          {/* ) : null}
          <TransactionList transactions={transactions} /> */}
        </Stack>
      </PageContent>
      <PageBottomBar pb="20px">
        <HStack>
          <Box w="100%" textAlign={'center'} fontSize="16px">
            <IconButton
              h="55px"
              mb="7px"
              w="100%"
              boxShadow={'0px 2px 4px 0px rgba(43, 43, 58, 0.16)'}
              // _dark={{
              //   background: `var(--linear-secondary-purple, linear-gradient(103deg, 0%, #FFF 100%))`,
              // }}
              bgColor={'purple.600'}
            //   to="receive"
              aria-label="receive button"
              // icon={
              //   <IconReceive
              //     stroke="white"
              //     _dark={{ fill: 'black', stroke: 'red' }}
              //   />
              // }
            >
              <IconReceive stroke={'white'}/>
            </IconButton>
            Receive
          </Box>
          <Box w="100%" textAlign={'center'}>
            <IconButton
              aria-label="Buy Button"
            //   variant="@primary"
              h="55px"
              mb="7px"
              w="100%"
            //   as={Link}
            //   to="buy"
              boxShadow={'0px 2px 4px 0px rgba(43, 43, 58, 0.16)'}
              bgColor={'purple.600'}
              _dark={{
                // background: `var(--linear-secondary-purple, linear-gradient(103deg, ${theme.colors.brand['400']} 0%, #FFF 100%))`,
              }}
            //   icon={
            //     <IconBuy
            //       stroke="white"
            //       fill="brand.600"
            //       _dark={{ fill: 'brand.300', stroke: 'black' }}
            //     />
                // <IconDonate
                //   width={'26px'}
                //   fill="brand.600"
                //   stroke="white"
                //   footerStroke={theme.colors.brand[400]}
                //   _dark={{
                //     fill: 'brand.400',
                //     stroke: 'black',
                //     footerStroke: '#703DBA!important',
                //   }}
                // />
            //   }
            >
              <IconBuy stroke={'white'} fill={'purple.600'} />
            </IconButton>
            Buy
            {/* Donate */}
          </Box>
        </HStack>
        {/* <NotificationDrawer isOpen={!!channelProps} {...channelProps} /> */}
      </PageBottomBar>
    </Page>
  );
}
