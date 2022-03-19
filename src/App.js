import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
