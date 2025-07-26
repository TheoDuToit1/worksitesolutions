import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/ProfessionalHeader';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ServiceDetail from './components/Services/ServiceDetail';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ContentProtection from './utils/ContentProtection';
import './styles/App.css';
import './styles/social-buttons.css';

const AppContent = () => {
  return (
    <>
      <ContentProtection />
      <div className="app">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
