import React from "react";
import { FaAward } from "react-icons/fa";
import { RiFolder4Fill } from "react-icons/ri";
import { BsStack } from "react-icons/bs";

const About = () => {
  const getYearsOfExperience = () => {
    var today = new Date();
    var startYear = 2019;
    var currentYearsOfExperience = today.getFullYear() - startYear;

    return currentYearsOfExperience;
  };

  return (
    <div
      name="about"
      className="w-full lg:px-[10vw] h-screen  text-gray-200 mt-36 md:mt-0"
    >
      <div className="mx-auto p-4 max-w-screen-lg flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-200 font-signature capitalize">
            About Me
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <article className="shadow-md shadow-green-200 rounded-md hover:scale-110 duration-200 bg-[#2c2c6c] hover:bg-gray-900 text-xl  border border-gray-400 p-3 flex flex-col gap-1">
              <FaAward className="text-green-200" />
              <h5>Experience</h5>
              <small>{getYearsOfExperience()}+ Years Working</small>
            </article>

            <article className="shadow-md shadow-green-200 rounded-md hover:scale-110 duration-200 bg-[#2c2c6c] hover:bg-gray-900 text-xl border border-gray-400 p-3 flex flex-col gap-1">
              <BsStack className="text-green-200" />
              <h5>Stack</h5>
              <small>Full - Stack</small>
            </article>

            <article className="shadow-md shadow-green-200 rounded-md hover:scale-110 duration-200 bg-[#2c2c6c] hover:bg-gray-900 text-xl border border-gray-400 p-3 flex flex-col gap-1">
              <RiFolder4Fill className="text-green-200" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
            <div />
          </div>
          <p className="text-xl mt-8 text-gray-300">
            As an Experienced Fullstack Developer, I am excited to bring my
            skills and expertise to your team. With over four plus years of
            experience building innovative digital solutions for various
            companies and industries, I specialize in ReactJS, React-Redux,
            Nextjs, Nodejs, Ruby, and Ruby on Rails with Postgres Tailwind,
            bootstrap. <br /> I have a proven track record of implementing SCRUM
            practices both remotely and on-site, ensuring optimal efficiency and
            productivity for the entire team. My dedication to continuous
            learning and improvement has allowed me to stay up-to-date with the
            latest trends and best practices in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
