import React from 'react';
import * as Styled from './TodoMap.Styled';
import DeleteTodo from 'layout/deleteTodo/DeleteTodo';
import UpdateTodo from 'layout/updateTodo/UpdateTodo';
import { TodoType } from 'model/todoGeneral';
import { sendSingleIdAction } from 'redux/action/todoAction';
import { useAppDispatch, useAppSelector } from 'store';

const TodoMap = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer,
  );

  const checkboxForEach = (id: string) => {
    dispatch(sendSingleIdAction(id));
  };

  return (
    <Styled.TodoMap>
      {todoList.map((todo: TodoType) => {
        return (
          <tr key={todo.id}>
            <td style={{ maxWidth: '20px' }}>
              <input
                type="checkbox"
                checked={selectedIdList.includes(todo.id)} //
                onChange={() => checkboxForEach(todo.id)}
              />
            </td>
            <td>{todo.todo}</td>
            <td>
              {selectedIdList.includes(todo.id) && <UpdateTodo todo={todo} />}
            </td>
            <td>
              <DeleteTodo />
            </td>
          </tr>
        );
      })}
    </Styled.TodoMap>
  );
};

export default TodoMap;
