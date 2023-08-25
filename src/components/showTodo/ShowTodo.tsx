import React from 'react';
import * as Styled from './ShowTodo.Styled';
import { useAppDispatch, useAppSelector } from 'service/store';
import { TodoType } from 'service/model/todoGeneral';
import UpdateTodo from 'components/updateTodo/UpdateTodo';
import { sendSingleIdAction } from 'service/redux/action/todoAction';
import DeleteTodo from 'components/deleteTodo/DeleteTodo';

const ShowTodo = () => {
  const dispath = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer,
  );

  const checkboxForEach = (id: string) => {
    dispath(sendSingleIdAction(id));
  };

  return (
    <Styled.ShowTodo>
      <div>
        {todoList.map((todo: TodoType) => {
          return (
            <div key={todo.id} className="todo-map">
              <input
                type="checkbox"
                checked={selectedIdList.includes(todo.id)} //
                onChange={() => checkboxForEach(todo.id)}
              />
              <div>todo: {todo.todo}</div>
              <UpdateTodo />
              <DeleteTodo />
            </div>
          );
        })}
      </div>
    </Styled.ShowTodo>
  );
};

export default ShowTodo;
