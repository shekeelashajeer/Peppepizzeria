
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Index from './pages/Index';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
