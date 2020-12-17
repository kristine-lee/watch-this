import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

// colors
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// border
const borderWidth = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8f5e9",
      dark: "#b6c2b7"
    },
    secondary: {
      main: "#e0f7fa",
      dark: "#aec4c7"
    },
    common: {
      black,
      darkBlack,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: "#FBFAF5",
      // other: "#f5f5f5"
    },
    spacing
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica Neue",
      "sans-serif",
      "-apple-system",
      "Segoe UI"
    ],
    caption: {
      color: `#b6c2b7`,
      textDecoration: 'none',
      align: 'center',
      fontSize: '35%'
    }
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: "static"
      }
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing
        }
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth
      }
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`
      }
    },
    MuiButton: {
      containedPrimary: {
        color: 'white',
        backgroundColor: 'black',
        size: 'large',
        fullWidth: 'true',
        paddingLeft: `${spacing * 3}px`,
        paddingRight: `${spacing * 3}px`,
        '&:hover': {
          'cursor': 'pointer',
          color: 'black',
          backgroundColor: 'slateGray'
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);
