import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';
import {
  CreateTodoReturnType,
  SendSingleIdActionReturnType,
  UpdateTodoReturnType,
} from './todoAction.interface';

const { CREATE_TODO, SEND_SINGLE_TODO_ID, UPDATE_TODO } = TODO_ACTIONS_CONST;

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

export const updateTodoAction = (
  updateInput: TodoType,
): UpdateTodoReturnType => {
  return {
    type: UPDATE_TODO,
    payload: updateInput,
  };
};
