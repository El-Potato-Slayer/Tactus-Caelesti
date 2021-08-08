import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    <div className="App">
      <BodyList bodyType="moons" />
    </div>
  );
}

export default App;
