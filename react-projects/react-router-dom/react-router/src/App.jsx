import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutUs' element={<About />}></Route>
        <Route path='/contactUs' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
