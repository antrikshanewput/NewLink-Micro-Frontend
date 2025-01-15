import { useEffect, useState } from 'react';

import { Box, Button, Flex, Stack, VStack } from '@chakra-ui/react';
import { Formiz, FormizStep, useForm } from '@formiz/core';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { PHONE_NUMBER } from '@/constant';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { phoneValidation } from '@/common/validation';
import { FieldInput } from '@/components/FieldInput';
import { FieldPhoneInput } from '@/components/FieldPhoneInput';
import { CaratLogo } from '@/assets/Logo/CaratLogo';
import { Page, PageContent } from '@/components/Page';
import { getLocalStorage } from '@/hooks/common';
import { useLogin } from '@/hooks/useAuth';
import { toastError, toastSuccess } from '@/components/CustomToaster';
import { useAuthContext } from '@/contexts/authContext';

export default function PageLogin() {
  const [searchParams] = useSearchParams();
  const acceptTerms = searchParams.get('acceptTerms');
  const navigate = useNavigate();
  const { updateToken } = useAuthContext();

  const [val] = useLocalStorage(PHONE_NUMBER);
  const [error, setError] = useState(false);
  const [pinHash, setHash] = useState(false);

  const loginUser = useLogin({
    onMutate: () => {},
    onSuccess: (data) => {
      updateToken(data?.access_token);
      toastSuccess({ description: 'You have logged in successfully' });
      navigate('/');
    },
    onError: (error: any) => {
      toastError({
        title: 'Error',
        description: error?.response?.data?.message,
      });
    },
  });

  const form = useForm({
    initialValues: {
      phone: val,
      password: '',
    },
    onValidSubmit: async (values) => {
      loginUser.mutate({
        phone: values.phone,
        password: values.password,
      });
    },
  });

  // Check the account is already available or not
  const isAccountAvailable = () => {
    const number = getLocalStorage(PHONE_NUMBER);
    return number;
  };

  useEffect(() => {
    form.setErrors({ terms: 'Error' });
    if (isAccountAvailable() || acceptTerms) {
      form.goToStep('login');
    }
  }, []);

  return (
    <>
      <Box animationName='slide-from-bottom, fade-in' animationDuration={'slower'}>
        <Page containerSize='md'>
          <PageContent h='100%' maxW='full' m='0 auto'>
            <Flex p={'20px'} w='24rem' maxW='full' gap='120px' h='100%' m='auto' direction={'column'}>
              <Formiz connect={form}>
                <form onSubmit={form.submit}>
                  <Stack maxW='600px' w='100%' m='auto' gap={6} direction={'column'} _light={{ color: 'gray.500' }}>
                    <FormizStep name='login'>
                      <Stack alignItems='center' m='auto' pt='5%' pb='15%'>
                        <CaratLogo fontSize='150px' fill='brand.600' />
                      </Stack>
                      <Stack gap={7}>
                        {/* <Stack pb='15%' align='center'>
                          <Text as='kbd' fontSize='2xl' textTransform={'uppercase'} letterSpacing='3px' pb='5%'>
                            Yield
                            <Text as='span' fontWeight={600}>
                              FX
                            </Text>
                          </Text>
                          <Text as='kbd' fontSize='l' textAlign={'center'}>
                            Get instant access to high-yield currencies and deposits.
                          </Text>
                        </Stack> */}

                        <Stack gap={5} alignItems='center'>
                          <FieldPhoneInput
                            name='phone'
                            validations={phoneValidation}
                            required={'Required'}
                            placeholder='Your mobile phone number'
                            zIndex={100}
                            label={'Mobile number'}
                            onValueChange={() => {
                              setHash(false);
                              setError(false);
                            }}
                          />
                          <FieldInput name='password' type='password' fontSize={'10px'} label='Password' required={'Required'} />
                          <VStack w='100%' pb={'15%'}>
                            <Button type='submit' variant='outline' w='100%' bg={'brand.600'} color={'white'}>
                              LOGIN
                            </Button>
                          </VStack>
                          <Flex alignItems={'center'} justifyContent={'center'} gap={4}>
                            <Button color={'brand.600'} as={Link} variant='plain' textDecoration={'underline'} to={'/register'}>
                              Get an account
                            </Button>
                            {/* <Text>|</Text>
                            <Button color={'brand.600'} as={Link} variant='plain' textDecoration='underline' to='/login/qr'>
                              Login Options
                            </Button> */}
                          </Flex>
                        </Stack>
                      </Stack>
                    </FormizStep>
                  </Stack>
                </form>
              </Formiz>
            </Flex>
          </PageContent>
        </Page>
      </Box>
    </>
  );
}
