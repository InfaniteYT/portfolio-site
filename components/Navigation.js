import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ backgroundColor: 'gold', color: 'black' }}>
            <ul>
                <li><Link to="/home" style={{ color: 'black' }}>Home</Link></li>
                <li><Link to="/services" style={{ color: 'black' }}>Services</Link></li>
                <li><Link to="/about" style={{ color: 'black' }}>About Us</Link></li>
                <li><Link to="/contact" style={{ color: 'black' }}>Contact</Link></li>
            </ul>
            <h1>Industrial Maintenance Navigation</h1>
        </nav>
    );
};

export default Navigation;