import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Pages/navbar';
import { Home } from './components/Pages/home';
// import { About } from './components/Pages/About';
// import DocumentGallery, { DigitalSeva } from './components/Pages/DigitalSeva';
// import { DigitalPrinting } from './components/Pages/DigitalPrinting';
// import { Events } from './components/Pages/Events';
import Footer from './components/Pages/footer';
import DocumentGallery from './components/Pages/DigitalSeva';
import ContactForm from './components/Pages/Home/Contact';
import About from './components/Pages/About';
import DigitalPrintingGallery from './components/Pages/DigitalPrinting';
import Events from './components/Pages/Events';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/digital-seva" element={<DocumentGallery />} />
            <Route path="/digital-printing" element={<DigitalPrintingGallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/concact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;