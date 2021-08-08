import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav data-testid="navbar" className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/moons">Moons</Link>
      </div>
    </nav>
  );
}

export default Navbar;
