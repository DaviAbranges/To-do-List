import TaskProvider from './context/TaskProvider'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './screens/Login/Login'
import ToDoList from './screens/ToDoList/ToDoList'
import AddTask from './addTask/AddTask'
import LocalStorage from './services/LocalStorage'

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route exact path='/' Component={LocalStorage} />
          <Route exact path='/Login' Component={LoginPage} />
          <Route exact path='/ToDoList' Component={ToDoList} />
          <Route exact path='/addTask' Component={AddTask} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
