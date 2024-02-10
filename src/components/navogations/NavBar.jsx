import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: '/',
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 4,
      name: "Experience",
      link: "/experience",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-6 w-full h-20  bg-black fixed z-10">
        <div className="text-green-200 font-signature text-5xl cursor-pointer">
        <a   href="/">Fortunatus</a>
        </div>

        <ul className=" gap-4 cursor-pointer capitalize font-medium text-gray-400 hidden md:flex ">
          {links.map(( item) => (
            <li className="hover:scale-105 duration-200 " key={item.id}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="text-gray-400 cursor-pointer z-10 px-2 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col py-16 items-center absolute top-14 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden capitalize gap-4 text-4xl ">
            {links.map((item) => (
              <li className="" key={item.id}>
                <a
                  onClick={() => setNav(!nav)}
                  href={item.link}
                  
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
