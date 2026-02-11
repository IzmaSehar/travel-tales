
const About = () => {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-12 about-title">
          About Travel Tales
        </div>
      </div>

      <div className="row">

        <div className="col-8 main">
          <h2 className="about-heading">Who We Are</h2>
          <p>We are a team of travel lovers who aim to help you explore the most beautiful destinations around the world.</p>
          <p className="italic-line">Our goal is to make travel simple, exciting, and full of memories.</p>
          <p>We share <b>information</b> about famous places, <u>travel tips</u>, and stories that inspire your next trip.</p>

          <h2 className="about-heading">Our Vision</h2>
          <p>Our vision is to build a community where travelers share real experiences and connect through their love for exploration. We want to make travel information easy, authentic, and enjoyable for everyone.</p>

          <h3 className="about-heading-small">What We Offer</h3>
          <p>From detailed travel guides to inspiring photo galleries, we offer everything a traveler needs. You can find tips about budget trips, top tourist spots, peaceful getaways, and cultural experiences.</p>

          <h2 className="about-heading">Our Belief</h2>
          <p>We believe that traveling is not about how far you go, but how deeply you feel the journey.</p>

          <div className="mission-section">
            <div className="center-title">Our Mission</div>

            <table className="mission-table">
              <thead>
                <tr>
                  <th>Goal</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Discover</td>
                  <td>Find hidden travel gems.</td>
                </tr>
                <tr>
                  <td>Inspire</td>
                  <td>Encourage travelers to explore.</td>
                </tr>
                <tr>
                  <td>Guide</td>
                  <td>Provide reliable travel tips and updates.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-4 sidebar">
          
          <div className="side-box">
            <h4>Customer Favorites</h4>
            <ul className="side-list">
              <li>Bali, Indonesia</li>
              <li>Dubai, UAE</li>
              <li>Maldives</li>
              <li>Singapore</li>
              <li>Kyoto, Japan</li>
            </ul>
          </div>

          <div className="side-box">
            <h4>Travel Safety Tips</h4>
            <ul>
              <li>Keep copies of documents</li>
              <li>Stay hydrated</li>
              <li>Check weather updates</li>
              <li>Use trusted transport</li>
              <li>Have emergency contacts</li>
            </ul>
          </div>

          <div className="side-box">
            <h4>Why Choose Us?</h4>
            <p>Affordable packages, trusted guides, simple booking, and 24/7 support.</p>
          </div>

        </div>
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

export default About;