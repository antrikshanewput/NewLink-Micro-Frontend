import { isMaxLength, isMinLength } from '@formiz/validations';
import parsePhoneNumber from 'libphonenumber-js';

import { EXCLUDED_COUNTRY } from '@/constant';

export const phoneValidation = [
  {
    handler: (val) => {
      const phoneNumber = parsePhoneNumber(val);
      return !(phoneNumber?.country && EXCLUDED_COUNTRY.includes(phoneNumber?.country?.toLowerCase()));
    },
    message: 'Country is not allowed.',
  },
  {
    handler: (val) => {
      if (val && !val.includes('+')) {
        val = `+${val}`;
      }
      const phoneNumber = parsePhoneNumber(val);
      if (phoneNumber) {
        return phoneNumber.isPossible();
      }
      return false;
    },
    message: 'Invalid Number',
  },
];

export const pinValidation = [
  {
    handler: isMinLength(4),
    message: 'Minimum PIN length is 4',
  },
  {
    handler: isMaxLength(15),
    message: 'Maximum PIN length is 15',
  },
];
