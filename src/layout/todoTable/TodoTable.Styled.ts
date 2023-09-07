import styled from 'styled-components';

export const TodoTable = styled.div`
  th {
    border-bottom: 2px solid gray;
    font-size: 2rem;
    color: gray;
    height: 40px;
  }
  .table-main-container {
    /* width: 100%; */
    border-collapse: collapse;
    background-color: whitesmoke;
  }
  .checkbox-container {
    border: 1px solid red;
    min-width: 50px;
    max-width: 50px;
    /* width: 5%; */
  }
  .todo-container {
    border: 1px solid red;
    width: 100%;
    /* min-width: 200px; */
    /* width: 100%; */
    /* width: 75%; */
  }
  .update-container {
    border: 1px solid red;
    min-width: 120px;
    max-width: 120px;
    /* width: 10%; */
  }
  .delete-container {
    border: 1px solid red;
    /* width: 120px; */
    min-width: 120px;
    max-width: 120px;

    /* width: 10%; */
  }
`;
