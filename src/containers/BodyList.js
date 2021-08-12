import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BodyList(props) {
  const { bodyType, name } = props;
  let { bodies } = props;
  if (bodyType !== 'all') {
    bodies = bodies.filter((body) => (
      body.type === bodyType
    ));
  }
  function results() {
    if (name === '') {
      return bodies;
    }
    return bodies.filter((body) => (
      body.name.toLowerCase().includes(name.toLowerCase())
    ));
  }
  return (
    <div className="list-container" data-testid="list">
      {
        results().map((body) => (
          <Link
            className="body"
            key={body.id}
            data-after-content={body.name}
            to={`/${bodyType}/${body.id}`}
            style={{
              background: `url(${body.picture}) center`,
              backgroundSize: 'cover',
            }}
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  bodies: state.solarSystemReducer.bodies,
  name: state.filterReducer.name,
});

BodyList.propTypes = {
  bodyType: PropTypes.string.isRequired,
  bodies: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(BodyList);
