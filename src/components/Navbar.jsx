import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-10 font-jakarta">
      <div className="flex items-center justify-between px-6 py-3 mx-auto bg-white rounded-full">
        <Link to="/" className="text-2xl font-bold">Logo Here</Link>

        <div className="hidden space-x-5 md:flex">
          <Link to='/'>Home</Link>
          <Link to='/'>What We Do</Link>
          <Link to='/'>What It Works</Link>
          <Link to='/about'>About Us</Link>
        </div>

        <div className="hidden space-x-5 md:flex">
          <button>Log In</button>
          <button className="px-5 py-3 text-white bg-black rounded-full">Sign Up</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaAlignJustify className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center py-5 space-y-5 text-white">
            <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
            <Link to='/' onClick={() => setIsOpen(false)}>What We Do</Link>
            <Link to='/' onClick={() => setIsOpen(false)}>What It Works</Link>
            <Link to='/about' onClick={() => setIsOpen(false)}>About Us</Link>
            <button onClick={() => setIsOpen(false)}>Log In</button>
            <button className="px-5 py-3 text-white bg-black rounded-full" onClick={() => setIsOpen(false)}>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
