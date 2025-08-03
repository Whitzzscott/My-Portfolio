const getIsDarkMode = () =>
  document.documentElement.classList.contains('theme-dark');

export const componentOverrides = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: '4px',
        backgroundColor: '#add8e6',
        color: getIsDarkMode() ? '#fff' : '#000',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderColor: '#add8e6',
        minWidth: 'auto',
        padding: '6px 12px',
        '&:hover': {
          backgroundColor: 'rgba(173, 216, 230, 0.1)',
        },
      },
      sizeSmall: {
        padding: '4px 8px',
        fontSize: '0.875rem',
      },
    },
  },
 
};
