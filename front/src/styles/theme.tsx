import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#__next": {
          height: '100vh',
        },
      },
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
  palette: {
   primary: {
    main: '#C8E4B2',
   },
   secondary: {
    main: '#7EAA92',
   },
  },
});
