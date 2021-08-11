import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav data-testid="navbar" className="navbar">
      <Link to="/" className="logo">Tactus Caelesti</Link>
      <div className="links">
        <Link to="/all">All</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/blackholes">Blackholes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
