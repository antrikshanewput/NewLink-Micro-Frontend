import { defineStyleConfig } from '@chakra-ui/react';
import { getColor } from '@chakra-ui/theme-tools';

export const inputTheme = defineStyleConfig({
  variants: {
    outline: (props) => {
      return {
        field: {
          bg: 'blackAlpha.50',
          borderColor: 'blackAlpha.100',
          _focusVisible: {
            borderColor: props.focusBorderColor ?? 'brand.500',
            boxShadow: `0 0 0 1px ${getColor(
              props.theme,
              props.focusBorderColor ?? 'brand.500'
            )}`,
          },
          '::-webkit-calendar-picker-indicator': {
            display: 'none',
            opacity: 0,
          },
          _dark: {
            bg: 'whiteAlpha.50',
            borderColor: 'whiteAlpha.700',
            _focusVisible: {
              borderColor: props.focusBorderColor ?? 'brand.300',
              boxShadow: `0 0 0 1px ${getColor(
                props.theme,
                props.focusBorderColor ?? 'brand.300'
              )}`,
            },
          },
        },
      };
    },
  },
});
