import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

export const checkboxTheme = defineStyleConfig({
  baseStyle: {
    container: defineStyle({
      display: 'flex',
      alignItems: 'flex-start',
    }),
    control: defineStyle({
      marginTop: 1,
    }),
  },

  variants: {
    '@primary': () => {
      return { colorScheme: 'brand' };
    },
    '@secondary': () => {
      return { colorScheme: 'brand' };
    },
  },
});
