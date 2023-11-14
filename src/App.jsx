// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {  Routes, Route } from 'react-router-dom'; 
import './App.scss';

import Home from './pages/Home/Home';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
