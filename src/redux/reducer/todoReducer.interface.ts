import { TodoType } from 'model/todoGeneral';

export interface TodoReducerStateType {
  todoList: TodoType[];
  selectedIdList: string[];
}
