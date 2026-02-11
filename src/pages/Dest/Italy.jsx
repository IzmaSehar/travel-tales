
const Italy = () => {
  return (
    <div className="container page">
      
      <h1 className="text">Italy</h1>

      <p>
        Italy is a country of culture, cuisine, and creativity. It is home to ancient history, beautiful 
        cities, and world-famous art. Whether you explore Rome, Venice, or Florence, every step feels like 
        walking through a museum.
      </p>

      <div className="place-list">
        <h2>Famous Italian Destinations</h2>
        <ul>
          <li>Rome - Ancient monuments and Colosseum</li>
          <li>Venice - City of canals and gondolas</li>
          <li>Florence - Renaissance art and museums</li>
          <li>Amalfi Coast - Stunning seaside views</li>
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
            <td>Rome</td>
            <td>Colosseum, Vatican City</td>
            <td>March - May</td>
          </tr>
          <tr>
            <td>Venice</td>
            <td>Canals, Gondola rides</td>
            <td>April - October</td>
          </tr>
          <tr>
            <td>Florence</td>
            <td>Art galleries, Museums</td>
            <td>May - September</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text">Beautiful Views of Italy</h2>

      <div className="gallery">
        <figure>
          <img src="./images/Italy/Florence meuseum.jpg" alt="Florence Museum" />
          <figcaption>Florence Museum</figcaption>
        </figure>

        <figure>
          <img src="./images/Italy/Gonodola rides.jpg" alt="Gondola Rides" />
          <figcaption>Gondola Rides</figcaption>
        </figure>

        <figure>
          <img src="./images/Italy/Vatican city.jpeg" alt="Vatican City" />
          <figcaption>Vatican City</figcaption>
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

export default Italy;