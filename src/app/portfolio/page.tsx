"use client"
import Image from "next/image"
import pic from "../image/banner3.jpg"
import Link from "next/link";
import { StaticImageData } from "next/image"
import micro from "../image/micro.webp"
import {  useState } from "react";
import blog from "../image/blogging.jpg"
import { RiNextjsFill } from "react-icons/ri";
import { SiSanity } from "react-icons/si";
import Ecommerce from "../image/crikcet.jpg"
import furniro from "../image/furniro.jpeg"
import { SiTailwindcss } from "react-icons/si";
import Ai from "../image/aiblog.webp"
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaReact,FaStripe } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import logo from "../image/graph.jpg"
import logo2 from "../image/graph2.jpg"
import logo3 from "../image/logo3.jpg"
type Portfolio = {
  id: number
  name: string
   tech: React.ComponentType[] // Store component types instead of elements

  image: StaticImageData
  slug: string
}
const portfolio: Portfolio[] = [{
  id: 0,
  name: "Furniture Ecommerce Website",
  tech: [RiNextjsFill , SiSanity , SiTailwindcss],
  image: furniro,
  slug: "UI/UX Design"
},
{
  id: 1,
  name: "Clothing Ecommerce Website",
  tech: [RiNextjsFill, SiSanity , SiTailwindcss],
  image: furniro,
  slug: "UI/UX Design"
},
{
  id: 2,
  name: "Cricket Ecommerce Website",
  tech: [RiNextjsFill , TbBrandFramerMotion , FaStripe ,SiTailwindcss , FaReact ],
  image: Ecommerce,
  slug: "Web Development"
},
{
  id: 3,
  name: "Tech Ecommerce Website",
  tech: [RiNextjsFill , TbBrandFramerMotion , SiTailwindcss , FaReact ],
  image: Ecommerce,
  slug: "Web Development"


},
  
{
  id: 4,
  name: "MicroFinance Web App",
  tech: [RiNextjsFill , DiMongodb , SiTailwindcss , FaReact ],
  image: micro,
  slug: "Web Development"

},
  
{
  id: 5,
  name: "AI Blogging Wesbite",
  tech: [RiNextjsFill , SiTailwindcss , TbBrandFramerMotion , FaReact ],
  image: Ai,
  slug: "Web Development"
},
{
  id: 6,
  name: "Blogging Wesbite",
  tech: [RiNextjsFill , SiTailwindcss ,],
  image: blog,
  slug: "UI/UX Design"
},
{
  id: 7,
  name: "Tasty Bistry Logo",
  tech: [SiCanva],
  image: logo,
  slug: "Graphic Design"
},
{
  id: 8,
  name: "Football Club Logo",
  tech: [SiCanva],
  image: logo2,
  slug: "Graphic Design"
},

{
  id: 9,
  name: "Landing page design",
  tech: [SiCanva],
  image: logo3,
  slug: "Graphic Design"
},

]

export default function Portfolio() {
  const categories = [
    "All", "Web Development", "UI/UX Design", "Graphic Design"
  ]
  const [projects, setisprojects] = useState(portfolio)
  const [activecategory, setiscategory] = useState("All")
  const handlecategory = (category: string) => {
    setiscategory(category);
    if (category === "All") {
      setisprojects(portfolio)
    } else {
      setisprojects(portfolio.filter((item) => item.slug === category))
    }
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center relative mt-20">
        <Image src={pic} alt="" className="w-full opacity-60 h-96" />
        <div className="absolute bg-black opacity-55 inset-0 w-full" />
        <span className="absolute flex flex-col items-center inset-0 justify-center p-2 space-y-4 ">

          <h1 className="text-2xl sm:text-5xl text-white font-bold">Our <strong className=" text-yellow-500 font-bold ">Portfolio</strong></h1>
          <p className=" text-lg text-wrap text-center text-white">Crafting Fast, Modern, and Scalable Web Solutions.</p>
                      <Link href="/contact"> <button className=" text-lg bg-gradient-to-r  from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold p-2 rounded-lg shadow-sm">Let`s Collaborate</button></Link>     

        </span>
      </div>



      <div className="mt-10 ">
        <div className="  flex flex-col items-center justify-center md:items-start p-1 space-y-6 m-8  ">
  <h1 className="text-2xl sm:text-3xl font-bold text-white">Our Projects</h1>
  <ul className="flex flex-row items-center justify-center flex-wrap gap-6">
    {
      categories.map((category) => (
        <button key={category} onClick={() => handlecategory(category)}>
          <li className={`text-lg ${activecategory === category ? "bg-amber-300" : "bg-gray-300"} rounded-3xl border-1 border-white p-2 text-amber-900 font-normal text-center`}>
            {category}
          </li>
        </button>
      ))
    }
  </ul>
</div>

<span className="flex flex-row items-center justify-center p-2 gap-6 flex-wrap mt-6">
  {projects.map((port) => (
    <div
      key={port.id}
      className="flex flex-col items-center justify-center w-60 h-72 p-3  border border-gray-500 drop-shadow-2xl shadow-amber-500 space-y-4"
    >
      <Image
        src={port.image}
        alt={port.name}
        className="w-full object-cover h-44 p-1 rounded-sm"
      />
      <h1 className="text-lg text-white font-semibold">{port.name}</h1>

      <ul className="flex flex-wrap gap-3 items-center justify-center">
        {port.tech.map((IconComponent, i) => ( // Now using IconComponent which is the component
          <li key={`${port.id}-tech-${i}`} className="text-white text-xl">
            <IconComponent /> {/* Instantiate the component here */}
          </li>
        ))}
      </ul>
    </div>
  ))}
</span>

      </div>
    </div>
  )
}