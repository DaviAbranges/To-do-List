import { useContext } from 'react';
import './Table.css';
import { useNavigate } from 'react-router-dom';
import TaskContext from '../../context/TaskContext';

export default function Table() {
  const { todoList, setFormData, setTodoList } = useContext(TaskContext);
  const tasks = Object.values(todoList);
  console.log(todoList);
  const navigate = useNavigate();
  const handlerEdit = (task) => {
    navigate('/addTask');
    setFormData(task);
  };

  const handlerDelete = (task) => {
    const updatedTodoList = { ...todoList };

    delete updatedTodoList[task.taskId];
    console.log(updatedTodoList);
    setTodoList(updatedTodoList);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Category</th>
          <th>When</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.taskId}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.category}</td>
            <td>
              {task.date}
              {' '}
              |
              {' '}
              {task.time}
            </td>
            <td>{task.priority}</td>
            <td><button onClick={() => handlerEdit(task)}>edit</button></td>
            <td><button onClick={() => handlerDelete(task)}>Delete</button></td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}
