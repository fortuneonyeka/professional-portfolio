import React from "react";
import carPhreak from "../../assets/portfolio/CarPhreak.png"
import fitnessApp from "../../assets/portfolio/fitnessApp.png"
import homeFinder from "../../assets/portfolio/homeFinder.png"
import blogApp from "../../assets/portfolio/blgApp.png"
import taskManager from "../../assets/portfolio/taskManager.png"
import fortuneMart from "../../assets/portfolio/fortuneMart.png"
import { Link } from "react-router-dom";

const Portfolio = () => {

const projects = [
  {
    image: carPhreak,
    github: "https://github.com/fortuneonyeka/car-rentals",
    demo: "https://car-rentals-topaz.vercel.app/"
  },
  {
    image: homeFinder,
    github: "https://github.com/fortuneonyeka/home-finder-react",
    demo: "https://homefinder.pages.dev/"
  },
  {
    image: fortuneMart,
    github: "https://github.com/fortuneonyeka/E-commerce-shop",
    demo: "https://cheerful-kitsune-74eee2.netlify.app/"
  },
  {
    image: fitnessApp,
    github: "https://github.com/fortuneonyeka/everfit-app",
    demo: "https://everfit-by-fortunatus.netlify.app/"
  },
  {
    image: blogApp,
    github: "https://github.com/fortuneonyeka/redux-blog-app",
    demo: "https://github.com/fortuneonyeka/redux-blog-app"
  },
  {
    image: taskManager,
    github: "https://github.com/fortuneonyeka/task-manager",
    demo: "https://incredible-daifuku-613ca3.netlify.app/"
  }
]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen lg:px-[10vw] ">
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-signature inline border-b-4 border-gray-500 text-green-200 capitalize">Portfolio</p>
          <p className="py-4 text-xl">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {projects.map(({image, github, demo}) => (
            <div className="shadow-lg shadow-gray-600 rounded-xl "> 
            <img src={image} alt="" className="rounded-lg duration-200 hover:scale-110 lg:w-[20vw]lg: h-[20vh] w-full"/>
            <div className="flex items-center justify-center pt-4 gap-4">
              <a href={demo} target="_blank" rel="noreferrer"   className="w-1/2 px-4 py-3 text-xl duration-200 hover:scale-110 bg-orange-400 rounded-lg text-center">Demo</a>
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 px-4 py-3 text-xl duration-200 hover:scale-110 bg-blue-400 rounded-lg text-center">Github</a>
            </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
