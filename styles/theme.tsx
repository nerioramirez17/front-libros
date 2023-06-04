import { createTheme } from '@mui/material/styles';

// Define los colores personalizados
const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
};

// Define el tema
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  
});
