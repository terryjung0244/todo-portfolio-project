import React from 'react';
import * as Styled from './ShowTodo.Styled';
import TodoTable from 'layout/todoTable/TodoTable';
import { useAppSelector } from 'store';

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  if (!todoList.length) return <Styled.ShowTodo>Please </Styled.ShowTodo>;

  return (
    <Styled.ShowTodo>
      <TodoTable />
    </Styled.ShowTodo>
  );
};

export default ShowTodo;
