import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
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
      link: "portfolio",
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
    <div className="relative">
      <div className="flex justify-between items-center px-6 w-full h-20  bg-black fixed z-10">
        <div className="text-green-200 font-signature text-5xl cursor-pointer">
        <Link   to="home" smooth duration={500}>Fortunatus</Link>
        </div>

        <ul className=" gap-4 cursor-pointer capitalize font-medium text-gray-400 hidden md:flex ">
          {links.map(({ id, link }) => (
            <li className="hover:scale-105 duration-200 " key={id}>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
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
            {links.map(({ id, link }) => (
              <li className="" key={id}>
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
