import merge from 'lodash/merge';
import { createTheme, styled } from '@mui/material';
import ManropeBold from "./assets/Manrope/static/Manrope-Bold.ttf";
import ManropeExtraBold from "./assets/Manrope/static/Manrope-ExtraBold.ttf";
import InterRegular from "./assets/Inter/static/Inter-Regular.ttf";
import InterSemiBold from "./assets/Inter/static/Inter-SemiBold.ttf";

export default createTheme(
  merge({}, {
  typography: {
    fontFamily: '"Inter", serif',
  },
  palette: {
    primary: {
      main: '#1f4668',
      light: '#fff',
      contrastText: '#fff',
      otherContrastText: '#000',
    },
    secondary: {
      main: '#1f4668',
    },
    inverted: {
      main: '#fafafa',
      light: '#1f4668',
      contrastText: '#1f4668',
      otherContrastText: '#000',
    },
    highlight: {
      main: '#1f4668',
      light: '#fff',
      contrastText: '#fff',
      otherContrastText: '#000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ManropeExtraBold';
          font-weight: 900;
          src: local('Manrope'), local('Manrope-ExtraBold'), url("${ManropeExtraBold}") format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'ManropeBold';
          font-weight: 800;
          src: local('Manrope'), local('Manrope-ExtraBold'), url("${ManropeBold}") format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Inter';
          font-weight: 400;
          src: local("Inter"), local("Inter-Regular"), url("${InterRegular}") format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Inter';
          font-weight: 500;
          src: local("Inter"), local("Inter-Regular"), url("${InterSemiBold}") format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          my: 2,
          fontSize: "17px",
          marginTop: "10px",
          marginBottom: "10px",
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "2px 1px 0px 1px #1f4668",
          borderRadius: "0.9375rem !important",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "highlight.main",
        },
      }
    },
    MuiCardActions: {
      styleOverrides: {
        spacing: {
          margin: "0 1em 2em 1em ",
          padding: 0,
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px 0 4px 0",
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
          fontWeight: "400",
        },
        contained: {
          boxShadow: "none",
        },
        outlined: {
          border: "2px solid",
          '&:hover': {
            borderWidth: "2px",
          },
        },
      }
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          marginBottom: "1em",
          marginTop: "1em",
        },
      }
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          marginLeft: "1em",
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#1F4668",
        },
      }
    }
  },
}));

export const Head1 = styled("h1")(({ theme }) => ({
  fontFamily: "'ManropeExtraBold'",
  fontSize: "40px",
  lineHeight: "1.1em",
  letterSpacing: "-0.05em",
  [theme.breakpoints.up('md')]: {
    fontSize: "60px",
  },
  margin: "0",
}));

export const Head2 = styled("h2")(({ theme }) => ({
  fontFamily: "'ManropeExtraBold'",
  fontSize: "20px",
  lineHeight: "1.1em",
  letterSpacing: "-0.05em",
  [theme.breakpoints.up('md')]: {
    fontSize: "30px",
  },
  margin: 0,
}));


declare module '@mui/material/styles' {
  interface PaletteOptions {
    highlight?: {
      main?: string;
      light?: string;
      contrastText?: string;
      otherContrastText?: string;
    },
    inverted?: {
      main?: string;
      light?: string;
      contrastText?: string;
      otherContrastText?: string;
    };
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    highlight: true;
    inverted: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    highlight: true;
    inverted: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    highlight: true;
    inverted: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    highlight: true;
    inverted: true;
  }
}

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    highlight: true;
    inverted: true;
  }
}
