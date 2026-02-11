import { useEffect, useState } from 'react';

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,capital');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setDestinations(data.slice(0, 25));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (loading) return <p className="text">Loading destinations...</p>;
  if (error) return <p className="text" style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className="page">
      <div className="main">
        <h2 className="booking-title">International Destinations (API)</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <ul className="place-list">
           
            {destinations.map((country, index) => (
              <li key={index}>
                <div className="flag-container">
                  <img 
                    src={country.flags.png} 
                    alt="Flag" 
                    className="flag-img" 
                  />
                  <span className="country-info">
                    <h3 className="country-name">{country.name.common}</h3>
                    Region: {country.region} <br />
                    Capital: {country.capital}
                  </span>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;