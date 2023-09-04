import React, { useState } from 'react';
import * as Styled from './UpdateTodo.Styled';
import { useAppDispatch } from 'store';
import Input from 'components/input/Input';
import { UpdateInputStateType } from './UpdateTodo.interface';
import Modal from 'components/modal/Modal';
import { TodoType } from 'model/todoGeneral';
import { updateTodoAction } from 'redux/action/todoAction';

const UpdateTodo = ({ todo }: { todo: TodoType }) => {
  const dispatch = useAppDispatch();

  // const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);

  const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
    todo: '',
  });

  const [updateModalToggle, setUpdateModalToggle] = useState<boolean>(false);

  const updateInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const updateTodoFunc = () => {
    setUpdateModalToggle((prev) => !prev);
    // 불릴때마다 반대값으로 update 시켜주는것
    // setUpdateModalToggle(true);
    setUpdateInput({ ...updateInput, todo: '' }); // 초기화
  };

  const onClickYesInModal = () => {
    updateTodoFunc();
    console.log(todo.id);
    console.log(updateInput.todo);
    dispatch(updateTodoAction({ id: todo.id, todo: updateInput.todo }));
  };

  return (
    <>
      <Styled.UpdateTodo onClick={updateTodoFunc}>
        <div>Update</div>
      </Styled.UpdateTodo>

      {updateModalToggle && (
        <Modal
          title="Update Todo"
          yesButtonText="Update"
          onClickYesButton={onClickYesInModal} // update
          noButtonText="Cancel"
          onClickNoButton={updateTodoFunc} // cancel
          width="80%"
        >
          <div>
            {/* <h3>{todo.id}</h3> */}
            <Input
              name="todo"
              value={updateInput.todo}
              placeholder="Enter Update"
              onChange={updateInputFunc}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateTodo;
