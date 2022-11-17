import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />

      <main className='main-wrapper bg-gray-100 vh-80 py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
