import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link className="header" to="/all">
        <h1>Tactus Caelesti</h1>
      </Link>
      <div className="sub-header">
        <Link to="/planets">
          <section>
            <h2>Planets</h2>
          </section>
        </Link>
        <Link to="/blackholes">
          <section>
            <h2>Blackholes</h2>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Home;
