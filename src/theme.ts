import { createTheme } from '@mui/material/styles';
import { indigo, lightGreen } from '@mui/material/colors';

export default createTheme({
  palette: {
    primary: {
      main: lightGreen[500]
    },
    secondary: {
      main: indigo[500]
    }
  }
});
