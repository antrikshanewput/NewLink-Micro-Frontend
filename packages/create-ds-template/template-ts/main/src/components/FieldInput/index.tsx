import React, { useEffect, useState } from 'react';
import { Field, Input } from '@chakra-ui/react';
import { useField } from '@formiz/core';

import { FormGroup } from '@/components/FormGroup';

// FieldInput component
export const FieldInput = (props: any) => {
  const { errorMessage, id, isValid, isPristine, isSubmitted, resetKey, setValue, value, otherProps } = useField(props);

  const { children, label, type, placeholder, helper, size = 'md', autoFocus, ...rest } = otherProps;

  const { required, righticon } = props;

  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted);

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

  return (
    <FormGroup {...formGroupProps}>
      <Input
        type={showPassword ? 'text' : type || 'text'}
        id={id}
        autoComplete='off'
        value={value ?? ''}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsTouched(false)}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder || ''}
        autoFocus={autoFocus}
        borderColor={'black'}
        _dark={{
          color: 'gray.600',
          _placeholder: {
            color: 'gray.600',
            fontStyle: 'italic',
            fontSize: '14px',
            fontWeight: '500',
          },
        }}
      />
      {children}
    </FormGroup>
  );
};
