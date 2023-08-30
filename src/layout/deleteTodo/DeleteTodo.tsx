import React from 'react';
import * as Styled from './DeleteTodo.Styled';
import { useAppDispatch } from 'store';
import { deleteTodoAction } from 'redux/action/todoAction';

const DeleteTodo = () => {
  const dispatch = useAppDispatch();
  const deleteTodoFunc = () => {
    dispatch(deleteTodoAction());
  };

  return <Styled.DeleteTodo onClick={deleteTodoFunc}>Delete</Styled.DeleteTodo>;
};

export default DeleteTodo;
