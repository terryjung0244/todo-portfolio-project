import React, { useState } from 'react';
import * as Styled from './CreateTodo.Styled';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoId';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [createInput, setCreateInput] = useState<CreateInputStateType>({
    todo: '',
  });

  const createInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  const createInputAddBtn = () => {
    dispatch(createTodoAction({ ...createInput, id: getNanoid() }));
  };

  return (
    <Styled.CreateTodo>
      <input
        name="todo"
        value={createInput.todo}
        placeholder="Enter Todo"
        onChange={createInputFunc}
      />
      <button onClick={createInputAddBtn}>ADD</button>
    </Styled.CreateTodo>
  );
};

export default CreateTodo;
