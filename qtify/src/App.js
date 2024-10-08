import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage/HomePage"
import {Container} from '@mui/material';
import "./App.css";

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      </Router>  
  </div>
  );
}

export default App;
