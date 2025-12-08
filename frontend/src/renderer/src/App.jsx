import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Slot from './pages/slot';
import Fitur from './pages/fitur';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      <div className="font-poppins bg-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slot" element={<Slot />} />
            <Route path="/fitur" element={<Fitur />} />
            <Route path="/about" element={<About />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
