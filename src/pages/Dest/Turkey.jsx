
const Turkey = () => {
  return (
    <div className="container page">
      <h1 className="text">Turkey</h1>
      <br />
      <p>
        Turkey is where Asia meets Europe. It is a land of history, culture, and breathtaking landscapes. 
        From the magical balloons of Cappadocia to the busy bazaars of Istanbul, Turkey offers endless beauty and tradition.
      </p>

      <div className="place-list">
        <h2>Top Places in Turkey</h2>
        <ul>
          <li>Istanbul - Hagia Sophia, Bosphorus Bridge</li>
          <li>Cappadocia - Hot air balloon rides</li>
          <li>Antalya - Mediterranean beaches</li>
          <li>Pamukkale - White mineral terraces</li>
        </ul>
      </div>

      <h2>Travel Table</h2>

      <table className="travel-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Attraction</th>
            <th>Best Time to Visit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Istanbul</td>
            <td>Historic Mosques & Bazaars</td>
            <td>April - June</td>
          </tr>
          <tr>
            <td>Cappadocia</td>
            <td>Hot Air Balloons</td>
            <td>March - May</td>
          </tr>
          <tr>
            <td>Antalya</td>
            <td>Beaches, Resorts</td>
            <td>May - September</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-center">Beautiful Views of Turkey</h2>

      <div className="gallery">
        <figure>
          <img src="./images/turkey/Antalya.jpg" alt="Antalya" />
          <figcaption>Antalya</figcaption>
        </figure>

        <figure>
          <img src="./images/turkey/Cappadocia.jpg" alt="Cappadocia" />
          <figcaption>Cappadocia</figcaption>
        </figure>

        <figure>
          <img src="./images/turkey/Istanbul.jpg" alt="Istanbul" />
          <figcaption>Istanbul</figcaption>
        </figure>
      </div>

      <div className="row">
        <div className="col-12 text mission-section">
          <p>Follow Us: 
            <a href="https://www.instagram.com" target="_blank" > Instagram</a> |
            <a href="https://www.facebook.com" target="_blank"> Facebook</a> |
            <a href="https://twitter.com" target="_blank" > Twitter</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Turkey;