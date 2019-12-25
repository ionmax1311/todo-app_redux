import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../../components/todo-input/TodoInput';
import ToDoList from '../../components/todo-list/TodoList';
import Footer from '../../components/footer/Footer';

import {
  addTask,
  removeTask,
  completeTask,
  changeFilter
} from '../../actions/actionCreator';

import './todo.css';

const Todo = props => {
  const [taskText, setTaskText] = useState('');
  const { tasks } = props;
  const isTasksExist = tasks && tasks.length > 0;

  const handleInputChange = e => {
    setTaskText(e.target.value);
  };

  const addTask = ({ key }) => {
    if (taskText.length > 0 && key === 'Enter') {
      const { addTask } = props;

      addTask(new Date().getTime(), taskText, false);

      setTaskText('');
    }
  };

  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        // eslint-disable-next-line no-unreachable
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        // eslint-disable-next-line no-unreachable
        break;
      default:
        return tasks;
    }
  };

  const getActiveTasksCounter = tasks =>
    tasks.filter(task => !task.isCompleted).length;

  return (
    <div className="todo-wrapper">
      <ToDoInput
        onKeyPress={addTask}
        onChange={handleInputChange}
        value={taskText}
      />
      {isTasksExist && (
        <ToDoList
          removeTask={props.removeTask}
          completeTask={props.completeTask}
          tasksList={filterTasks(tasks, props.filters)}
        />
      )}
      {isTasksExist && (
        <Footer
          changeFilter={props.changeFilter}
          amount={getActiveTasksCounter(props.tasks)}
          activeFilter={props.filters}
        />
      )}
    </div>
  );
};

export default connect(
  ({ tasks, filters }) => ({
    tasks,
    filters
  }),
  { addTask, removeTask, completeTask, changeFilter }
)(Todo);
