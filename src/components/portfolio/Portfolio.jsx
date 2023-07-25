import React from "react";
import carPhreak from "../../assets/portfolio/CarPhreak.png"
import fitnessApp from "../../assets/portfolio/fitnessApp.png"
import homeFinder from "../../assets/portfolio/homeFinder.png"
import blogApp from "../../assets/portfolio/blgApp.png"
import taskManager from "../../assets/portfolio/taskManager.png"
import fortuneMart from "../../assets/portfolio/fortuneMart.png"

const Portfolio = () => {

const projects = [
  { id: 1,
    image: carPhreak,
    github: "https://github.com/fortuneonyeka/car-rentals",
    demo: "https://car-rentals-topaz.vercel.app/",
    descrip: "This is a car rental/showcase application where a user can filter and rent any car.",
  },
  { id: 2,
    image: homeFinder,
    github: "https://github.com/fortuneonyeka/home-finder-react",
    demo: "https://homefinder.pages.dev/",
    descrip: "This is a Real estate frontend application built with modern technologies and animations",
  },
  { id: 3,
    image: fortuneMart,
    github: "https://github.com/fortuneonyeka/E-commerce-shop",
    demo: "https://cheerful-kitsune-74eee2.netlify.app/",
    descrip: "This an ecommerce application where a user can view, save items in the cart and go ahead to checkout",
  },
  { id: 4,
    image: fitnessApp,
    github: "https://github.com/fortuneonyeka/everfit-app",
    demo: "https://everfit-by-fortunatus.netlify.app/",
    descrip: "This a gym application built with rapid ExerciseDB API, Youtube Search and Download, with different exercises,equipments and similar exercises on youtube",
  },
  { id: 5,
    image: blogApp,
    github: "https://github.com/fortuneonyeka/redux-blog-app",
    demo: "https://github.com/fortuneonyeka/redux-blog-app",
    descrip: "This is an awesome CRUD React-Redux blog application that consumes Placeholder Api. This application is a CRUD application with the ability to comment, like and unlike a blog",
  },
  { id: 6,
    image: taskManager,
    github: "https://github.com/fortuneonyeka/task-manager",
    demo: "https://incredible-daifuku-613ca3.netlify.app/",
    descrip: "This is a full CRUD redux task manager app.A user can add monitor, modify and remove task on completion",
  }
]

  return (
    <div name="portfolio" className=" text-white md:h-screen lg:px-[10vw] mt-24 lg:md-0">
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-">
          <p className="text-4xl px-4 font-signature inline border-b-4 border-gray-500 text-green-200 capitalize">Portfolio</p>
          <p className="p-4 text-xl">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8 px-4 sm:px-0 bg-gradient-to-b from-black to-gray-800">
          {projects.map(({image, github, demo, id,descrip}) => (
            <div className="shadow-md shadow-green-200  rounded-xl flex flex-col" key={id}> 
            <div className="">
            <img src={image} alt="" className="rounded-lg duration-200 hover:scale-105 hover:shadow-md hover:shadow-indigo-400 lg:w-[20vw]lg: h-[20vh] w-full"/>
            </div>
            <div className="p-1">{descrip}</div>
            <div className="flex items-center justify-center px-4  gap-4  pb-4">
              <a href={demo} target="_blank" rel="noreferrer"   className="w-1/2 py-1 px-3 text-xl duration-200 hover:scale-110  bg-transparent outline rounded-lg text-center hover:text-green-200">Demo</a>
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 py-1 px-3 text-xl duration-200 hover:scale-110 bg-blue-400 rounded-lg text-center hover:text-green-200">Github</a>
            </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
