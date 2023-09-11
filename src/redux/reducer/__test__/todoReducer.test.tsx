import { createStore } from 'service/redux';
import { Store } from '@reduxjs/toolkit';
import {
  createTodoAction,
  sendSingleIdAction,
  sendAllIdAction,
  updateTodoAction,
  deleteTodoAction,
} from 'service/redux/action/todoAction';

describe('service/redux/reducer/todoReducer/', () => {
  const store: Store = createStore();
});
