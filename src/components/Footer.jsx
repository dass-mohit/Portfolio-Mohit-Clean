import React from "react";
import { FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/not.thatmohit/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://github.com/dass-mohit" target="_blank" rel="noopener noreferrer">
        <FaGithubAlt size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohitkumardass"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;