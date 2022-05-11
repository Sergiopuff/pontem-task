import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import customPalette from "./palette";
import customColors from "./colors";
import customTypography from "./typography";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 688,
      lg: 1200,
      xl: 1536,
    },
  },
  colors: customColors,
  palette: customPalette,
  typography: customTypography,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: 8,
          borderRadius: "4px",
          fontSize: 13,
          background: customPalette.background.block,
          color: customPalette.secondary.main,
        },
        input: {
          color: customPalette.secondary.main,
          opacity: 0.6,
          "&::placeholder": {
            fontSize: 13,
            color: customPalette.secondary.main,
            opacity: 0.6,
          },
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { color: "secondary" },
          style: {
            opacity: 0.6,
          },
        },
        {
          props: { color: "success" },
          style: {
            color: customPalette.text.white,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 100,
          border: 0,
          padding: "0 20px",
          backgroundColor: customPalette.background.block,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.44px",
            textDecoration: "uppercase",
            color: customPalette.secondary.main,
            opacity: 0.6,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            fontSize: 13,
            textTransform: "capitalize",
            borderRadius: "4px",
            minWidth: 135.5,
          },
        },
        {
          props: { variant: "contained" },
          style: {
            fontSize: 13,
            textTransform: "none",
            borderRadius: "4px",
            minWidth: 135.5,
          },
        },
      ],
    },
  },
});

const PontemBlocksUI = responsiveFontSizes(theme);

export default PontemBlocksUI;
