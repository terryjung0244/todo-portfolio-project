/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import * as Styled from './Styled.App';
// import Layout from 'layout/Layout';

// const App = () => {
//   return (
//     <Styled.App>
//       <Layout />
//     </Styled.App>
//   );
// };

// export default App;

import React, { useState } from 'react';

const App = () => {
  // const callAPI = async () => {
  //   const response = await fetch('http://localhost:8080/');
  //   const result = await response.json();
  //   console.log(result);
  // };
  // const callAPI2 = async (name: string) => {
  //   const response = await fetch(`http://localhost:8080?name=${name}`);
  //   const result = await response.json();
  //   console.log(result);
  // };
  const [todos, setTodos] = useState<any>([]);
  const [todoDetail, setTodoDetail] = useState<any>({});
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputTitleForUpdate, setInputTitleForUpdate] = useState<string>('');

  const callAPI = async () => {
    const response = await fetch('http://localhost:8080');
    const result = await response.json();
    setTodos(result);
    // console.log(result);
  };
  const callTodoDetail = async (id: string) => {
    const response = await fetch(`http://localhost:8080/todos/${id}`);
    const result = await response.json();
    setTodoDetail(result);
  };

  console.log(todoDetail);

  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const onChangeFuncForUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitleForUpdate(e.target.value);
  };
  // const callAPIWithSearch = async () => {
  //   const response = await fetch(
  //     `http://localhost:8080/todos?search=${inputTitle}`,
  //   );
  //   const result = await response.json();
  //   console.log(result);
  //   // setTodoDetail(result);
  // };

  const addTodo = async () => {
    const response = await fetch('http://localhost:8080/api/createTodo', {
      method: 'POST',
      body: JSON.stringify({
        title: inputTitle,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const [todoList, setTodoList] = useState<any>([]);

  const getAllTodos = async () => {
    const response = await fetch('http://localhost:8080/api/getAllTodos');
    const { result } = await response.json();
    setTodoList(result);
  };

  const updateTodo = async () => {
    const response = await fetch('http://localhost:8080/updateTodo', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: inputTitleForUpdate,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const deleteTodo = async () => {
    const response = await fetch('http://localhost:8080/deleteTodo?id=2', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <button onClick={callAPI}>Click</button>
      <h3>Get</h3>
      <button onClick={getAllTodos}>Get All Todos</button>
      {todos.map((todo: any) => {
        return (
          <div key={todo.id} onClick={() => callTodoDetail(todo.id)}>
            {todo.title}
          </div>
        );
      })}

      <h3>Post</h3>
      <input name="inputTitle" value={inputTitle} onChange={onChangeFunc} />
      <button onClick={addTodo}>Add Todo</button>

      <h3>Put</h3>
      <input
        name="inputTitleForUpdate"
        value={inputTitleForUpdate}
        onChange={onChangeFuncForUpdate}
      />
      <button onClick={updateTodo}>Update Todo</button>
      {/* <button onClick={() => callAPI2('laptop')}>Laptop</button> */}

      <h3>Delete</h3>
      <button onClick={deleteTodo}>Delete Todo</button>

      {todoList.map((todo: any) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
