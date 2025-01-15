import { Button, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { Link, useSearchParams } from 'react-router-dom';

import { Page, PageContent } from '@/components/Page';
import { APP_NAME } from '@/constant';
import { ACCOUNT_CREATE_STATUS } from '@/constant';
import { CaratLogo } from '@/assets/Logo/CaratLogo';

interface TestProps {
  status: string;
  phone: string;
  setStatus: any;
}
export default function RegisterFeedback({ status, phone, setStatus }: TestProps) {
  const [searchParams] = useSearchParams();
  // let param: TODO = searchParams.get('phone');
  // const phone = param ? `+${param?.trim()}` : '';

  if (status === ACCOUNT_CREATE_STATUS.SMS_SEND) {
    return (
      <Page maxW='full'>
        <PageContent minH='100vh' display='flex' alignItems='center'>
          <Flex direction='column' justifyContent='space-evenly' align='center' h='100vh' p={5}>
            <CaratLogo fontSize='150px' fill='brand.600' />
            <Stack gap={10}>
              <Text fontSize='xl' fontWeight={'600'} textAlign={'center'}>
                We have sent a text message to
                <Text as='samp' pl='1' pr='1' fontSize='20px' fontWeight='bold' wordBreak='keep-all' color='white'>
                  {phone}
                </Text>
                with a link to create a new <Text as='span'>YIELD</Text>
                <Text as='span' fontWeight={800}>
                  FX
                </Text>{' '}
                account.
              </Text>
              <Button
                variant='plain'
                fontSize='20px'
                fontWeight={'600'}
                onClick={() => setStatus('')}
                textDecoration={'underline'}
              >
                Resend Link
              </Button>
            </Stack>
          </Flex>
        </PageContent>
      </Page>
    );
  }

  return (
    <Page>
      <PageContent>
        <Center flex='1' px='2' pb='4rem'>
          <Stack alignItems={'center'} p={15} gap='30'>
            <Stack alignItems={'center'} pb={18}>
              <CaratLogo fontSize='150px' fill='brand.600' />
            </Stack>
            {status === ACCOUNT_CREATE_STATUS.ALREADY_EXISTS && (
              <>
                <Text textAlign={'center'}>This phone number is already associated with a {APP_NAME} account.</Text>
                <Button w='100%' as={Link} to='/login' variant='plain' colorScheme={'brand'} textDecoration='underline'>
                  Login to existing account
                </Button>
              </>
            )}
            {status === ACCOUNT_CREATE_STATUS.FAILED && (
              <>
                <Text textAlign={'center'}>Liveness check failed.</Text>
                <Button w='100%' as={Link} to='/register' variant='plain' colorScheme={'brand'} textDecoration='underline'>
                  Try Again
                </Button>
              </>
            )}
          </Stack>
        </Center>
      </PageContent>
    </Page>
  );
}
