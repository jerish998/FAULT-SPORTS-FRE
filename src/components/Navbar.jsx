import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FAULT SPORTS</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Log IN</Link>
      </div>
    </nav>
  );
}

export default Navbar;
