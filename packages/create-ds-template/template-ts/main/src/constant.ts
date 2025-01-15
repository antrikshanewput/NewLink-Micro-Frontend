export const ACCOUNT_KEY = '@yieldfx';
export const SIGN_KEY = '@yieldfx/_skey';
export const SIGN_HASH = '@yieldfx/_shash';
export const PHONE_NUMBER = '@yieldfx/_phone';
export const PHONE_HASH = '@yieldfx/_phone_hash';
export const ACCOUNT_ID = '@yieldfx/_account_Id';
export const IP_DATA = '@yieldfx/_ip_data';
export const BALANCE = '@yieldfx/_balance';
export const APP_NAME = 'YIELDFX';
export const PRIVATE_KEY = 'k_';
export const LOGIN_HASH = 'h_';
export const AES_KEY = 's_';
export const IP = 'ip';
export const MIN_AMOUNT = 0.01;

export const ERROR_CODE = {
  SUCCESS: 1001,
  EXPIRED: 1002,
};

export const NAVIGATION_RES_TYPE = {
  FACE_AUTH_SUCCESS: 'kyc-success',
};

export const KYC_STATUS = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
};

export const ACCOUNT_CREATE_STATUS = {
  PASS: 'PASS',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  FAILED: 'FAILED',
  SMS_SEND: 'SMS_SEND',
};

export const IDVERSE_STATUS = {
  PASS: 'PASS',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  FAILED: 'FAILED',
};

export const DEVICE_TYPE = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
  TAB: 'tablet',
};

export const ORDER_STATUS = {
  CANCELLED: 'CANCELLED',
  PARTIAL_DELIVERED: 'PARTIAL DELIVERED',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  DELIVERED: 'DELIVERED',
  CONFIRMED: 'CONFIRMED',
  PARTIAL: 'PARTIAL',
};

export const ORDER_STATUS_NAME = {
  CANCELLED: 'CANCELLED',
  PARTIAL_DELIVERED: 'PARTIAL DELIVERED',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  DELIVERED: 'COMPLETED',
  CONFIRMED: 'CONFIRMED',
  PARTIAL: 'PARTIAL',
};

export const EXCLUDED_COUNTRY = [
  'cu', // Cuba
  'ru', // Russia
  'by', // Belarus
  'cf', // Central African Republic
  'ir', // Iran
  'ly', // Libya
  'ml', // Mali
  'kp', // North Korea
  'so', // Somalia
  'ss', // South Sudan
  've', // Venezuela
  'ye', // Yemen
  'mm', // Myanmar
];

export const CURRENCY_TO_CURRENCY_ID_MAPPING = {
  USD: 1,
  IDR: 2,
  GBP: 3,
  EURO: 4,
  AUD: 5,
  JPY: 6,
  CHF: 7,
  CNY: 8,
  INR: 9,
  BRL: 10,
  TRY: 18,
};

export const CURRENCY_ID_TO_CURRENCY_MAPPING = {
  1: 'USD',
  2: 'IDR',
  3: 'GBP',
  4: 'EURO',
  5: 'AUD',
  6: 'HUF',
  7: 'CHF',
  8: 'CNY',
  9: 'INR',
  10: 'BRL',
  18: 'TRY',
};

export const TRANSFER_TYPE = {
  REDEMPTION: 'Redemption',
  PURCHASE: 'Purchase',
  SWAP: 'Swap',
  TRANSFER: 'Transfer',
  BANK_TRANSACTION: 'BANK_TRANSACTION',
};
