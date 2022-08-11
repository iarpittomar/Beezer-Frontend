import { mode, darken, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      py: '1.5rem',
      px: '1.5rem',
      fontSize: '1.2rem',
    },
    md: {
      py: '2rem',
      px: '2rem',
      fontSize: '1.4rem',
    },
    lg: {
      py: '2.5rem',
      px: '2.5rem',
      fontSize: '1.6rem',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: 'primary.500',
      color: 'white',
      boxShadow: 'md',
      _hover: (props) => ({
        bg: mode(darken('primary.500', 2), whiten('primary.500', 2))(props),
        boxShadow: 'md',
      }),
    },
    secondary: {
      bg: 'secondary.500',
      color: 'white',
      boxShadow: 'md',
      outline: 'none',
      _hover: (props) => ({
        bg: mode(
          darken('secondary.500', 10),
          whiten('secondary.500', 10)
        )(props),
        boxShadow: 'md',
      }),
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
};
