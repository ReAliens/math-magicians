import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import background from './static/background.jpg';
import Quotes from './components/Quotes';

const App = () => {
  const backgroundImage = {
    backgroundImage: `url( ${background})`,
    height: '100vh',
  };
  return (
    <Router>
      <Navbar />
      <main className="bg-no-repeat bg-center bg-cover" style={backgroundImage}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
