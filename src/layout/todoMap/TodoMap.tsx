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
            <td>
              <input
                type="checkbox"
                checked={selectedIdList.includes(todo.id)} //
                onChange={() => checkboxForEach(todo.id)}
              />
            </td>
            <td>{todo.todo}</td>
            <td style={{ minWidth: '70px' }}>
              {selectedIdList.includes(todo.id) && <UpdateTodo todo={todo} />}
              // 체크하고서 update가 보여짐.
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
