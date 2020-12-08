import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './CommonStyle';
import media from './Media';
const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: 'Arial',
      primaryColor: '#666',
      mainColor: 'red',
      ...media,
      ...theme,
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
