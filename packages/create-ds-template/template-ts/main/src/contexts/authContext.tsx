import React, { useCallback, useContext, useMemo, useState } from 'react';

export const AUTH_TOKEN_KEY = 'authToken';

const AuthContext = React.createContext(null);

const updateToken = (newToken: any) => {
  if (!newToken) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  } else {
    localStorage.setItem(AUTH_TOKEN_KEY, newToken);
  }
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Missing parent <AuthProvider> component');
  }
  const { isAuthenticated, updateToken, phone, updatePhone } = context;

  return {
    isAuthenticated,
    phone,
    updateToken,
    updatePhone,
  };
};

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem(AUTH_TOKEN_KEY) || '');
  const [phone, setPhone] = useState('');

  const handleUpdateToken = useCallback(
    (newToken: any) => {
      setToken(newToken);
      updateToken(newToken);
    },
    [setToken]
  );

  const handleUpdatePhone = useCallback(
    (phone: any) => {
      setPhone(phone);
    },
    [setPhone]
  );

  const value = useMemo(
    () => ({
      isAuthenticated: !!token,
      phone: phone,
      updatePhone: handleUpdatePhone,
      updateToken: handleUpdateToken,
    }),
    [handleUpdateToken, handleUpdatePhone, token, phone]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
