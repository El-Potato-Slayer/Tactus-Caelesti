import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import BodyDetails from '../components/BodyDetails';
// import { selectedCategory } from '../store/actions';

function BodyList(props) {
  const { bodyType } = props;
  let { bodies } = props;
  bodies = bodies.filter((body) => (
    body.type === bodyType
  ));
  console.log(bodies);
  return (
    <div className="list-container">
      {
        bodies.map((body) => (
          <>
            <Link
              className="body"
              key={body.id}
              data-after-content={body.name}
              to={`/${bodyType}s/${body.id}`}
              style={{
                background: `url(${body.picture}) center`,
                backgroundSize: 'cover',
              }}
            />
            {/* {body.name} */}
            {/* </Link> */}
          </>
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  bodies: state.solarSystemReducer.bodies,
  planets: state.solarSystemReducer.planets,
  moons: state.solarSystemReducer.moons,
});

BodyList.propTypes = {
  bodyType: PropTypes.string.isRequired,
  bodies: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BodyList);
