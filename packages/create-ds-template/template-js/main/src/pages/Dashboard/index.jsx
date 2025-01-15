import { Box, Button, Flex, HStack, IconButton, Stack, StatHelpText, StatValueText, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import IconBuy from '../../assets/Logo/IconBuy';
import IconReceive from '../../assets/Logo/IconReceive';
import IconSend from '../../assets/Logo/IconSend';
import { StatRoot } from '@chakra-ui/react/stat';
import { Page, PageContent } from '../../components/Page';
import system from '../../utils/theme';

const StyleBtn = styled(Button)({
  width: '130px',
  height: '260px',
  borderTopLeftRadius: '260px',
  borderBottomLeftRadius: '260px',
  overflow: 'hidden',
});

export default function PageDashboard() {
  return (
    <Page pt={0} mt='-1.25rem' containerSize='md' overflow={'hidden'}>
      <PageContent pb={'60px'}>
        <Flex direction='column' justifyContent={'space-between'} h={'100%'}>
          <Stack gap={10} mt='20px'>
            <Flex justifyContent='space-between' h='300px' alignItems='center'>
              <VStack flex='1' alignItems={'flex-start'} justifyContent={'center'} gap={7}>
                <StatRoot fontSize={'24px'}>
                  <StatValueText fontSize={'5xl'} color='brand.600' _dark={{ color: 'brand.300' }}>
                    {0.0}
                  </StatValueText>
                  <StatHelpText fontSize={'lg'} pl='1'>
                    {'USD'}
                  </StatHelpText>
                </StatRoot>
              </VStack>
              <VStack>
                <Link to='/send'>
                  <StyleBtn
                    mr={{ lg: 'auto' }}
                    variant='solid'
                    bgGradient={`linear-gradient(232deg, ${system.token('colors.brand.600')} 28.08%, ${system.token(
                      'colors.brand.400'
                    )} 100.03%)`}
                    rightIcon={<IconSend width='11px' fill='white' stroke='white' _dark={{ fill: 'black', stroke: 'black' }} />}
                    onClick={() => console.log('dhan te naaaan')}
                  >
                    Send
                  </StyleBtn>
                </Link>
              </VStack>
            </Flex>
          </Stack>
          <HStack>
            <Box w='100%' textAlign={'center'} fontSize='16px'>
              <IconButton
                variant='solid'
                h='55px'
                mb='7px'
                w='100%'
                as={Link}
                boxShadow={'0px 2px 4px 0px rgba(43, 43, 58, 0.16)'}
                to='receive'
                aria-label='receive button'
                bg={'brand.600'}
              >
                <IconReceive stroke='white' _dark={{ fill: 'black', stroke: 'black' }} />
              </IconButton>
              Receive
            </Box>
            <Box w='100%' textAlign={'center'}>
              <IconButton
                bg={'brand.600'}
                aria-label='Buy Button'
                variant='solid'
                h='55px'
                mb='7px'
                w='100%'
                as={Link}
                to='buy'
                boxShadow={'0px 2px 4px 0px rgba(43, 43, 58, 0.16)'}
              >
                <IconBuy stroke='white' fill='brand.600' _dark={{ fill: 'brand.300', stroke: 'black' }} />
              </IconButton>
              Buy
              {/* Donate */}
            </Box>
          </HStack>
        </Flex>
      </PageContent>
    </Page>
  );
}
