import { getResponsiveMediaQuery, globalMaxWidth } from '../GlobalStyle';
import styled from 'styled-components';

export const App = styled.div`
  border: 1px solid blue;
  max-width: ${globalMaxWidth};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .body-grid-divider {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${getResponsiveMediaQuery('md')} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${getResponsiveMediaQuery('sm')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
