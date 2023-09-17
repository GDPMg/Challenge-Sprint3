import { useState } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
import Logo_header from '../assets/logo.ico'
import Menu_white from '../assets/menu_white.svg'
import Close_white from '../assets/close_white.svg'




function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <a>
              <NavLink to="/">
                <img src={Logo_header} alt="TechForAll" />
              </NavLink>
            </a>
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/Sobre">Sobre</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/Contato">Contato</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/Lista">Lista</NavLink>
                </a>
              </li>
            </ul>
          </div>

          <div className="login">
            <ul>
              <li>
                <a>
                  <NavLink to="/Login">Login</NavLink>
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={toggleMobileMenu}>
              <img className="icon" src={isMobileMenuOpen ? Close_white : Menu_white} alt="Menu" />
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink to="/Sobre">Sobre</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink to="/Contato">Contato</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink to="/Lista">Lista</NavLink>
              </a>
            </li>
          </ul>

          <div className="login">
            <ul>
              <li>
                <a>
                  <NavLink to="/Login">Login</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
