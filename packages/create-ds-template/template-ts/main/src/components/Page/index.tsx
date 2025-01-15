import React, { useContext, useMemo } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';

const PageContext: any = React.createContext(null);

const usePageContext: any = () => {
  const context = useContext(PageContext);
  if (context === null) {
    throw new Error('Missing parent <Page> component');
  }
  return context;
};

const containerSizes: any = {
  sm: '60ch',
  md: '80ch',
  lg: '100ch',
  xl: '140ch',
  full: '100%',
};

const PageContainer: any = ({ children, ...rest }: any) => {
  const { hideContainer, containerSize } = usePageContext();

  if (hideContainer) return <>{children}</>;

  return (
    <Flex direction='column' flex='1' w='full' px='6' mx='auto' maxW={containerSizes[containerSize]} {...rest}>
      {children}
    </Flex>
  );
};

export const PageContent: any = ({ children, ...rest }: any) => {
  const { nav } = usePageContext();
  return (
    <Flex zIndex='1' direction='column' flex='1' py='0' {...rest}>
      <PageContainer h='100%'>
        <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: '4', lg: '8' }} flex='1'>
          {nav && (
            <Flex direction='column' minW='0' w={{ base: 'full', lg: '12rem' }}>
              {nav}
            </Flex>
          )}
          <Flex direction='column' flex='1' minW='0'>
            {children}
          </Flex>
        </Stack>
      </PageContainer>
      <Box w='full' h='0' pb='safe-bottom' />
    </Flex>
  );
};

export const Page: any = ({ hideContainer = false, containerSize = 'md', nav = null, ...rest }) => {
  const value = useMemo(
    () => ({
      nav,
      hideContainer,
      containerSize,
    }),
    [containerSize, hideContainer, nav]
  );

  return (
    <PageContext.Provider value={value}>
      <Flex direction='column' flex='1' position='relative' {...rest} />
    </PageContext.Provider>
  );
};
