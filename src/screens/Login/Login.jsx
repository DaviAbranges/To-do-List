import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonClickable, setIsButtonClickable] = useState(false);

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
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="loginInputs">
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
          <button className="loginButton" onClick={handleLogin} disabled={!isButtonClickable}>
            Entrar
          </button>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;
