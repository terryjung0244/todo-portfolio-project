import React, { useState } from 'react';
import * as Styled from './UpdateTodo.Styled';
import { useAppDispatch, useAppSelector } from 'service/store';
import Input from 'service/common/reusable/input/Input';
import { UpdateInputStateType } from './UpdateTodo.interface';
import Button from 'service/common/reusable/button/Button';
import { updateTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoId';

const UpdateTodo = () => {
  const dispatch = useAppDispatch();
  const { selectedIdList } = useAppSelector((state) => state.todoReducer);

  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);

  const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
    todo: '',
  });

  const updateInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const updateTodoFunc = () => {
    setShowUpdateInput(true);
  };

  const updateButtonForNewTodo = () => {
    dispatch(updateTodoAction({ ...updateInput, id: getNanoid() }));
  };

  return (
    <Styled.UpdateTodo onClick={updateTodoFunc}>
      <div>Update</div>
      <div>
        {showUpdateInput && selectedIdList.length === 1 && (
          <div>
            <Input
              name="todo"
              value={updateInput.todo}
              placeholder="Enter Update"
              onChange={updateInputFunc}
            />

            <Button
              dataTestId="test-updateTodo-button"
              className=""
              text="UPDATE"
              onClick={updateButtonForNewTodo}
            />
          </div>
        )}
      </div>
    </Styled.UpdateTodo>
  );
};

export default UpdateTodo;
