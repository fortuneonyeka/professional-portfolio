import React from 'react'
import github from "../../assets/github.png"
import framerMotion from "../../assets/framerMotion.jpeg"
import headlessui from "../../assets/headlessui.png"
import MUI from "../../assets/MUI.png"
import node from "../../assets/node.png"
import javascript from "../../assets/javascript.png"
import graphql from "../../assets/graphql.png"
import css from "../../assets/css.png"
import Rubyonrails from "../../assets/Rubyonrails.png"
import tailwind from "../../assets/tailwind.png"
import react from "../../assets/react.png"
import firebase from "../../assets/firebase.png"
import mongoDb from "../../assets/mongoDb.png"
import nextjs from "../../assets/nextjs.png"
import redux from "../../assets/redux.png"
import figma from "../../assets/figma.png"

const Experience = () => {

  const experience = [
    {
      title: "Javascript",
      img: javascript,
      color: "shadow-yellow-500",
      textColor: "text-yellow-500"
    },
    {
      title: "react",
      img: react,
      color: "shadow-[#00D7FE]",
      textColor: "text-[#00D7FE]"
    },
    {
      title: "redux",
      img: redux,
      color: "shadow-indigo-600",
      textColor: "text-indigo-600"
    },
    {
      title: "nextjs",
      img: nextjs,
      color: "shadow-white",
      textColor: "text-white"
    },
    {
      title: "nodejs",
      img: node,
      color: "shadow-green-500",
      textColor: "text-green-500"
    },
    {
      title: "ruby on rails",
      img: Rubyonrails,
      color: "shadow-red-400",
      textColor: "text-red-400"
    },
    {
      title: "graphql",
      img: graphql,
      color: "shadow-pink-400",
      textColor: "text-pink-400"
    },
    {
      title: "mongoDb",
      img: mongoDb,
      color: "shadow-green-400",
      textColor: "text-green-400"
    },
    {
      title: "firebase",
      img: firebase,
      color: "shadow-yellow-500",
      textColor: "text-yellow-500"
    },
    {
      title: "tailwind",
      img: tailwind,
      color: "shadow-[#43A8B3]",
      textColor: "text-[#43A8B3]"
    },
    {
      title: "css",
      img: css,
      color: "shadow-blue-500",
      textColor: "text-blue-500"
    },
    {
      title: "framer Motion",
      img: framerMotion,
      color: "shadow-indigo-600",
      textColor: "text-indigo-600"
    },
    {
      title: "headlessui",
      img: headlessui,
      color: "shadow-blue-600",
      textColor: "text-blue-600"
    },
    {
      title: "MUI",
      img: MUI,
      color: "shadow-blue-400",
      textColor: "text-blue-400"
    },
    {
      title: "figma",
      img: figma,
      color: "shadow-green-200",
      textColor: "text-green-200"
    },
    {
      title: "github",
      img: github,
      color: "shadow-white",
      textColor: "text-white"
    },
  ]
  return (
    <div name="experience" className="md:h-screen  w-full   lg:px-[19vw]   flex flex-col gap-4 md:pt-20 py-12 just-center items-center">
      <div className="max-w-screen-lg mx-auto">

      <div className=" text-gray-200">
        <p className="text-4xl font-signature text-green-200 inline border-b-4 border-gray-500">Experience</p>
        <p className="italic p-4 text-xl">These but not limited to these are the technologies I have worked with</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6  py-4 px-4 sm:px-0">
        {experience.map(({title, img,color, textColor}) => (
          <div className={`hover:scale-105 duration-200 p-2 rounded-lg shadow-lg ${color}`} key={title}>
            <img src={img} alt="experience" className={`w-[300px] h-[110px] rounded-lg hover:scale-105 duration-200`}/>
            <p className={`text-center items-center capitalize ${textColor}`}>{title}</p>
            </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default Experience