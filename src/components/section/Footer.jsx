import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-mono mb-4">Connect with me</h4>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com/justin.alcendor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com/kareem4285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/j_taurus42"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-alcendor-16a738131/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm font-mono">
          © {new Date().getFullYear()} Justin C. Alcendor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;