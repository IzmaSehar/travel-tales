const Hotels = () => {
  return (
    <div className="container page">
      <h1 className="accom-title">Luxurious Accommodations Around the World</h1>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/burj-al-arab.jpeg" alt="Burj Al Arab" className="dest-img" />
            <h4>Burj Al Arab</h4>
            <p>Symbol of modern luxury in Dubai.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/badrutts palace.jpg" alt="badrutts" className="dest-img" />
            <h4>Badrutts</h4>
            <p>Legendary alpine retreat in St. Moritz with classic elegance.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/Ritz Paris.jpeg" alt="Ritz Paris" className="dest-img" />
            <h4>Ritz Paris</h4>
            <p>Near the Louvre and Eiffel Tower. French luxury.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/hotel Sacher.webp" alt="Sacher" className="dest-img" />
            <h4>Sacher</h4>
            <p>Vienna's historic luxury hotel, home of the Original Sacher-Torte.</p>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/luxary hotel.jpg" alt="luxury Hotel" className="dest-img" />
            <h4>Ritz Paris</h4>
            <p>Contemporary comfort with refined premium hospitality.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/Milaidhoo Maldives.jpg" alt="Milaidhoo" className="dest-img" />
            <h4>Milaidhoo Maldives</h4>
            <p>Boutique island resort with private villas and turquoise lagoon views.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/ocean front resort.jpg" alt="ocean front resort" className="dest-img" />
            <h4>Ocean Front Resort</h4>
            <p>Relaxing beachfront escape with stunning sea panoramas.</p>
          </div>
        </div>

        <div className="col-3">
          <div className="dest-card">
            <img src="./images/Hotels/snow view.jpg" alt="snow view" className="dest-img" />
            <h4>Snow View</h4>
            <p>Cozy winter escape surrounded by serene snowy landscapes.</p>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '18px' }}>
        <div className="col-12 text">
            <a href="https://www.instagram.com" target="_blank" >Instagram</a> |
            <a href="https://www.facebook.com" target="_blank" >Facebook</a> |
            <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>

    </div>
  );
};

export default Hotels;