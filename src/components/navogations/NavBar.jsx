import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center px-6 w-full h-20 text-green-200 bg-black  fixed z-10">
      <div>
        <h1 className="font-signature text-5xl">Fortunatus</h1>
      </div>

      <ul className=" gap-4 cursor-pointer capitalize font-medium text-gray-400 hidden md:flex">
        {links.map(({id, link}) => (

        <li className="hover:scale-105 duration-200" key={id}>{link}</li>
        ))}
        
      </ul>

      <div onClick={() =>setNav(!nav)} className="text-gray-400 cursor-pointer z-10 px-2 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className="flex flex-col py-16 items-center absolute top-14 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden capitalize gap-4 text-4xl">
        {links.map(({id, link}) => (

            <li className="" key={id}>{link}</li>
        ))}
      </ul>
      )}

      
    </div>
  );
};

export default NavBar;
