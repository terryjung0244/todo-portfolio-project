import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';
import {
  CreateTodoReturnType,
  SendSingleIdActionReturnType,
  UpdateTodoReturnType,
  DeleteTodoReturnType,
  SendAllIdActionReturnType,
} from './todoAction.interface';

const {
  CREATE_TODO,
  SEND_SINGLE_TODO_ID,
  SEND_ALL_TODO_ID,
  UPDATE_TODO,
  DELETE_TODO,
} = TODO_ACTIONS_CONST;

export const createTodoAction = (todoInput: TodoType): CreateTodoReturnType => {
  return {
    type: CREATE_TODO,
    payload: todoInput,
  };
};

export const sendSingleIdAction = (
  id: string,
): SendSingleIdActionReturnType => {
  return {
    type: SEND_SINGLE_TODO_ID,
    payload: id,
  };
};

export const sendAllIdAction = (
  checked: boolean,
): SendAllIdActionReturnType => {
  return {
    type: SEND_ALL_TODO_ID,
    payload: checked,
  };
};

export const updateTodoAction = (
  updateInput: TodoType,
): UpdateTodoReturnType => {
  return {
    type: UPDATE_TODO,
    payload: updateInput,
  };
};

export const deleteTodoAction = (): DeleteTodoReturnType => {
  return {
    type: DELETE_TODO,
    payload: null,
  };
};
