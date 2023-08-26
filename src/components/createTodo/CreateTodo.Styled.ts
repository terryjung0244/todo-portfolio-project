import { borderRadius, colors } from 'GlobalStyle';
import styled from 'styled-components';

export const CreateTodo = styled.div`
  width: 100%;

  .input-and-button-background {
    background-color: ${colors.background};
    padding: 5px;
  }

  .input-and-button-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
    /* border-radius: ${borderRadius.primary}; */
    padding: 5px 5px 5px 5px;
  }

  .createTodo-input {
    width: 70%;
    height: 40px;
    text-align: center;
    margin-bottom: 5px;
    border: 2px solid lightgray;
    border-radius: ${borderRadius.primary};
  }

  .createTodo-button {
    width: 80px;
    height: 40px;
    border: 2px solid lightgray;
    border-radius: ${borderRadius.primary};
    background-color: ${colors.background};
    color: ${colors.font};
  }
`;
