import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBodies, setMoons, setPlanets } from '../store/actions';

export default async function initializeData() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((resp) => {
        dispatch(setBodies(resp.data.bodies));
        dispatch(setPlanets(resp.data.bodies.filter((body) => body.isPlanet)));
        dispatch(setMoons(resp.data.bodies.filter((body) => !body.isPlanet)));
      });
  }, []);
}
