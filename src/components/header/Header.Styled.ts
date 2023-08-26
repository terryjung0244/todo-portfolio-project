import { colors } from 'GlobalStyle';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  /* background: linear-gradient(to left, #7c96ab 30%, #f5f0bb); */
  background: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.font};

  .main-text {
    font-size: 2rem;
  }
`;
