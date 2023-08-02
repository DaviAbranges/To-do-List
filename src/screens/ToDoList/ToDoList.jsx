import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ToDoList.css';
import TaskContext from '../../context/TaskContext';
import Table from '../../components/Table/Table';

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
        <button onClick={handlerAddTask} className='button'>Add Task</button>
        <Table />
      </div>
    </div>
  );
}
