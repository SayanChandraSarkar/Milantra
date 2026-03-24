import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const navItems = [
  { to: '/', label: 'Discover' },
  { to: '/profile', label: 'Profile' },
  { to: '/login', label: 'Login' }
];

export function Navbar() {
  return (
    <header className="container navbar-shell">
      <div className="navbar">
        <div className="brand">
          <img src={logo} alt="Milantra" className="brand-logo" />
          <div>
            <p className="brand-kicker">Milantra MVP</p>
            <p className="brand-title">Culturally aware matchmaking</p>
          </div>
        </div>

        <nav className="row nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
