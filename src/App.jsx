import TaskProvider from './context/TaskProvider'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './screens/Login/Login'

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route exact path='/' Component={LoginPage} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
