import { ACCOUNT_KEY, PHONE_NUMBER } from '@/constant';

export const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const setLocalStorage = (key, val) => {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(val));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllKeys = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
};

export const isKeyExist = (val) => {
  const keys = getAllKeys();
  return keys.includes(val);
};

export const getAccountKey = (number) => {
  let lsPhone = getLocalStorage(PHONE_NUMBER);
  lsPhone = lsPhone?.replace('+', '')?.trim();
  const phone = number?.replace('+', '')?.trim() || lsPhone;
  return `${ACCOUNT_KEY}/_${phone}`;
};
