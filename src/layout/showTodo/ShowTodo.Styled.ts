import { colors } from 'GlobalStyle';
import styled from 'styled-components';

export const ShowTodo = styled.div`
  border: 1px solid green;
  width: 100%;
  min-height: 100px;
  font-size: 1rem;
  padding: 5px;
  background-color: ${colors.background};

  .todo-map {
    display: flex;
    justify-content: space-around;
  }
`;
