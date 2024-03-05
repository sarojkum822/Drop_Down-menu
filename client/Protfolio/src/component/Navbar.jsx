import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from './DropDown';
// import Form from './Form';
import Card from '../Pages/Card';

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  const handleClick = () => {
    setloggedIn(!loggedIn);
  };

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-400 flex justify-end gap-10 items-center h-[5vw] px-4">
        {/* Logo */}
        <div className="logo">
          {/* <p>Logo</p> */}
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-gray-700 font-light ">
          <li className="hover:text-gray-800 cursor-pointer">Home</li>
          <li className="hover:text-gray-800 cursor-pointer">Blog</li>
          <li className="hover:text-gray-800 cursor-pointer">Portfolio_Link</li>
        </ul>

        {/* Contact Button and Dropdown */}
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center hover:text-gray-800 cursor-pointer"
            onClick={handleDropMenu}
          >
            Contact
            <IoMdArrowDropdown className="ml-1 mt-1" />
          </button>
          {dropMenu && <DropDown/>}

          {/* Login Button */}
          <button
            className="hover:text-gray-800 min-w-[8vw]"
            onClick={handleClick}
          >
            {loggedIn ? "Saroj" : "Login"}
          </button>
        </div>
        
      </nav>
      <div className='bg-zinc-100 w-full h-screen'>
        {/* <Form/> */}
        <Card/>
      </div>
      
      
    </>
  );
};

export default Navbar;
