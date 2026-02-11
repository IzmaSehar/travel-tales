import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <ul className="navbar-nav menubar">
            
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/registration" className="nav-link">Registration</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/booking" className="nav-link">Booking</Link>
            </li>

            <li className="nav-item">
              <Link to="/hotels" className="nav-link">Accommodations</Link>
            </li>

            <li className="nav-item">
              <Link to="/destinations" className="nav-link">Destinations</Link>
            </li>

            <li className="nav-item">
              <Link to="/global-destinations">International List (API)</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;