import React from 'react'
import {FaLinkedin, FaTwitterSquare, FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  const socials = [
    {
      id: 1,
      icon:<FaLinkedin size={30}/>,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/fortunatus-ihedoro/"
    },
    {
      id: 2,
      icon:<FaTwitterSquare size={30}/>,
      name: "Twitter",
      href: "https://twitter.com/FortuneOnyeka"
    },
    {
      id: 3,
      icon:<FaGithub  size={30}/>,
      name: "Github",
      href: "https://github.com/fortuneonyeka"
    },
    {
      id: 4,
      icon:<FaFacebookF  size={30}/>,
      name: "Facebook",
      href: "https://web.facebook.com/fortune.onyeka"
    },
    {
      id: 5,
      icon:<FaInstagram  size={30}/>,
      name: "Instagram",
      href: "https://www.instagram.com/evergreenfortune/"
    },
    {
      id: 6,
      icon:<HiOutlineMail  size={30}/>,
      name: "Email",
      href: "mailto:ihedfortune@gmail.com"
    },
    {
      id: 7,
      icon:<BsFillPersonLinesFill  size={30}/>,
      name: "Resume",
      href: "/IhedoroFortunatus.pdf",
      download: true
    }
  ]


  return (
    <div className="hidden lg:flex flex-col top-[28%] left-0 fixed">
      <ul className="">
        {socials.map(({icon, name, href,id, download}) => (
          <li key={id} className="flex justify-between items-center w-40 h-14 px-4 py-2 ml-[-100px]"><a href={href} target="_blank" rel="noreferrer" className={`flex justify-between rounded-tr-md items-center w-full text-white gap-2 p-2 hover:ml-[90px] hover:shadow-2xl duration-300 hover:rounded-lg  ${name === "Linkedin" ? "bg-blue-700": name === "Instagram" ? "bg-[#fa7e1e]": name === "Github" ? "bg-[#171515]" : name === "Facebook" ? "bg-[#4267B2]" : name === "Twitter" ? "bg-[#1DA1F2]" : name === "Email" ? "bg-[#4285F4]" : "bg-gray-700"}`} download={download}>{name}  {icon}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks