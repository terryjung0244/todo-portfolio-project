import React from 'react';
import * as Styled from './Styled.App';
import CreateTodo from 'components/createTodo/CreateTodo';
import ShowTodo from 'components/showTodo/ShowTodo';
import Header from 'components/header/Header';

const App = () => {
  return (
    <Styled.App>
      <Header />
      <div className="body-grid-divider">
        <CreateTodo />
        <ShowTodo />
      </div>
    </Styled.App>
  );
};

export default App;
