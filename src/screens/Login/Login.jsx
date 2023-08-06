import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import TaskContext from '../../context/TaskContext';
function LoginPage() {
  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const [password, setPassword] = useState('')
  const { email, setEmail, setName, name } = useContext(TaskContext)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }


  const validateEmailAndPassword = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 6;

    setIsButtonClickable(isValidEmail && isValidPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmailAndPassword();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateEmailAndPassword();
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    if (isButtonClickable) {
      navigate('/ToDoList')
    }
    if (email && name) {
      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
    }
  };
  const maxLength = 15;

  return (
    < div className="loginPage" >
      <div className="loginContainer">
        <h1>TO DO LIST</h1>
        <div className="loginInputs">
          <label htmlFor='name'>
            <input type="text" placeholder='name' className='inputLogin' onChange={handleNameChange} maxLength={maxLength} />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              placeholder="email"
              className="inputLogin"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="senha"
              className="inputLogin"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div className="loginButtons">
          <button className={`loginButton ${isButtonClickable ? 'buttonEnabled' : 'buttonDisabled'}`}
            onClick={handleLogin} disabled={!isButtonClickable} >
            Entrar
          </button>
        </div>
      </div>
    </div >

  );
}

export default LoginPage;
