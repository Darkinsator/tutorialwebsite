import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Jason Blankenberg</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/gif-redirect">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link> {/* New link */}
      </div>
    </nav>
  );
};

export default Navbar;