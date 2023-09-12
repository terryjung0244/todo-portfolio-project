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

  const callAPI = async () => {
    const response = await fetch('http://localhost:8080/todos');
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

  const callAPIWithSearch = async () => {
    const response = await fetch(
      `http://localhost:8080/todos?search=${inputTitle}`,
    );
    const result = await response.json();
    console.log(result);
    // setTodoDetail(result);
  };

  return (
    <div>
      <button onClick={callAPI}>Click</button>

      {todos.map((todo: any) => {
        return (
          <div key={todo.id} onClick={() => callTodoDetail(todo.id)}>
            {todo.title}
          </div>
        );
      })}

      <input name="inputTitle" value={inputTitle} onChange={onChangeFunc} />
      <button onClick={callAPIWithSearch}>Search Todo</button>
      {/* <button onClick={() => callAPI2('laptop')}>Laptop</button> */}
    </div>
  );
};

export default App;
