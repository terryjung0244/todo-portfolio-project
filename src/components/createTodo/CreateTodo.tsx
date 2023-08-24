import React, { useState } from 'react';
import * as Styled from './CreateTodo.Styled';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoId';
import Input from 'service/common/reusable/input/Input';
import Button from 'service/common/reusable/button/Button';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [createInput, setCreateInput] = useState<CreateInputStateType>({
    todo: '',
  });

  const createInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  const createInputAddBtn = () => {
    const { todo } = createInput;
    if (!todo) {
      alert('Enter Todo');
    } else {
      dispatch(createTodoAction({ ...createInput, id: getNanoid() }));
    }
    setCreateInput({ ...createInput, todo: '' });
  };

  return (
    <Styled.CreateTodo>
      <Input
        name="todo"
        value={createInput.todo}
        placeholder="Enter Todo"
        onChange={createInputFunc}
      />
      <Button text="ADD" onClick={createInputAddBtn} />
    </Styled.CreateTodo>
  );
};

export default CreateTodo;
