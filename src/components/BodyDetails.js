import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setBodies, setMoons, setPlanets } from '../store/actions';

function BodyDetails(props) {
  const { bodies } = props;
  const { id } = useParams();
  // const [body] = bodies.filter((b) => (
  //   b.id === id
  // ));
  console.log(bodies);
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((resp) => {
        dispatch(setBodies(resp.data.bodies));
        dispatch(setPlanets(resp.data.bodies.filter((body) => body.isPlanet)));
        dispatch(setMoons(resp.data.bodies.filter((body) => !body.isPlanet)));
        setBody(resp.data.bodies.filter((b) => (
          b.id === id
        ))[0]);
      });
  }, []);
  return (
    <section>
      <h3>{body.englishName}</h3>
    </section>
  );
}

const mapStateToProps = (state) => ({
  bodies: state.solarSystemReducer.bodies,
  planets: state.solarSystemReducer.planets,
  moons: state.solarSystemReducer.moons,
});

BodyDetails.propTypes = {
  bodies: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BodyDetails);
