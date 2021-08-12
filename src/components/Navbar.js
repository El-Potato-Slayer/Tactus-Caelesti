import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeFilter } from '../store/actions';

function Navbar() {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <nav data-testid="navbar" className="navbar">
      <Link to="/" className="logo">Tactus Caelesti</Link>
      <div className="links">
        <Link to="/all">All</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/blackholes">Blackholes</Link>
      </div>
      <input
        type="text"
        id="filter"
        className="filter text-black"
        placeholder="Search"
        onChange={handleFilterChange}
      />
    </nav>
  );
}

const mapStateToProps = (state) => ({
  bodies: state.solarSystemReducer.bodies,
  nameInput: state.filterReducer.name,
});

export default connect(mapStateToProps)(Navbar);
