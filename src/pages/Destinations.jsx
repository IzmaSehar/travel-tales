import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <div className="container page">
      <h1 className="page-title" style={{textAlign: 'center', margin: '20px 0', fontWeight: 'bold'}}>
        Top Travel Destinations
      </h1>

      <div className="row">

        <div className="col-4" style={{marginBottom: '20px'}}>
          <div className="dest-card">
            <Link to="/turkey" className="dest-link">
              <img src="./images/turkey/Istanbul.jpg" alt="Istanbul" className="dest-img" />
              <h4 className="dest-title">Istanbul, Turkey</h4>
            </Link>
            <p className="dest-text">
              A city where East meets West - visit Hagia Sophia, the Grand Bazaar and enjoy Bosphorus views.
            </p>
          </div>
        </div>

        <div className="col-4" style={{marginBottom: '20px'}}>
          <div className="dest-card">
            <Link to="/switzerland" className="dest-link">
              <img src="./images/switzerland/Interlaken.jpg" alt="Interlaken" className="dest-img" />
              <h4 className="dest-title">Interlaken, Switzerland</h4>
            </Link>
            <p className="dest-text">
              Nestled between lakes and mountains - adventure sports, scenic train rides and alpine views.
            </p>
          </div>
        </div>

        <div className="col-4" style={{marginBottom: '20px'}}>
          <div className="dest-card">
            <Link to="/maldives" className="dest-link">
              <img src="./images/maldives/Sun Island.jpg" alt="Sun Island" className="dest-img" />
              <h4 className="dest-title">Sun Island, Maldives</h4>
            </Link>
            <p className="dest-text">
              Crystal clear water, white sand beaches and relaxing overwater villas - perfect for snorkeling and rest.
            </p>
          </div>
        </div>

        <div className="col-4" style={{marginBottom: '20px'}}>
          <div className="dest-card">
            <Link to="/italy" className="dest-link">
              <img src="./images/Italy/Vatican city.jpeg" alt="Vatican City" className="dest-img" />
              <h4 className="dest-title">Rome, Italy</h4>
            </Link>
            <p className="dest-text">
              Explore ancient history, the Colosseum, and enjoy world-famous cuisine in the heart of Rome.
            </p>
          </div>
        </div>

        <div className="col-4" style={{marginBottom: '20px'}}>
          <div className="dest-card">
            <Link to="/france" className="dest-link">
              <img src="./images/france/Eiffel Tower.jpg" alt="Eiffel Tower" className="dest-img" />
              <h4 className="dest-title">Paris, France</h4>
            </Link>
            <p className="dest-text">
              The city of love and lights. Visit the Eiffel Tower, the Louvre, and charming cafes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Destinations;