import { AnyAction } from '@reduxjs/toolkit';
import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';

const { CREATE_TODO, SEND_SINGLE_TODO_ID, UPDATE_TODO } = TODO_ACTIONS_CONST;

export interface CreateTodoReturnType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface SendSingleIdActionReturnType {
  type: typeof SEND_SINGLE_TODO_ID;
  payload: string;
}

export interface UpdateTodoReturnType {
  type: typeof UPDATE_TODO;
  payload: TodoType;
}

export type TodoActionsType =
  | CreateTodoReturnType
  | SendSingleIdActionReturnType
  | AnyAction;
