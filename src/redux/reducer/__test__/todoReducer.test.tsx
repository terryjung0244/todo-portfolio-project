import { createStore } from 'store/index';
import { Store } from '@reduxjs/toolkit';
import {
  createTodoAction,
  sendSingleIdAction,
  sendAllIdAction,
  updateTodoAction,
  deleteTodoAction,
} from 'redux/action/todoAction';
import {
  selectedIdListMockData,
  selectedIdListMockDataForUpdateTesting,
  todoMockData,
} from 'service/mock/data/todoMockData';

describe('service/redux/reducer/todoReducer/', () => {
  // const store: Store = createStore();
  let store: Store;
  beforeEach(() => {
    store = createStore(); // 매번 초기화 시킨다.
  });

  it('test createTodoAction', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    expect(store.getState().todoReducer.todoList).toEqual([todoMockData[0]]);
  });

  it('test sendSingleIdAction', () => {
    store.dispatch(sendSingleIdAction(selectedIdListMockData[1]));
    expect(store.getState().todoReducer.selectedIdList).toEqual([
      selectedIdListMockData[1],
    ]);
  });

  it('test sendAllTodoIdAction', () => {
    store.dispatch(sendAllIdAction(true));
    expect(store.getState().todoReducer.selectedIdList).toEqual([]);
  });

  it('test updateTodoAction', () => {
    store.dispatch(createTodoAction(todoMockData[0])); //todoMockData[0] createTodoAction dispatch,
    // 'todoMockId1 value값을 selectedIdList에 dispatch하고,
    store.dispatch(
      updateTodoAction({
        id: selectedIdListMockDataForUpdateTesting[0],
        todo: 'test todo',
      }),
    );
    // [ { id: 'todoMockId1', todo: 'test todo', isChecked: false } ]
    expect(store.getState().todoReducer.todoList).toEqual([
      {
        ...todoMockData[0],
        todo: 'test todo',
      },
    ]);
  });

  it('test deleteTodoAction', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    store.dispatch(sendSingleIdAction(todoMockData[0].id));
    store.dispatch(deleteTodoAction());
    expect(store.getState().todoReducer.todoList).toEqual([]);
  });
});
