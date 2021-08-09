import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import BodyDetails from '../components/BodyDetails';
import { selectedCategory } from '../store/actions';

function BodyList(props) {
  const { bodyType } = props;
  /* eslint-disable */
  const bodies = props[bodyType];
  /* eslint-enable */
  const disptach = useDispatch();
  disptach(selectedCategory(bodyType));

  return (
    <>
      {
        bodies.map((body) => (
          // <BodyPreview key={body.id} body={body} />
          <>
            <Link key={body.id} to={`/${bodyType}/${body.id}`}>
              {/* <BodyDetails /> */}
              <p>{body.englishName}</p>
            </Link>
            {/* <p>{body.englishName}</p> */}
            {/* <Route path={`/${bodyType}/:id`} component={BodyDetails} /> */}
          </>
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
