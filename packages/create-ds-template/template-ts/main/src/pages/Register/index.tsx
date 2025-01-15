import React from 'react';

import { Box, Button, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { Formiz, useForm, useFormFields } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { Link, useSearchParams } from 'react-router-dom';

import { phoneValidation } from '@/common/validation';
import { FieldInput } from '@/components/FieldInput';
import { FieldPhoneInput } from '@/components/FieldPhoneInput';
import { Page, PageContent } from '@/components/Page';
import { toastError } from '@/components/CustomToaster';
import { ACCOUNT_CREATE_STATUS, IP_DATA } from '@/constant';
import { useSendInvite } from '@/hooks/useAuth';
// import { useFaceRegister } from '@/features/kyc/services';
import { useLocalStorage } from '@/hooks/useLocalStorage';
// import SMSWarningModal from '@/layout/SMSWarningModal';

import RegisterFeedback from './RegisterFeedback';

// const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/v1/user-kyc-requests/face-auth/register/kyc-status`;

export default function Register() {
  const [searchParams] = useSearchParams();
  const [phoneNo, setPhoneNo] = React.useState<string>('');
  const [ipData] = useLocalStorage(IP_DATA);
  const [status, setStatus] = React.useState('');
  const [isForce, setForce] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneParam: any = searchParams.get('q')?.trim();

  const onOpen = () => console.log('Error');
  const onClose = () => setIsOpen(false);

  const sendInvite = useSendInvite({
    onMutate: () => {},
    onSuccess: (data: any) => {
      if (data?.phoneSMS !== undefined && !data?.phoneSMS) return onOpen();
      setPhoneNo(values?.phone);
      setStatus(ACCOUNT_CREATE_STATUS.SMS_SEND);
    },
    onError: (error: any) => {
      toastError({
        title: 'Error',
        description: error?.response?.data?.message,
      });
    },
  });

  // const faceRegister = useFaceRegister({
  //   onSuccess: (data) => {
  //     subscribeToSSE(data.challengeId);
  //     window.open(data.requestUrl, '_blank');
  //   },
  //   onError: (error) => {
  //     if (error?.response?.data?.code === 422 && error?.response?.data?.message === 'User already exists.') {
  //       return setStatus(ACCOUNT_CREATE_STATUS.ALREADY_EXISTS);
  //     }
  //     toastError({
  //       title: 'Error',
  //       description: error?.response?.data?.message,
  //     });
  //   },
  // });

  const form = useForm<{
    phone: string;
    pin?: string;
    firstName: string;
    lastName: string;
    email?: string;
  }>({
    initialValues: {
      phone: phoneParam ? '+' + phoneParam : '',
    },
    onValidSubmit: async (values) => {
      console.log('data --->', values);
      return;
      sendInvite.mutate({
        phone: values?.phone,
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        force: isForce,
      });
    },
  });

  const values = useFormFields({
    connect: form,
    selector: (field) => field.value,
  });

  if (status) {
    return <RegisterFeedback status={status} phone={phoneNo} setStatus={setStatus} />;
  }

  return (
    <Box animationName='slide-from-bottom, fade-in' animationDuration={'slower'}>
      <Page containerSize='md'>
        <PageContent h='100%' maxW='full' m='0 auto'>
          <Flex px='2rem' py='3rem' maxW='full' direction='column' justifyContent='space-evenly' h='100vh'>
            <Text as='kbd' fontSize='md' textAlign={'center'}>
              We are all global citizens. Why limit ourselves to a single currency?
            </Text>
            <Formiz connect={form}>
              <form onSubmit={form.submit}>
                <Stack gap={10} align='center' h='full' w='100%'>
                  <VStack gap={8} alignItems='center' w='100%'>
                    <FieldInput name='firstName' placeholder='First Name' required='Required' />
                    <FieldInput name='lastName' placeholder='Last Name' required='Required' />
                    <FieldPhoneInput
                      name='phone'
                      validations={phoneValidation}
                      defaultcountry={ipData?.code}
                      required='Required'
                      zIndex={100}
                      placeholder='Phone'
                    />
                    <FieldInput
                      name='email'
                      validations={[
                        {
                          handler: isEmail(),
                          message: 'Email is invalid',
                        },
                      ]}
                      placeholder='Email (Optional)'
                    />
                  </VStack>
                  <VStack w='100%'>
                    <Button
                      bgColor={'brand.600'}
                      color={'white'}
                      type='submit'
                      variant='outline'
                      w='100%'
                      isLoading={sendInvite.isPending}
                    >
                      CREATE YIELDFX ACCOUNT
                    </Button>
                  </VStack>
                </Stack>
              </form>
              <VStack w='100%'>
                <Button
                  as={Link}
                  variant='plain'
                  to={`/login?acceptTerms=${true}`}
                  color={'brand.600'}
                  textDecoration={'underline'}
                >
                  Have an account? Login Here
                </Button>
              </VStack>
            </Formiz>
          </Flex>
        </PageContent>
      </Page>
      {/* <SMSWarningModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cancelText={'Close'}
        confirmText={'Continue'}
        onConfirm={async () => {
          await setForce(true);
          form.submit();
        }}
      /> */}
    </Box>
  );
}
