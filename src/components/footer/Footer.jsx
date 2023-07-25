import React from 'react'
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5  border-gray-200">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      

    </div>
    <div
      className="flex justify-between flex-wrap mt-10 border-t
       border-gray-200 sm:px-16 px-6 py-10"
    >
      <Link to="home" smooth duration={500} className="cursor-pointer font-signature text-xl text-gray-300">@2023 Fortunatus. All Rights Reserved &copy;</Link>
      <div className=" font-signature text-xl">
        <Link to="home" smooth duration={500} className="cursor-pointer text-gray-300">
          Privacy Policy
        </Link>
        <Link to="home" smooth duration={500} className="cursor-pointer text-gray-300">
          Terms of Use
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer