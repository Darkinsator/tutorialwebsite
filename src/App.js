import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import GifRedirect from './GifRedirect'; // Import the GifRedirect component
import ContactMe from './ContactMe'; // Import the ContactMe component
import Projects from './Projects';
import Skills from './Skills';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/gif-redirect" element={<GifRedirect />} />
            <Route path="/contact" element={<ContactMe />} /> {/* New route */}
            <Route path="/skills" element={<Skills/>} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;