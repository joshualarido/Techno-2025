import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import techno2025logo from "../assets/techno2025logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 py-4 px-4 md:px-12 flex justify-between items-center text-white transition duration-300">

        {/* Logo */}
        <img
          src={techno2025logo}
          alt="technologo"
          className="w-1/4 md:w-1/6 lg:w-1/12"
        />

        {/* Desktop Nav Links */}
        <div className="max-md:hidden md:flex flex-row justify-center items-center gap-10">
          <Link to="/">
            <p className="text-xl md:text-2xl hover:drop-shadow-[0_5px_15px_rgba(255,215,0,0.6)]">
              《 Home 》
            </p>
          </Link>
          <Link to="/events">
            <p className="text-xl md:text-2xl hover:drop-shadow-[0_5px_15px_rgba(255,215,0,1)]">
              《 Events 》
            </p>
          </Link>
        </div>
        
        <a
        href="https://registration.himtibinus.or.id"
        target="_blank"
        rel="noopener noreferrer"
        className="max-md:hidden "
        >
        <Button text="Register" />
        </a>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col items-center gap-8 text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className="text-lg">《 Home 》</p>
          </Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>
            <p className="text-lg">《 Events 》</p>
          </Link>
          <a
            href="https://registration.himtibinus.or.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            <Button text="Register" />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
