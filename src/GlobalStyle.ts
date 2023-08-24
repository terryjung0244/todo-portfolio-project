import { createGlobalStyle } from 'styled-components';

export const globalMaxWidth = '1024px';

export const globalPadding = {
  mobile: '15px',
  web: '25px',
};

export const colors = {
  primary: '#1D7874',
};

export const responsiveSize = {
  sm: '600px',
  md: '900px',
  lg: '1024px',
};

export const getResponsiveMediaQuery = (selectedSize: string): string => {
  switch (selectedSize) {
    case 'sm':
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      return `@media screen and (min-width: ${responsiveSize.sm}) and 
      (max-width: ${responsiveSize.md})`; // between sm and md;
    case 'lg':
      return `@media screen and (min-width: ${responsiveSize.lg})`;
    default:
      return '';
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    height: 100vh;
    
  }

  :root {
    font-size: 20px;
  }
`;
