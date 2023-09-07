import React from 'react';
import Header from './header/Header';
import CreateTodo from './createTodo/CreateTodo';
import ShowTodo from './showTodo/ShowTodo';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="body-grid-divider">
        <CreateTodo />
        <ShowTodo />
      </div>
    </>
  );
};

export default Layout;
