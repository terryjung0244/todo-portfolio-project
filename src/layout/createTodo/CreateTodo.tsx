import React, { useState } from 'react';
import * as Styled from './CreateTodo.Styled';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'store';
import { createTodoAction } from 'redux/action/todoAction';
import { getNanoid } from 'util/nanoId';
import Input from 'components/input/Input';
import Button from 'components/button/Button';

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
      <div className="input-and-button-background">
        <div className="input-and-button-main">
          <Input
            dataTestId="createTodo-input-data-TestId"
            className="createTodo-input"
            name="todo"
            value={createInput.todo}
            placeholder="Enter Todo"
            onChange={createInputFunc}
          />
          <Button
            width="120px"
            height="60px"
            dataTestId="test-createTodo-button"
            className="createTodo-button"
            text="ADD"
            onClick={createInputAddBtn}
          />
        </div>
      </div>
    </Styled.CreateTodo>
  );
};

export default CreateTodo;
