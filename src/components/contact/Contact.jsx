import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex flex-col items-center justify-center">
      <div className="md:flex md:flex-col md:justify-center md:items-center md:mt-36">
        <div className="text-gray-200 text-center text-xl py-4 pb-8">
          <p className="font-signature text-green-200 text-4xl capitalize inline border-b-4 border-gray-500">Contact form</p>
          {/* <p className="font-medium italic capitalize">Get in touch with the form below</p> */}
        </div>
        <div className="">
          <form action="https://getform.io/f/bad6f370-2cc8-42ed-897d-5936cc8091ee" method="POST" className="flex flex-col w-full md:w-[50vw] justify-center mx-auto gap-5">
            <input type="text" name="name" placeholder="Enter your name" 
            className="p-2  border shadow-2xl rounded-md text-black text-xl focus:outline-none focus:rounded-lg focus:bg-transparent focus:text-white focus:border-4 focus:border-green-200"/>

            <input type="email" name="email" placeholder="Enter your email" 
            className="p-2 border shadow-2xl rounded-md text-black text-xl focus:outline-none focus:rounded-lg focus:bg-transparent focus:text-white focus:border-4 focus:border-green-200"/>

            <textarea name="message" rows="10" placeholder="Enter your message here" className=" p-2 border shadow-2xl rounded-md text-black text-lg focus:outline-none focus:rounded-lg focus:bg-transparent focus:text-white focus:border-4 focus:border-green-200" />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-600  py-2 md:py-3 my-5 mx-auto  w-[45vw] font-bold text-xl md:text-2xl rounded-md shadow-md hover:shadow-green-200 hover:bg-transparent  hover:text-green-200 hover:rounded-2xl hover:scale-110 duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact