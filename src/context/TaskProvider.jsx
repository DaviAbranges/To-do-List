import TaskContext from "./TaskContext";
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

function TaskProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    date: '',
    time: '',
    priority: '',
  });
  const [todoList, setTodoList] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(1);
  const value = useMemo(() => ({
    formData,
    setFormData,
    todoList,
    setTodoList,
    nextTaskId,
    setNextTaskId,
  }), [formData, todoList, nextTaskId]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;