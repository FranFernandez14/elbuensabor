import React from 'react';
import './App.css';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisDatos from './Pages/MisDatos';

export default function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Home />} />
                <Route path='/register' element={<Home />} />
                <Route path='/MisDatos' element={<MisDatos />} />
            </Routes>
        </Router>
    </div>
  );
}



function Background() {
  return (
    <div className="bg"><div></div></div>
  )
}
