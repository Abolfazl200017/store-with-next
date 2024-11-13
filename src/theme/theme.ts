// src/theme/theme.ts
import { Components, createTheme, CssVarsTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
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

const themePalette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
  },
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