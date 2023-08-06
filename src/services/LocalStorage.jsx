
import ToDoList from "../screens/ToDoList/ToDoList"
import LoginPage from "../screens/Login/Login"

export default function LocalStorage() {
  const localStorageisTrue = localStorage.getItem('email') !== null;
  let screen;
  if (localStorageisTrue) {
    screen = <ToDoList />
  } else {
    screen = <LoginPage />
  }
  return (
    <div>{screen}</div>
  )
}
