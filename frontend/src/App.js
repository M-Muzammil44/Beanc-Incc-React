
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Services from './Pages/services'; // Import your Services component
import AboutUs from './Pages/about_us'; // Import your AboutUs component
import PastWork from './Pages/past_work'; // Import your PastWork component
import History from './Pages/history'; // Import your ContactUs component
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
          <Route path="/history" element={<History />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
