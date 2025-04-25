import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './recy/Sidebar';
import Header from './recy/Header';
import MainContent from './recy/MainContent';
import Showcase from './pages/Showcase';
import Mypage from './pages/Mypage';
import Heart from './pages/Heart';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-section">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/heart" element={<Heart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
