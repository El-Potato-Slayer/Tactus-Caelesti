import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BodyList(props) {
  const { bodyType } = props;
  /* eslint-disable */
  const bodies = props[bodyType];
  /* eslint-enable */

  return (
    <>
      {
        bodies.map((body) => (
          <p key={body.id}>{body.englishName}</p>
        ))
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  planets: state.solarSystemReducer.planets,
  moons: state.solarSystemReducer.moons,
});

BodyList.propTypes = {
  bodyType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(BodyList);
