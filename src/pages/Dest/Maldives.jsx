
const Maldives = () => {
  return (
    <div className="container page">
      
      <h1 className="text">Maldives</h1>

      <p>
        The Maldives is famous for its crystal-clear waters, luxurious resorts, and pristine beaches. 
        It's a tropical paradise perfect for honeymooners, adventure seekers, and nature lovers.
      </p>

      <div className="place-list">
        <h2>Top Islands in Maldives</h2>
        <ul>
          <li>Male - Shopping, local food, markets</li>
          <li>Maafushi - Resorts and snorkeling</li>
          <li>Vaadhoo - Glowing Beach “Sea of Stars”</li>
          <li>Sun Island - Water sports, peaceful nature</li>
        </ul>
      </div>

      <table className="travel-table">
        <thead>
          <tr>
            <th>Island</th>
            <th>Famous For</th>
            <th>Best Time to Visit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Male</td>
            <td>Shopping, Local food, Markets</td>
            <td>November - April</td>
          </tr>
          <tr>
            <td>Maafushi</td>
            <td>Resorts, Snorkeling</td>
            <td>December - April</td>
          </tr>
          <tr>
            <td>Vaadhoo</td>
            <td>Glowing Beach “Sea of Stars”</td>
            <td>January - March</td>
          </tr>
          <tr>
            <td>Sun Island</td>
            <td>Water sports, Peaceful nature</td>
            <td>October - May</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2 className="text">Beautiful Views of Maldives</h2>

      <div className="gallery">
        <figure>
          <img src="./images/maldives/Maafushi.jpg" alt="Maafushi" />
          <figcaption>Maafushi</figcaption>
        </figure>

        <figure>
          <img src="./images/maldives/Vaadhoo.jpg" alt="Vaadhoo" />
          <figcaption>Vaadhoo</figcaption>
        </figure>

        <figure>
          <img src="./images/maldives/Sun Island.jpg" alt="Sun Island" />
          <figcaption>Sun Island</figcaption>
        </figure>
      </div>

      <div className="row">
        <div className="col-12 text mission-section">
          <p>Follow Us: 
            <a href="https://www.instagram.com" target="_blank" > Instagram</a> |
            <a href="https://www.facebook.com" target="_blank"> Facebook</a> |
            <a href="https://twitter.com" target="_blank"> Twitter</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Maldives;