import { colors } from 'GlobalStyle';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  z-index: 1;
  /* background: linear-gradient(to left, #7c96ab 30%, #f5f0bb); */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.font};

  .main-text {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
`;
