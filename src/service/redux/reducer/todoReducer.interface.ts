import { TodoType } from 'service/model/todoGeneral';

export interface TodoReducerStateType {
  todoList: TodoType[];
  selectedIdList: string[];
}
