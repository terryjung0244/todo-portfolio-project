import React from 'react';
import * as Styled from './ShowTodo.Styled';
import TodoTable from 'components/todoTable/TodoTable';
import { useAppSelector } from 'service/store';

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);
  return (
    <Styled.ShowTodo>{todoList.length > 0 && <TodoTable />}</Styled.ShowTodo>
  );
};

export default ShowTodo;
