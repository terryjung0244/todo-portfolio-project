import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';

const { CREATE_TODO } = TODO_ACTIONS_CONST;

export const createTodoAction = (todoInput: TodoType) => {
  return {
    type: CREATE_TODO,
    payload: todoInput,
  };
};
