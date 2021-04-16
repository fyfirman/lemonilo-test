const theme = {
  palette: {
    primary: {
      dark: '#1395D8',
      main: '#19A0E0',
      light: '#2FC6F7',
    },
    background: {
      grey: '#F5F9F8',
      lightGrey: '#FDFFFC',
    },
    alert: '#F53E29',
    text: {
      primary: 'rgba(0,0,0,0.8)',
      secondary: 'rgba(0,0,0,0.5)',
    },
  },
  spacing: (number: number) => number * 8,
  borderRadius: {
    small: 4,
    regular: 8,
    round: 1000,
  },
};

export type MyTheme = typeof theme;

export default theme;
