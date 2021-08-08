import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BodyList from './containers/BodyList';
import { setPlanets, setMoons } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((resp) => {
        dispatch(setPlanets(resp.data.bodies.filter((body) => body.isPlanet)));
        dispatch(setMoons(resp.data.bodies.filter((body) => !body.isPlanet)));
      });
  }, []);
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/planets">
        <Navbar />
        <BodyList bodyType="planets" />
      </Route>
      <Route path="/moons">
        <Navbar />
        <BodyList bodyType="moons" />
      </Route>
    </Router>
  );
}

export default App;
