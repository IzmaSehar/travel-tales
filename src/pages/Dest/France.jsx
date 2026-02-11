
const France = () => {
  return (
    <div className="container page">
      <h1 className="text">France</h1>

      <p>
        France is one of the most romantic and artistic countries in the world. Its cities are filled with 
        history, beauty, and charm. From the Eiffel Tower to the French Riviera, every corner tells a story.
      </p>

      <div className="place-list">
        <h2>Top Destinations in France</h2>
        <ul>
          <li>Paris - The City of Love</li>
          <li>Nice - Beautiful beaches and seaside views</li>
          <li>Versailles - Famous royal palace and gardens</li>
          <li>Provence - Lavender fields and countryside charm</li>
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
            <td>Paris</td>
            <td>Eiffel Tower, Louvre Museum</td>
            <td>April - June</td>
          </tr>
          <tr>
            <td>Nice</td>
            <td>Beaches, Old Town</td>
            <td>May - September</td>
          </tr>
          <tr>
            <td>Versailles</td>
            <td>Royal Palace</td>
            <td>April - October</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text">Beautiful Views of France</h2>

      <div className="gallery">
        <figure>
          <img src="./images/france/Eiffel Tower.jpg" alt="Eiffel Tower" />
          <figcaption>Eiffel Tower</figcaption>
        </figure>

        <figure>
          <img src="./images/france/Versailles.jpg" alt="Versailles" />
          <figcaption>Versailles</figcaption>
        </figure>

        <figure>
          <img src="./images/france/Louvre meuseum.jpg" alt="Louvre Museum" />
          <figcaption>Louvre Museum</figcaption>
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

export default France;