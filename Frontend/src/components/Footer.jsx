import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <Link to="/facebook" className="text-2xl text-white hover:text-blue-500">
          <FaFacebook />
        </Link>
        <Link to="/twitter" className="text-2xl text-white hover:text-blue-400">
          <FaTwitter />
        </Link>
        <Link to="/instagram" className="text-2xl text-white hover:text-pink-500">
          <FaInstagram />
        </Link>
        <Link to="/linkedin" className="text-2xl text-white hover:text-blue-600">
          <FaLinkedin />
        </Link>
      </div>
      <p className="text-center text-sm">
        © 2025 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
