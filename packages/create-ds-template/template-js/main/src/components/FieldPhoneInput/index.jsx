import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useField } from '@formiz/core';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { FormGroup } from '../../components/FormGroup';
import { EXCLUDED_COUNTRY, IP_DATA } from '../../constant';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React from 'react';

const StyleInput = styled(ReactPhoneInput)((props) => ({
  'input:disabled': {
    opacity: '0.4',
  },
  input: {
    color: 'white',
  },
  'input:focus': {
    border: '2px solid',
    borderColor: '#703DBA',
  },
  '.country-list': {
    textAlign: 'left',
  },
  '.country-list .country': {
    color: '#6b6b6b',
  },
  '.search-box': {
    color: '#6b6b6b',
  },
  '.invalid-number-message': {
    fontSize: '15px',
    background: 'bottom!important',
    left: ' 0 !important',
    top: '44px!important',
  },
}));

export const FieldPhoneInput = (props) => {
  const { errorMessage, id, isValid, isPristine, isSubmitted, resetKey, setValue, value, otherProps } = useField(props);
  const { children, label, type, placeholder, helper, size = 'md', autoFocus, setError, onClick, ...rest } = otherProps;

  const { required } = props;
  const [ipData] = useLocalStorage(IP_DATA);
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted) && true;

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    label,
    showError,
    ...rest,
  };

  const defaultValue = ipData?.code || 'in';

  return (
    <FormGroup {...formGroupProps}>
      <StyleInput
        inputProps={{
          name: 'phone',
          label: 'test',
          autoComplete: 'off',
        }}
        value={value ?? ''}
        autoFormat={true}
        onChange={(phone) => setValue('+' + phone)}
        onClick={() => (onClick ? onClick() : null)}
        onFocus={() => setIsTouched(false)}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder ? String(placeholder) : ''}
        preferredCountries={['us', 'ca', 'gb', 'in']}
        excludeCountries={EXCLUDED_COUNTRY}
        country={defaultValue?.toLowerCase()}
        masks={{ in: '..... .....' }}
        prefix={'+'}
        enableSearch
        inputStyle={{
          width: '100%',
          height: '40px',
          borderRadius: '3px',
          borderColor: '#20385F',
          color: '#21385e',
          ...props.inputStyle,
        }}
        searchStyle={{
          color: 'gray.600',
          background: 'white',
          borderColor: '#333333',
          ...props.searchStyle,
        }}
        buttonStyle={{
          border: 'none',
          borderRight: '1px solid #cacaca',
          margin: '2px',
        }}
      />
      {children}
    </FormGroup>
  );
};
