import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorCode }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          {errorCode || 404}
        </Heading>
        <Text fontSize="lg">
          Oops! Something went wrong. Please try again later.
        </Text>
        <Button colorScheme="teal" onClick={handleGoHome}>
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
