const Home = () => {
  return (
    <div className="container page">
      
      <div className="announce-wrap">    
          <div className="announce-items">
            Great Autumn Sale - Flights 20% OFF!&nbsp; | &nbsp;
            Student discounts available - show ID at booking. &nbsp; | &nbsp;
            New: Family packages to Europe starting $499.
          </div>
      </div>
    
      <div className="row">
        <div className="col-12 text" >
          <h1>Explore the world with us</h1>
          <p>Your journey begins here!</p>
        </div>
      </div>

      <div className="row">
        
        <div className="col-8 main">
          <p>Travel Tales helps you discover amazing places, learn about new cultures, and create unforgettable memories.</p>
          <h3>Plan Your Next Trip</h3>
          <p>Ready to explore? Start planning your next adventure with Travel Tales.</p>

          <video controls>
            <source src="./video/video.mp4" type="video/mp4" />
          </video>

          <audio controls style={{marginTop: '8px'}}>
            <source src="./audio.mp3" type="audio/mp3" />
          </audio>
        </div>

        <div className="col-4 sidebar">
          <div className="side-box">
            <h4>Top Destinations</h4>
            <ul>
              <li>France - Paris</li>
              <li>Italy - Rome</li>
              <li>Turkey - Istanbul</li>
              <li>Switzerland - Zurich</li>
              <li>USA - New York</li>
            </ul>
          </div>

          <div className="side-box">
            <h4>Traveler Reviews</h4>
            <p>"Amazing hotel picks - highly recommended." - Ayesha</p>
            <p>"Best local guide we found!" - Omar</p>
          </div>

          <div className="side-box">
            <h4>Fun Fact</h4>
            <p>The Great Wall of China is over 13,000 miles long!</p>
          </div>

          <div className="side-box">
            <h4>Tips</h4>
            <p>Travel smart with our guides and plan your trips well.</p>
          </div>
        </div>
      </div>

      <h3 style={{marginTop:'16px'}}>Top Travel Destinations</h3>

      <div className="row">
        <div className="col-4">
          <img src="./images/home-image/taj-mehal.jpg" alt="Taj Mahal" className="home-img" />
          <p className="img-caption">Taj Mahal, India</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/the great wall of china.jpg" alt="Great Wall" className="home-img" />
          <p className="img-caption">Great Wall of China</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/time square.jpg" alt="Times Square" className="home-img" />
          <p className="img-caption">Times Square, New York</p>
        </div>
      </div>

      <div className="row" style={{marginTop:'10px'}}>
        <div className="col-4">
          <img src="./images/home-image/trafalgar.jpg" alt="Trafalgar" className="home-img" />
          <p className="img-caption">Trafalgar</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/sydney.jpg" alt="Sydney" className="home-img" />
          <p className="img-caption">Sydney</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/northern lights.jpg" alt="Northern Lights" className="home-img" />
          <p className="img-caption">Northern Lights</p>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src="./images/home-image/machu.jpg" alt="Machu Picchu" className="home-img" />
          <p className="img-caption">Machu Picchu</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/santorini.jpg" alt="Santorini" className="home-img" />
          <p className="img-caption">Santorini</p>
        </div>
        <div className="col-4">
          <img src="./images/home-image/the colosseum.jpg" alt="Colosseum" className="home-img" />
          <p className="img-caption">Colosseum</p>
        </div>
      </div>

      <div className="row" style={{marginTop:'18px'}}>
        <div className="col-12 text">
            <a href="https://www.instagram.com" target="_blank" >Instagram</a> |
            <a href="https://www.facebook.com" target="_blank">Facebook</a> |
            <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>

    </div>
  );
};

export default Home;