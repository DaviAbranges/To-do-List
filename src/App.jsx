import TaskProvider from './context/TaskProvider'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './screens/Login/Login'
import ToDoList from './screens/ToDoList/ToDoList'

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route exact path='/' Component={LoginPage} />
          <Route exact path='/ToDoList' Component={ToDoList} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
