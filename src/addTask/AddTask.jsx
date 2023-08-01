import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import './AddTask.css';
import TaskContext from '../context/TaskContext';

export default function AddTask() {
  const { formData, setFormData, setTodoList,
    nextTaskId, setNextTaskId } = useContext(TaskContext);

  const setTaskData = (task) => {
    setFormData({
      name: task.name,
      category: task.category,
      description: task.description,
      date: task.date,
      time: task.time,
      priority: task.priority,
      taskId: task.taskId,
    });
  };
  useEffect(() => {
    if (formData && formData.taskId) {
      setTaskData(formData);
    }
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.taskId) {
      setTodoList((prevTodoList) => ({
        ...prevTodoList,
        [formData.taskId]: { ...formData },
      }));
    } else {
      const newTaskId = nextTaskId;
      setTodoList((prevTodoList) => ({
        ...prevTodoList,
        [newTaskId]: { ...formData, taskId: newTaskId },
      }));
      setNextTaskId((prevNextTaskId) => prevNextTaskId + 1);
    }

    navigate('/ToDoList');
  };

  return (
    <div className="addTask">
      <Header />
      <div className="containerAddTask">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name for task"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="category" className="label">
            Category:
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="a short category of the"
            />
          </label>
          <label htmlFor="description" className="label">
            Description:
            <textarea
              name="description"
              id="description"
              placeholder="a short description of the task"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="date" className="label">
            Date:
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="time" className="label">
            Time:
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>
          <span>Priority: </span>
          <select
            name="priority"
            id="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option>select from Dropdown</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className="buttonsAddTask">
            <button type="submit">Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
