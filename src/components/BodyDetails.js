import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import db from '../firebase.config';

function BodyDetails() {
  const { id } = useParams();
  const [body, setBody] = useState(null);
  useEffect(() => {
    db.collection('bodies').doc(id).get().then((doc) => {
      if (doc.exists) {
        setBody(doc.data());
      }
    });
    console.log(body);
  }, []);
  return (
    <section className="body-details">
      { body
        && (
        <>
          <div
            className="body-header"
            style={{
              background: `url(${body.picture}) center`,
              backgroundSize: 'cover',
            }}
          />
          <div className="body-info">
            <h3>{body.name}</h3>
            <p>
              Mass:
              &nbsp;
              {body.mass.massValue}
              ×10
              <sup className="exponent">
                {body.mass.massExponent}
              </sup>
              &nbsp;
              <span className="unit">kg</span>
            </p>
            <p>
              Volume:
              &nbsp;
              {body.volume.volValue}
              {
                body.volume.volValue !== '0' && (
                <>
                  ×10
                  <sup className="exponent">
                    {body.volume.volExponent}
                  </sup>
                </>
                )
}
              &nbsp;
              <span className="unit">m</span>
              <sup className="exponent">
                3
              </sup>
            </p>
            <p>
              Density:
              &nbsp;
              {body.density}
              &nbsp;
              {
                body.density !== 'Infinite' && (
                <>
                  <span className="unit">kg/m</span>
                  <sup className="exponent">
                    3
                  </sup>
                </>
                )
              }
            </p>
            <p>
              Gravity:
              &nbsp;
              {body.gravity}
              &nbsp;
              {
                body.gravity !== 'Infinite' && (
                  <>
                    <span className="unit">m/s</span>
                    <sup className="exponent">
                      2
                    </sup>
                  </>
                )
              }
            </p>
            <p>
              Radius:
              &nbsp;
              {body.radius.radiusValue}
              ×10
              <sup className="exponent">
                {body.radius.radiusExponent}
              </sup>
              &nbsp;
              <span className="unit">km</span>
            </p>
          </div>
        </>
        )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  bodies: state.solarSystemReducer.bodies,
  planets: state.solarSystemReducer.planets,
  moons: state.solarSystemReducer.moons,
});

// BodyDetails.propTypes = {
//   bodies: PropTypes.instanceOf(Array).isRequired,
// };

export default connect(mapStateToProps)(BodyDetails);
