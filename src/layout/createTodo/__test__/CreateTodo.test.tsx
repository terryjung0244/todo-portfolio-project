import CreateTodo from '../CreateTodo';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/mockStore';
import { todoReducerMockDataInitialState } from 'service/mock/data/todoReducerMockData';
import { createTodoAction } from 'redux/action/todoAction';
// import { getNanoid } from 'util/nanoId';
window.alert = jest.fn();

jest.mock('redux/action/todoAction', () => ({
  createTodoAction: jest.fn(),
}));

const setNanoId = 'ABCD1234';

jest.mock('util/nanoid', () => ({
  getNanoid: () => {
    return setNanoId;
  },
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <CreateTodo />
    </Provider>,
    // createTodo에서 dispatch을 사용하고 있기에, <Provider store={store}>로 감싸줘야한다.
  );

describe('layout/createTodo', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({ todoReducer: todoReducerMockDataInitialState });
    // reducer testing은 직접적으로 dispatch을 하기때문에, 실제로 사용하는 store = createStore()을 사용해야하고,
    // createTodo Component에서는 action을 통해서 dispatch을 하기때문에, 가상적인 store=createMockStore()을 사용한다.
    store.dispatch = jest.fn();
    // jest을 사용해서 가상적으로 dispatch을 만들어야 한다.
  });

  it('Render createTodo component', () => {
    const { getByTestId } = renderComponent(store);
    //위 renderComponet에 parameter로 store을 보낸다.(1)
    expect(getByTestId('createTodo-component')).toBeInTheDocument();
  });

  it('Render input component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('input-component')).toBeInTheDocument();
  });

  it('test button component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('input-and-button')).toBeInTheDocument();
    fireEvent.click(getByTestId('button-component'));
    expect(getByTestId('button-component')).toBeInTheDocument();
  });

  it('test dispatch(createTodoAction) when the todo has input value', () => {
    const { getByTestId } = renderComponent(store);

    fireEvent.change(getByTestId('input-component'));
    expect(getByTestId('input-component')).toBeInTheDocument();

    fireEvent.change(getByTestId('input-component'), {
      target: {
        value: 'todo',
      },
    });

    fireEvent.click(getByTestId('button-component'));
    expect(createTodoAction).toHaveBeenCalled();
    expect(createTodoAction).toHaveBeenCalledWith({
      id: setNanoId,
      todo: 'todo',
    });
  });
});
