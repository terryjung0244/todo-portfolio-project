import { Reducer } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { TodoReducerStateType } from './todoReducer.interface';
import { TodoActionsType } from '../action/todoAction.interface';
import { TODO_ACTIONS_CONST } from 'service/const/todoActionConst';
import { TodoType } from 'service/model/todoGeneral';

const { CREATE_TODO, SEND_SINGLE_TODO_ID, UPDATE_TODO, DELETE_TODO } =
  TODO_ACTIONS_CONST;

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
        {
          const { todo } = action.payload; // New Input todo: 'value'
          draft.selectedIdList.forEach((id: string) => {
            const index = draft.todoList.findIndex(
              (todo: TodoType) => id === todo.id,
            );
            draft.todoList[index].todo = todo;
            draft.selectedIdList = [];
          });
        }
        break;
      // 1. selectedList을 forEach()로 id를 looping 시키고,
      // 그 안에서, todoList을 findIndex() method(index찾는법)를 사용해서,
      // 내가 선택한 id이랑 todoList안에 있는 id랑 똑같으면 그 index값을 const index에 넣어라

      //
      case DELETE_TODO:
        {
          draft.selectedIdList.forEach((id: string) => {
            const index = draft.todoList.findIndex(
              (todo: TodoType) => todo.id === id,
            );
            draft.todoList.splice(index, 1);
          });
        }
        break;

      default:
        return state;
    }
  });
};
