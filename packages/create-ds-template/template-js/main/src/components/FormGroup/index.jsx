import React from 'react';
import { Fieldset } from '@chakra-ui/react';

export const FormGroup = ({ children, errorMessage, helper, id, isRequired, label, showError, ...props }) => (
  <Fieldset.Root invalid={showError} _required={isRequired} {...props}>
    {label && (
      <Fieldset.Legend textAlign={'left'} htmlFor={id} fontSize='sm'>
        {label}
      </Fieldset.Legend>
    )}
    <Fieldset.Content>{children}</Fieldset.Content>
    {helper && <Fieldset.HelperText>{helper}</Fieldset.HelperText>}
  </Fieldset.Root>
);
