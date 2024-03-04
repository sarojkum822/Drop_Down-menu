import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from './DropDown';

const Navbar = () => {

  const [loggedIn, setloggedIn] = useState(false);
  const [dropMenu,setDropMenu] = useState(false);

  const handleClick = () => {
    setloggedIn(!loggedIn)

  }

  const handleDropMenu =()=>{
    setDropMenu(!dropMenu);
  }

  return (

    <>
      <div className='w-full h-[4vw] bg-white border-b-2 border-b-gray-400 flex justify-between'>
        <div className='logo'>
          <p>Logo</p>
        </div>

        <div className='p-4 text-[1.2vw] font-light'>
          <ul className='flex gap-6'>
            <li className='cursor-pointer hover:border-b-[1px] border-b-gray-950 select-none' id='home'>Home</li>
            <li className='cursor-pointer hover:border-b-[1px] border-b-gray-950 select-none' id='blog'>Blog</li>
            <li className='cursor-pointer hover:border-b-[1px] border-b-gray-950 select-none'>Protfolio_Link</li>
            <div className='ml-16'>
              <button className='cursor-pointer hover:border-b-[1px] border-b-gray-950 flex select-none' onClick={handleDropMenu}>
                Contact
                <p className=' mt-1'><IoMdArrowDropdown /></p>
                </button> 
                {dropMenu && <DropDown/>}

            </div>
            <div className='ml-2 w-[6vw] '>
              <li className='cursor-pointer hover:border-b-[1px] border-b-gray-950 select-none w--=' onClick={handleClick}>{loggedIn ? "saroj kumar" : "Login"}</li>

            </div>

          </ul>
        </div>

      </div>

      {/* <section id='home'>

        <HomePage />

      </section> */}


    </>
  )
}

export default Navbar