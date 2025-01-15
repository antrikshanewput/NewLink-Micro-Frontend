import { Separator, Heading, HStack, Stack, Input } from '@chakra-ui/react';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from '../../components/ui/select';
import { COUNTRIES } from '../../common/country';
import { createListCollection } from '@chakra-ui/react/collection';
import { Flex } from '@chakra-ui/react/flex';
import useProfile from '../../hooks/useProfile';
import { Page, PageContent } from '../../components/Page';

const countries = createListCollection({
  items: COUNTRIES,
});

const ProfilePage: React.FC = () => {
  const { data: userDetails, isLoading } = useProfile();
  if (isLoading) return <p>Loading...</p>;
  return (
    <Page pt={0} mt='-1.25rem' containerSize='md' overflow={'hidden'}>
      <PageContent pt={'40px'}>
        <Flex direction='column'>
          <Stack gap={6}>
            <HStack gap={6}>
              <Heading fontWeight={'700'} size='lg' flex='1'>
                {'Profile Manager'}
              </Heading>
            </HStack>
            <Stack gap={6}>
              <Input name='firstName' placeholder='First Name' defaultValue={userDetails?.first_name || ''} />
              <Input name='lastName' placeholder='Last Name' defaultValue={userDetails?.last_name || ''} />
              <Input name='email' placeholder='Email' defaultValue={userDetails?.email || ''} />
              <SelectRoot
                key={'lg'}
                size={'lg'}
                collection={countries}
                borderRadius='md'
                border='1px solid'
                borderColor='gray.200'
              >
                <SelectTrigger>
                  <SelectValueText placeholder='Select Country' />
                </SelectTrigger>
                <SelectContent>
                  {countries.items.map((country) => (
                    <SelectItem item={country} key={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Stack>
            <Separator />
          </Stack>
        </Flex>
      </PageContent>
    </Page>
  );
};

export default ProfilePage;
