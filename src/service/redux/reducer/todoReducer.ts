import { Reducer } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { TodoReducerStateType } from './todoReducer.interface';
import { TodoActionsType } from '../action/todoAction.interface';
import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';

const { CREATE_TODO } = TODO_ACTIONS_CONST;

const initialState: TodoReducerStateType = {
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerStateType, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerStateType => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push(action.payload);
        break;

      default:
        return state;
    }
  });
};
