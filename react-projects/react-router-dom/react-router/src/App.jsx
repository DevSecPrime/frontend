import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Men from './pages/Men';
import Women from './pages/women';
import Course from './pages/Course';
import CourseDetails from './pages/CourseDetails';

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutUs' element={<About />}></Route>
        <Route path='/contactUs' element={<Contact />}></Route>

        {/* Nested Routing  */}
        <Route path='/products' element={<Product />}>
          <Route path='men' element={<Men />}></Route>
          <Route path='women' element={<Women />}></Route>
        </Route>

        {/* Dynamic routing */}
        <Route path='/courses' element={<Course />} />
        <Route path='/courses/:id' element={<CourseDetails />} />

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
