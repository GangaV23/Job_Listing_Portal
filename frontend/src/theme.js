import { createTheme } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], // Use purple as the primary color
      text:grey[300],
    },
    secondary: {
      main: grey[800], // Use gray as the secondary color
      deepPurple: purple[700], // Use a deeper shade of purple
    },
  },
});
