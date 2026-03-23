import logo from '../assets/logo.svg';

export function Navbar() {
  return (
    <header className="container" style={{ paddingTop: '1rem' }}>
      <div className="navbar" style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="Milantra" style={{ height: 28 }} />
        <nav className="row" style={{ alignItems: 'center' }}>
          <a href="/">Discover</a>
          <a href="/profile">Profile</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>
  );
}
