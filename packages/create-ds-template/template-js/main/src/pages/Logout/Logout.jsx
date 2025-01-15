import React, { useEffect } from 'react';

import { Center, Spinner } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';

export default function Logout() {
  const { updateToken } = useAuthContext();
  const navigate = useNavigate();
  const queryCache = useQueryClient();

  useEffect(() => {
    updateToken(null);
    queryCache.clear();
    navigate('/login');
  }, [updateToken, queryCache, navigate]);

  return (
    <Center flex='1'>
      <Spinner />
    </Center>
  );
}
