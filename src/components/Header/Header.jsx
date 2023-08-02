import { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import logo from '../../images/logo.png';
import './Header.css';

export default function Header() {
  const [profileImage, setProfileImage] = useState(null);
  const { name, email } = useContext(TaskContext);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
    }
  };

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <label htmlFor="profileInput" className="perfil">
        <input
          type="file"
          id="profileInput"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        <div className="perfilImageContainer">
          {profileImage ? <img src={profileImage} alt="Perfil" className="perfilImage" /> : <span>+</span>}
        </div>
        <div className="datasPerfil">
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </label>
    </div>
  );
}