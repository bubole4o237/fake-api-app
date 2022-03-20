import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SelectedPost from './Components/SelectedPost/SelectedPost.jsx';

import './App.css';



function App() {

  // let navigate = useNavigate();

  let isUpdate = true;

  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<Main />} />
        <Route path="/posts/:id" element={<Main />} />
        <Route path="/posts/:id/update" element={<SelectedPost isUpdate={isUpdate} />} />
        <Route path="/user/:id/posts" element={<Main />} />
        <Route path="/create/post" element={<SelectedPost />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
