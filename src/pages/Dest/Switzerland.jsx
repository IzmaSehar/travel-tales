
const Switzerland = () => {
  return (
    <div className="container page">

      <h1 className="text">Switzerland</h1>

      <p>
        Switzerland is known for peace, mountains, and luxury. It’s one of the most beautiful 
        and clean countries in the world. The air is fresh, the lakes are clear, and the scenery 
        is unforgettable.
      </p>

      <div className="place-list">
        <h2>Top Places in Switzerland</h2>
        <ul>
          <li>Zurich - Calm lakes and modern beauty</li>
          <li>Lucerne - Wooden bridges and old town charm</li>
          <li>Interlaken - Adventure capital of Switzerland</li>
          <li>Geneva - City of peace and culture</li>
        </ul>
      </div>

      <table className="travel-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Famous For</th>
            <th>Best Time to Visit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zurich</td>
            <td>Lakes, shopping</td>
            <td>May - September</td>
          </tr>
          <tr>
            <td>Lucerne</td>
            <td>Bridges, mountains</td>
            <td>June - August</td>
          </tr>
          <tr>
            <td>Interlaken</td>
            <td>Adventure, paragliding</td>
            <td>April - October</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text">Beautiful Views of Switzerland</h2>

      <div className="gallery">
        <figure>
          <img src="./images/switzerland/Interlaken.jpg" alt="Interlaken" />
          <figcaption>Interlaken</figcaption>
        </figure>

        <figure>
          <img src="./images/switzerland/Lucerne.jpg" alt="Lucerne" />
          <figcaption>Lucerne</figcaption>
        </figure>

        <figure>
          <img src="./images/switzerland/Zurich.jpg" alt="Zurich" />
          <figcaption>Zurich</figcaption>
        </figure>
      </div>

      <div className="row">
        <div className="col-12 text mission-section">
          <p>Follow Us: 
            <a href="https://www.instagram.com" target="_blank"> Instagram</a> |
            <a href="https://www.facebook.com" target="_blank"> Facebook</a> |
            <a href="https://twitter.com" target="_blank"> Twitter</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Switzerland;