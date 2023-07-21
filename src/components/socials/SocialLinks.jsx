import React from 'react'
import {FaLinkedin, FaTwitterSquare, FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  const socials = [
    {
      icon:<FaLinkedin size={30}/>,
      name: "Linkedin"
    },
    {
      icon:<FaTwitterSquare size={30}/>,
      name: "Twitter"
    },
    {
      icon:<FaGithub  size={30}/>,
      name: "Github"
    },
    {
      icon:<FaFacebookF  size={30}/>,
      name: "Facebook"
    },
    {
      icon:<FaInstagram  size={30}/>,
      name: "Instagram"
    },
    {
      icon:<HiOutlineMail  size={30}/>,
      name: "Email"
    },
    {
      icon:<BsFillPersonLinesFill  size={30}/>,
      name: "Person"
    }
  ]


  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul className="">
        {socials.map(({icon, name}) => (
          <li key={icon} className="flex justify-between items-center w-40 h-14 px-4 py-2 ml-[-100px]"><a href="" className={`flex justify-between items-center w-full text-white gap-2 p-2 hover:ml-[100px] hover:rounded-lg  ${name === "Linkedin" ? "bg-blue-700": name === "Instagram" ? "bg-[#fa7e1e]": name === "Github" ? "bg-[#171515]" : name === "Facebook" ? "bg-[#4267B2]" : name === "Twitter" ? "bg-[#1DA1F2]" : name === "Email" ? "bg-[#4285F4]" : "gray-600"}`}>{name}  {icon}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks