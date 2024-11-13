import { Components, createTheme, CssVarsTheme, PaletteOptions, responsiveFontSizes, Theme } from '@mui/material/styles';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({ subsets: ['arabic'] });

const themeComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
      },
    },
  },
};

const themePalette: PaletteOptions = {
  primary: {
    main: '#B88E2F',
    light: '#B88E2F',
    dark: '#1565c0',
  },
  secondary: {
    main: '#FFF3E3',
    light: '#FFF3E3',
    dark: '#7b1fa2',
  },
  mode: 'light',
  background: {
    default: '#ffffff'
  }
};

let theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  palette: themePalette,
  components: themeComponents as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>,
});

theme = responsiveFontSizes(theme);

export { theme };