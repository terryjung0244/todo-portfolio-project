import styled from 'styled-components';

export const TodoTable = styled.div`
  th {
    border-bottom: 2px solid lightgray;
    font-size: 1.5rem;
    color: gray;
    height: 40px;
  }
  .table-main-container {
    width: 100%;
    border-collapse: collapse;
    background-color: whitesmoke;
  }
  .checkbox-container {
    border: 1px solid red;
    min-width: 20px;
  }
  .todo-container {
    border: 1px solid red;
    min-width: 150px;
  }
  .update-container {
    border: 1px solid red;
    min-width: 20px;
  }
  .delete-container {
    border: 1px solid red;
    min-width: 20px;
  }
`;
