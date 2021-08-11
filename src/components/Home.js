import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="header">
        <h1>Tactus Caelesti</h1>
      </section>
      <div className="sub-header">
        <Link to="/planets">
          <section>
            <h2>Planets</h2>
          </section>
        </Link>
        <Link to="/blackholes">
          <section>
            <h2>Moons</h2>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Home;
