import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
import theme from '@chakra-ui/theme';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const themeColors = {
  primary: {
    50: '#e9e9fc',
    100: '#bebcf6',
    200: '#938fef',
    300: '#6863e9',
    400: '#3d36e3',
    500: '#261ed5',
    600: '#1c169c',
    700: '#141070',
    800: '#0c0943',
  },
  secondary: {
    50: '#f1bcb3',
    100: '#eeaea4',
    200: '#eba195',
    300: '#e99385',
    400: '#e68676',
    500: '#e37867',
    600: '#cc6c5d',
    700: '#b66052',
    800: '#9f5448',
  },
  tertiory: {
    50: '#a2cbcc',
    100: '#8fc0c2',
    200: '#7cb6b8',
    300: '#69abad',
    400: '#57a1a3',
    500: '#449699',
    600: '#3d878a',
    700: '#36787a',
    800: '#30696b',
  },
};

const customTheme = extendTheme({
  config: config,
  colors: {
    ...themeColors,
    accents: {
      green: '#3DBE18',
      greenLight: '#E9F8E5',
      red: '#E93435',
      redLight: '#F9E7E7',
      yellow: '#F1AC22',
    },
    transparent: 'transparent',
  },
  styles: {},

  fontSizes: {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    '2xl': '2rem',
    '3xl': '2.2rem',
    '4xl': '2.6rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    ...theme.fontWeights,
  },
  fonts: {
    ...theme.fonts,
    heading: 'Inter',
    body: 'Inter',
  },
  letterSpacings: {
    ...theme.letterSpacings,
  },
  lineHeights: {
    ...theme.lineHeights,
  },
  radii: {
    ...theme.radii,
    small: '0.2rem',
    medium: '0.3rem',
    default: '0.4rem',
    circle: '50%',
  },
  shadows: {
    ...theme.shadows,
  },
  sizes: {
    ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  space: {
    ...theme.space,
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.4rem',
    xlarge: '1.8rem',
    xxlarge: '2.4rem',
  },
  zIndices: {
    ...theme.zIndices,
  },
  transition: {
    default: '300ms',
  },
  components: {
    Button,
  },
});

export default customTheme;
