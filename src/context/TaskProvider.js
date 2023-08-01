import TaskContext from "./TaskContext";
import PropTypes from 'prop-types';

function TaskProvider({ children }) {
  return (
    <TaskContext.Provider value={'initial'}>
      {children}
    </TaskContext.Provider>
  )
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;