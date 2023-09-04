import React from 'react';
import * as Styled from './TodoTable.Styled';
import TodoMap from 'layout/todoMap/TodoMap';
import { useAppDispatch, useAppSelector } from 'store';
import { sendAllIdAction } from 'redux/action/todoAction';

const TodoTable = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer,
  );
  const allCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    console.log(checked);
    dispatch(sendAllIdAction(checked));
  };

  return (
    <Styled.TodoTable>
      <table className="table-main-container">
        <thead>
          <tr>
            <th className="checkbox-container">
              <input
                type="checkbox"
                checked={
                  selectedIdList.length === todoList.length ? true : false
                }
                onChange={allCheckbox}
              />
            </th>
            <th className="todo-container">Todo List</th>
            <th className="update-container">Update</th>
            <th className="delete-container">Delete</th>
          </tr>
        </thead>
        <TodoMap />
      </table>
    </Styled.TodoTable>
  );
};

export default TodoTable;
