import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import WhyChooseUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Service from './pages/Services/Service';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <>
            <Slider />
            <WhyChooseUs />
            <Testimonials />
          </>
        } />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
