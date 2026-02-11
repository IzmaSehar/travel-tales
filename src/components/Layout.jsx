import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Navbar />

      <div className="content-wrapper">
        <Outlet /> 
      </div>

      <Footer />
    </div>
  );
};

export default Layout;