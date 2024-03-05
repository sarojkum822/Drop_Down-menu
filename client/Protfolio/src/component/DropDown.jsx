import React from 'react';
import {Link} from 'react-router-dom'

const DropDown = () => {
  return (
    <div className="absolute mt-[13vw] bg-sky-500 shadow-md  rounded-b-lg">
      <ul className="list-none text-white">
        <li
          className="hover:bg-green-400 hover:text-black p-2 cursor-pointer border-b-2  border-gray-200"
        >
        <h1>Instagram</h1>
        </li>
        <li
           className="hover:bg-green-400 hover:text-black p-2 cursor-pointer border-b-2  border-gray-200"
        >
          Whatsapp
        </li>
        <li
          className="hover:bg-green-400 hover:text-black p-2 cursor-pointer border-b-2  border-gray-200"
        >
          Mail
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
