import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leader from './pages/Leader';
import History from './pages/History';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/history" element={<History />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;