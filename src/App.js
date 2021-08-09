import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyDetails from './components/BodyDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BodyList from './containers/BodyList';
import { setPlanets, setMoons, setBodies } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((resp) => {
        dispatch(setBodies(resp.data.bodies));
        dispatch(setPlanets(resp.data.bodies.filter((body) => body.isPlanet)));
        dispatch(setMoons(resp.data.bodies.filter((body) => !body.isPlanet)));
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planets">
          <Navbar />
          <BodyList bodyType="planets" />
        </Route>
        <Route path="/planets/:id">
          <Navbar />
          <BodyDetails />
        </Route>
        <Route exact path="/moons">
          <Navbar />
          <BodyList bodyType="moons" />
        </Route>
        <Route path="/moons/:id">
          <Navbar />
          <BodyDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
