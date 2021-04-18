import React from 'react';
import renderer from 'react-test-renderer';
import theme from '@theme/theme';
import { ThemeProvider } from 'styled-components/native';

export const renderWithTheme = (component: React.ReactNode) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
