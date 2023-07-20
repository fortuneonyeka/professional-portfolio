import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:gap- md:flex-row">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-16">I am a Full Stack Developer</h2>
          <p className="text-gray-400 py-2 max-w-md">
            I have over 3 years of experience, I
            have developed innovative digital solutions for multiple companies
            across various industries. I specialize in Javascript, Nodejs, ReactJS, React-Redux, Nextjs,
            Ruby, and Ruby on Rails with Postgres, Tailwind and GraphQL.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-2 my-1 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 cursor-pointer">
              <span className="group-hover:scale-110">Projects </span>
              <span className="px-4 group-hover:rotate-90 duration-300 group-hover:scale-150"><MdKeyboardArrowRight size={25}/></span>
              </button>
          </div>
        </div>

        <div className=" w2/3 mx-auto md:w-full">
          <img src={HeroImage}  alt="my profile" className="rounded-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Home;
