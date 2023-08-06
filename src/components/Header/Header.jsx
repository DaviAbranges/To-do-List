import { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import logo from '../../images/logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { name, email } = useContext(TaskContext);
  const [localStorageImage, setLocalStorageImage] = useState(localStorage.getItem('profileImage'));

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('profileImage', reader.result);
        setLocalStorageImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      localStorage.removeItem('profileImage');
      setLocalStorageImage(null);
    }
  };

  const navigate = useNavigate();
  const handlerLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <label htmlFor="profileInput" className="perfil">
        <input
          type="file"
          id="profileInput"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        <div className="perfilImageContainer">
          {localStorageImage ? (
            <img src={localStorageImage} alt="Perfil" className="perfilImage" />
          ) : (
            <span>+</span>
          )}
        </div>
        <div className="datasPerfil">
          <p>{name}</p>
          <p>{email}</p>
          <div>
            <button onClick={handlerLogout} className='logout'>Logout</button>
          </div>
        </div>
      </label>
    </div>
  );
}
