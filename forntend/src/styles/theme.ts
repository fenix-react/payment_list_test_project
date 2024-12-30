import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    iconSmall: true;
    iconMedium: true;
    iconLarge: true;
  }
}

const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1400,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: [
      'Estedad',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    button: undefined,
    h1: {
      fontSize: '32px',
      fontWeight: 900,
      '@media (max-width:600px)': { fontSize: '28px' },
    },
    h2: {
      fontSize: '28px',
      fontWeight: 900,
      '@media (max-width:600px)': { fontSize: '24px' },
    },
    h3: {
      fontSize: '24px',
      fontWeight: 700,
      '@media (max-width:600px)': { fontSize: '20px' },
    },
    h4: {
      fontSize: '20px',
      fontWeight: 700,
      '@media (max-width:600px)': { fontSize: '18px' },
    },
    h5: {
      fontSize: '18px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      '@media (max-width:600px)': { fontSize: '12px' },
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      '@media (max-width:600px)': { fontSize: '14px' },
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    caption: {
      fontSize: '10px',
      fontWeight: 400,
    },
    overline: {
      fontSize: '10px',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#1E9F9B',
      100: '#B7E3E2',
      200: '#83CECA',
      dark: '#105B57',
      900: '#105B57',
    },
    secondary: {
      main: '#FF6A13',
      100: '#FBEAFA',
      200: '#CC87CA',
      dark: '#7B1D7B',
      900: '#591457',
    },
    info: {
      main: '#00B8D9',
      100: '#CAFDF5',
      200: '#61F3F3',
      dark: '#006C9C',
      900: '#003768',
    },
    success: {
      main: '#22C55E',
      100: '#D3FCD2',
      200: '#77ED8B',
      dark: '#118D57',
      900: '#065E49',
    },
    background: {
      default: '#f6f6f6',
    },
    warning: {
      main: '#f1c21b',
    },
    error: {
      main: '#FF5630',
      100: '#FFE9D5',
      200: '#FFAC82',
      dark: '#B71D18',
      900: '#7A0916',
    },
    text: {
      primary: '#535979',
      secondary: '#807C80',
    },
    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '48px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          '@media (max-width:600px)': { fontWeight: 400 },
          margin: 0,
          marginLeft: '4px',
          marginTop: '4px',
          color: '#525252',
          '&.Mui-error': {
            color: '#FF5630',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(14px, 12px) scale(.9)',
        },
        shrink: {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // paddingRight: '16px',
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#B7E3E2',
          },

          '&.Mui-disabled': {
            color: '#e0e0e0',
            backgroundColor: '#DFE3E8',
            fieldset: {
              border: 'none',
              outline: 'none',
            },
          },
        },
        multiline: {
          height: '110px',
          padding: '0',
          textarea: {
            height: '84px !important',
            padding: '12px !important',
          },
        },

        input: {
          height: '54px',
          padding: '0 14px !important',
          fontSize: '16px',
          fontWeight: 400,
          // '::placeholder': {
          //   color: '#807C80',
          //   fontSize: '14px',
          //   fontWeight: 400,
          // },
        },
        notchedOutline: {
          borderColor: '#DFE3E8',
          borderRadius: '8px',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Estedad',
          fontSize: '16px',
          fontWeight: 700,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        startIcon: {
          margin: 0,
        },
        endIcon: {
          margin: 0,
        },
        root: ({ ownerState }) => ({
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: 'none',
          textDecoration: 'none !important',
          '*': {
            textDecoration: 'none !important',
          },
          '&:hover': {
            boxShadow: 'none',
          },

          ...(ownerState.size === 'small' && {
            height: '32px',
            minWidth: '63px',
            padding: '4px 24px',
          }),
          ...(ownerState.size === 'medium' && {
            height: '36px',
            minWidth: '71px',
            padding: '8px 24px',
          }),
          ...(ownerState.size === 'large' && {
            height: '48px',
            minWidth: '79px',
            padding: '10px 24px',
          }),
          ...(ownerState.size === 'iconSmall' && {
            height: '32px',
            minWidth: '32px',
            width: '32px',
            padding: '2px',
          }),
          ...(ownerState.size === 'iconMedium' && {
            height: '40px',
            minWidth: '40px',
            width: '40px',
            padding: '2px',
          }),
          ...(ownerState.size === 'iconLarge' && {
            height: '48px',
            minWidth: '48px',
            width: '48px',
            padding: '2px',
          }),
          ...(ownerState.variant === 'contained' && {
            backgroundColor: '#1E9F9B',
            color: '#FFFFFF',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#105B57',
              boxShadow: 'none',
            },
            ...(ownerState.color === 'error' && {
              backgroundColor: '#FF5630',
              '&:hover': {
                backgroundColor: '#B71D18',
                boxShadow: 'none',
              },
            }),
          }),
          ...(ownerState.variant === 'outlined' && {
            '&:hover': {
              backgroundColor: '#1E9F9B',
              color: '#fff',
              '*': {
                color: '#fff',
                fill: '#fff',
              },
            },
            ...(ownerState.color === 'error' && {
              '&:hover': {
                backgroundColor: '#FF5630',
                color: '#FF5630',
                '*': {
                  color: '#FF5630',
                  fill: '#FF5630',
                },
              },
            }),
          }),
        }),
        text: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained'
            ? {
                color: '#FFFFFF',
                fontSize: '16px',
              }
            : ownerState.variant === 'outlined' && {
                color: '#1E9F9B',
                fontSize: '16px',
              }),
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          padding: 0,
        },
        input: {
          padding: '0 16px !important',
        },
        inputRoot: {
          padding: 0,
        },

        option: {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          maxHeight: '300px',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          width: 'auto',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 5,
      },
      styleOverrides: {
        root: () => ({
          width: '100%',
          padding: '16px',
          borderRadius: '10px',
        }),
        elevation1: {
          boxShadow:
            '0px 2px 1px -1px #A8A8A833,0px 1px 1px 0px #A8A8A824, 0px 1px 3px 0px #A8A8A81F',
        },
        elevation2: {
          boxShadow:
            '0px 3px 1px -2px #A8A8A833, 0px 2px 2px 0px #A8A8A824, 0px 1px 5px 0px #A8A8A81F',
        },
        elevation3: {
          boxShadow:
            '0px 3px 3px -2px #A8A8A833, 0px 3px 4px 0px #A8A8A824, 0px 1px 8px 0px #A8A8A81F',
        },
        elevation4: {
          boxShadow:
            '0px 2px 4px -1px #C6C6C633, 0px 4px 5px 0px #C6C6C624, 0px 1px 10px 0px #C6C6C61F',
        },
        elevation5: {
          boxShadow: ' -40px 40px 80px -8px #0000003D',
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: '#262626',
          aspectRatio: '1/1',
          '&:focus span:first-of-type': {
            outline: '1.5px solid #00B8D9',
            borderRadius: '100px',
          },
          '&:hover': {
            background: 'none',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          color: 'white',
          backgroundColor: '#393939',
          textAlign: 'center',
          borderRadius: '4px',
          padding: '8px 16px',
        },
        arrow: {
          color: '#393939',
        },
      },
      defaultProps: {
        enterTouchDelay: 0,
      },
    },
  },
});

export default theme;
