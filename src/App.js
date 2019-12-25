import React, { Fragment } from 'react';
import Todo from './containers/todo/Todo';
import { Title } from './components/title/Title';
import './App.css';

function App() {
  return (
    <Fragment>
      <Title title="Todo App" />
      <Todo />
    </Fragment>
  );
}

export default App;
