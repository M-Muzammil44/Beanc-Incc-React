
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import Services from './Component/services'; // Import your Services component
import AboutUs from './Component/about_us'; // Import your AboutUs component
import PastWork from './Component/past_work'; // Import your PastWork component
import ContactUs from './Component/contact_us'; // Import your ContactUs component
import './Component/style.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/past_work" element={<PastWork />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
