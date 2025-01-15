const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

function getBg(props) {
  const { theme, colorScheme: c } = props;
  const light = getColor(theme, `${c}.100`, c);
  const dark = transparentize(`${c}.200`, 0.16)(theme);
  return { light, dark };
}

const variantSubtle = definePartsStyle((props) => {
  const { colorScheme } = props;
  const bg = getBg(props);

  return {
    container: {
      bg: bg.light,
      color: `${colorScheme}.800`,
      _dark: {
        bg: bg.dark,
        color: `${colorScheme}.200`,
      },
    },
    icon: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`,
      },
    },
    spinner: {
      color: `${colorScheme}.500`,
      _dark: {
        color: `${colorScheme}.200`,
      },
    },
  };
});

export const alertTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      py: 2,
      borderRadius: 'md',
      fontSize: 'sm',
      flexWrap: 'wrap',
    },
    title: {
      lineHeight: 6,
      marginEnd: 2,
    },
    description: {
      lineHeight: 5,
    },
    icon: {
      marginEnd: 2,
    },
    spinner: {
      marginEnd: 2,
    },
  },
  variants: {
    subtle: variantSubtle,
    'left-accent': variantLeftAccent,
    'top-accent': variantTopAccent,
    solid: variantSolid,
  },
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'blue',
  },
}); 