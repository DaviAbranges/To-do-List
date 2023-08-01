import TaskProvider from './context/TaskProvider'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './screens/Login/Login'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route exact path='/' Component={LoginPage} />
          <Route exact path='/ToDoList' Component={Header} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
