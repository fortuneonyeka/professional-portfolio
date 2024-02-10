import React from 'react'


const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5  border-gray-200">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      

    </div>
    <div
      className="flex justify-between flex-wrap mt-10 border-t
       border-gray-200 sm:px-16 px-6 py-10"
    >
      <a href="/" className="cursor-pointer font-signature text-xl text-gray-300">@2023 Fortunatus. All Rights Reserved &copy;</a>
      <div className=" font-signature text-xl">
        <a href="/" className="cursor-pointer text-gray-300">
          Privacy Policy
        </a>
        <a href="/" className="cursor-pointer text-gray-300">
          Terms of Use
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer