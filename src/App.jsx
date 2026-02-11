import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Hotels from './pages/Hotels';
import Destinations from './pages/Destinations';
import DestinationsList  from './components/DestinationsList';

import Italy from './pages/Dest/Italy';
import France from './pages/Dest/France';
import Turkey from './pages/Dest/Turkey';
import Switzerland from './pages/Dest/Switzerland';
import Maldives from './pages/Dest/Maldives';

const App = () => {
  return (
    <>
      <BrowserRouter basename="/travel-tales">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="registration" element={<Registration />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking" element={<Booking />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="destinations" element={<Destinations />} />
            
            <Route path="global-destinations" element={<DestinationsList />} />

            <Route path="italy" element={<Italy />} />
            <Route path="france" element={<France />} />
            <Route path="turkey" element={<Turkey />} />
            <Route path="switzerland" element={<Switzerland />} />
            <Route path="maldives" element={<Maldives />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;