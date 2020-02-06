import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const ReplateTheme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(17, 17, 33, 1)",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#F6FAFD"
    },
    primary: {
      main: "rgba(255, 151, 76, 1)"
    },
    secondary: {
      main: "rgba(1, 74, 115, 1)"
    },
    error: {
      main: "rgba(214, 55, 55, 1)"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(55, 55, 67, 1)",
      disabled: "rgba(166, 166, 166, 1)",
      hint: "rgba(55, 55, 67, 1)"
    }
  },
  typography: {
    h1: {
      fontFamily: [
        "Baloo Bhai",
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '36px',
      fontWeight: 'normal',
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '48px'
      }
    },
    h2: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '30px',
      fontWeight: '600',
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '30px'
      }
    },
    h3: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '24px',
      fontWeight: '600'
    },
    h4: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '32px',
      fontWeight: '500',
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '60px'
      }
    },
    h5: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '32px',
      fontWeight: '500',
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '48px'
      }
    },
    h6: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '32px',
      fontWeight: '500',
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '60px'
      }
    },
    subtitle1: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '21px',
      fontWeight: '600'
    },
    subtitle2: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ]
    },
    body1: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '16px',
      fontWeight: '500'
     
    },
    body2: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '18px',
      fontWeight: '500'
    },
    button: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ],
      fontSize: '18px',
      fontWeight: '600',
      textTransform: "none"
    },
    caption: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ]
    },
    overline: {
      fontFamily: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFormat",
        "Segoe UI",
        "Roboto",
        "Ubuntu"
      ]
    }
  }
});

export default ReplateTheme;
