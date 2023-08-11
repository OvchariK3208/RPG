import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Passwords from './pages/Passwords'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/passwords" element={ <Passwords /> } />
      </Routes>
    </>
  );
}

export default App;
