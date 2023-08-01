import logo from '../../images/logo.png';
import './Header.css';
import perfil from '../../images/perfil.jpeg';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="perfil">
        <img src={perfil} alt="" className="perfilImage" />
        <div className="datasPerfil">
          <p>name</p>
          <p>email</p>
        </div>
      </div>
    </div>
  );
}