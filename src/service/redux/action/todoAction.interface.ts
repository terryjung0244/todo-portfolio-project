import { AnyAction } from '@reduxjs/toolkit';
import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';

const { CREATE_TODO } = TODO_ACTIONS_CONST;

export interface CreateTodoReturnType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export type TodoActionsType = CreateTodoReturnType | AnyAction;
