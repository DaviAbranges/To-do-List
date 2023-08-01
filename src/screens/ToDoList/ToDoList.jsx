import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ToDoList.css';
import TaskContext from '../../context/TaskContext';

export default function ToDoList() {
  const navigate = useNavigate();
  const { setFormData } = useContext(TaskContext);

  const clearFormData = () => {
    setFormData({
      name: '',
      category: '',
      description: '',
      date: '',
      time: '',
      priority: '',
      taskId: '',
    });
  };
  const handlerAddTask = () => {
    navigate('/addTask');
    clearFormData();
  };
  return (
    <div className="Todolist">
      <Header />
      <div className="to-doListContainer">
        <h1>To-Do List</h1>
        <div className="buttons">
          <button onClick={handlerAddTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
}
