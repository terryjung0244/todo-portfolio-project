import { Reducer } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { TodoReducerStateType } from './todoReducer.interface';
import { TodoActionsType } from '../action/todoAction.interface';
import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';

const { CREATE_TODO, SEND_SINGLE_TODO_ID, UPDATE_TODO } = TODO_ACTIONS_CONST;

const initialState: TodoReducerStateType = {
  todoList: [],
  selectedIdList: [],
};

export const todoReducer: Reducer<TodoReducerStateType, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerStateType => {
  return produce(state, (draft) => {
    switch (action.type) {
      // CREATE
      case CREATE_TODO:
        draft.todoList.push(action.payload);
        break;

      // CHECK BOX
      case SEND_SINGLE_TODO_ID:
        {
          const index = draft.selectedIdList.indexOf(action.payload);
          if (index === -1) {
            draft.selectedIdList.push(action.payload);
          } else {
            draft.selectedIdList.splice(index, 1);
          }
        }
        break;

      // UPDATE
      case UPDATE_TODO:
        console.log(action.payload);
        break;

      default:
        return state;
    }
  });
};
