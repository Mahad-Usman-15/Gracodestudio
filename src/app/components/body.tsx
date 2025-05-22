"use client"
import Image from "next/image"
import { useRef } from "react";

import { StaticImageData } from "next/image"
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { FaPaintBrush, FaBullhorn,FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import { ReactElement } from "react";
import { TiTick } from "react-icons/ti";
import ban from "../web_design_bg2.png"
import avatar from "../avatar.jpg"
import { RiNextjsFill } from "react-icons/ri";
import { SiSanity } from "react-icons/si";
import Ecommerce from "../image/crikcet.jpg"
import furniro from "../image/furniro.jpeg"
import { SiTailwindcss } from "react-icons/si";
import Link from "next/link"

import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";

import { FaArrowRightToBracket } from "react-icons/fa6";

import CountUp from 'react-countup';

type Faqs = {
  id: number
  question: string
  answer: string
}
type Services = {
  id: number;
  icon: ReactElement;
  desc: string;
  ser: string;
  techs: string,
  link:string
  language: string
};
type Blogs = {
  id: number
  title: string,
  slug:string
  date: string,
  desc: string,

}
type Portfolio = {
  id: number
  name: string
 tech: React.ComponentType[]
  image: StaticImageData
}
const portfolio: Portfolio[] = [{
  id: 0,
  name: "Furniture Ecommerce Website",
  tech: [RiNextjsFill , SiSanity , SiTailwindcss],
  image: furniro,

},
{
  id: 1,
  name: "Clothing Ecommerce Website",
  tech: [RiNextjsFill, SiSanity , SiTailwindcss],
  image: furniro,
  
},
{
  id: 2,
  name: "Cricket Ecommerce Website",
  tech: [RiNextjsFill , TbBrandFramerMotion , FaStripe ,SiTailwindcss , FaReact ],
  image: Ecommerce,

},
{
  id: 3,
  name: "Tech Ecommerce Website",
  tech: [RiNextjsFill , TbBrandFramerMotion , SiTailwindcss , FaReact ],
  image: Ecommerce,
  


},

]
const faqs: Faqs[] = [
  {
    id: 0,
    question: "What services do you offer?",
    answer: "We provide a wide range of digital services including custom website development, e-commerce solutions, UI/UX design, SEO optimization, web hosting, and website maintenance."

  },
  {
    id: 1,
    question: "How much does a typical website cost?",
    answer: "The cost varies depending on the complexity and features required. We offer flexible pricing plans to fit different budgets, starting from simple landing pages to full-scale e-commerce platforms."

  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer: "Project timelines depend on the size and scope of the website. On average, a standard website takes 3–6 weeks, while more complex projects can take longer. We'll provide a clear timeline before we start."

  },
  {
    id: 3,
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We provide ongoing support plans to keep your website running smoothly, including updates, backups, security monitoring, and content changes if needed."

  },
  {
    id: 4,
    question: " Can you help with redesigning an existing website?",
    answer: "Absolutely. Whether you want a full redesign or just a performance and UX upgrade, we’ll work with your current setup to create something modern, fast, and conversion-friendly."

  },
]

const services: Services[] = [
  {
    id: 0,
    ser: "Graphic Design",
    desc: "Creative visuals, branding, and marketing materials tailored to captivate your audience.",
    icon: <FaPaintBrush />,
    techs: "Canva,Pixlr Suite,Picsart",
    link:"/graphicdesigning",
    language: "English"
  },
  {
    id: 1,
    ser: "Web Development",
    desc: "Robust and scalable websites built with modern technologies to fit your business goals.",
    icon: <CgWebsite />,
    techs: "Next JS,Tailwind CSS,React Libraries",
      link:"/pricing",
    language: "Typescript,Javascript,Python"

  },
  {
    id: 2,
    ser: "Web Design",
    desc: "User-friendly and visually appealing website designs optimized for engagement and UX.",
    icon: <MdDesignServices />,
    techs: "Next JS,Tailwind CSS,React Libraries",
      link:"/pricing",
    language: "Typescript,Html CSS"
  },
  {
    id: 3,
    ser: "Digital Marketing",
    desc: "Strategies across SEO, social media, and advertising to grow your online presence.",
    icon: <FaBullhorn />,
    techs: "Social Media Ads",
      link:"/digitalmarketing",
    language: "English"
  },
];


const blogs: Blogs[] = [
  {
    id: 0,
    title: "Why Your Business Needs More Than Just a Website in 2025",
    date: "8 MAY 2025",
    slug:"web-needs",
    desc: "This post explains why a successful website needs with performance, SEO, responsiveness, and user strategy all working together."
  },
  {
    id: 1,
    title: 'From Idea to Launch: Our Web Development Process Explained',
    date: "10 MAY 2025",
    slug:"web-launch",
    desc: 'Give potential clients a transparent look into your workflow — from discovery and wireframes to development, testing, and deployment.'
  },
  {
    id: 2,
    title: 'Top 5 Website Mistakes Small Businesses Still Make',
    slug:"web-mistakes",
    desc: "Call out common issues like slow loading, poor mobile design, or unclear calls to action — and how your agency fixes them.",
    date: '12 MAY 2025'
  }
]

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed', highlight: true },
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Services' },
  { value: 90, suffix: '%', label: 'Satisfied Clients' },
];
export default function Main() {
    const serviceScrollRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null)
const [open, setOpen] = useState<null | typeof services[0]>(null);
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const amount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };



 











  return (
    <div >
    


      
   <div className="flex justify-center items-center flex-col bg-gradient-to-br from-yellow-950 via-yellow-600 to-yellow-300 p-4 md:p-8 gap-6 min-h-screen">
  <span className="mt-10 md:mt-20 flex items-center justify-center flex-col space-y-6 md:space-y-8 animate-fadeIn">
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white font-extrabold leading-tight"
    >
      Transform Your Social Media <br className="hidden sm:block" />
      Presence
    </motion.p>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center justify-center text-center text-gray-100 font-medium text-sm sm:text-base md:text-lg max-w-4xl px-4"
    >
      We help brands grow exponentially with data-driven social media strategies that deliver real results.
      <br className="hidden md:block" />
      Our team of certified experts combines cutting-edge analytics with creative storytelling to amplify your brand`s 
   
      voice across all platforms.
    </motion.p>
  </span>

  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex items-center justify-center w-full px-4"
  >
    <ul className="flex flex-row items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      {stats.map(({ value, suffix, label, highlight }, idx) => (
        <motion.li
          key={idx}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
          className={`flex flex-col items-center p-3 sm:p-4 rounded-lg ${
            highlight ? 'shadow-xs shadow-yellow-500 bg-yellow-700/30 backdrop-blur-sm' : ''
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-white font-bold">
            <CountUp end={value} duration={1.5} suffix={suffix} />
          </h1>
          <h1 className="text-sm sm:text-base md:text-lg text-white/90 mt-1">{label}</h1>
        </motion.li>
      ))}
    </ul>
  </motion.div>

  <motion.span 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="flex flex-col sm:flex-row items-center p-2 gap-3 sm:gap-4 mt-6 md:mt-8"
  >
    <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-lg sm:text-xl font-semibold rounded-lg text-white px-6 py-3 sm:px-8 sm:py-3 shadow-lg hover:shadow-amber-700/50 transition-all duration-300"
      >
        Get Started
      </motion.button>
    </Link>
    
    <Link href="/services">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
        whileTap={{ scale: 0.95 }}
        className="bg-transparent text-white text-lg sm:text-xl border-2 border-yellow-300 hover:bg-white hover:text-black rounded-lg font-semibold px-6 py-3 sm:px-8 sm:py-3 transition-all duration-300"
      >
        Our Services
      </motion.button>
    </Link>
  </motion.span>
</div>


      <div className="w-full overflow-x-auto ">


        <div className="flex flex-col items-center justify-center px-2 py-2 mb-10 ">
          <span className="flex flex-col items-center justify-center space-y-4 mt-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">Our Social Media Services</h1>
            <p className="text-center text-wrap text-gray-300">Comprehensive solutions tailored to
              amplify your brand across every platform - turning <br /> social media into your most powerful growth channel.</p>
          </span>

           <div className="relative w-full mt-10">
                <button
                  onClick={() => scroll(serviceScrollRef, "left")}
                  className="block sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <FaArrowAltCircleLeft className="fill-amber-400 w-8 h-8" />
                </button>
      
                <div
                  ref={serviceScrollRef}
                  className="flex sm:flex-wrap sm:justify-center gap-4 overflow-x-auto sm:overflow-visible px-2 py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                >
                  {services.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setOpen(s)}
                      className="snap-start shrink-0 sm:shrink sm:w-80 cursor-pointer flex flex-col items-center justify-center px-4 py-4 space-y-2 bg-gray-800 rounded-2xl w-80 h-48"
                    >
                      <h1 className="text-3xl text-amber-300">{s.icon}</h1>
                      <h1 className="text-xl text-white font-bold text-center">{s.ser}</h1>
                      <p className="text-gray-300 font-semibold text-sm text-center">{s.desc}</p>
                    </div>
                  ))}
                </div>
      
                <button
                  onClick={() => scroll(serviceScrollRef, "right")}
                  className="block sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <FaArrowAltCircleRight className="fill-amber-400 w-8 h-8" />
                </button>
              </div>
{open && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
    <div key={open.id} className="bg-slate-200 rounded-xl p-6 w-[90%] max-w-md relative animate-in fade-in zoom-in">
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-black"
        onClick={() => setOpen(null)}
      >
        ✖
      </button>
      <h1 className="text-xl sm:text-2xl font-bold text-amber-700 mb-2">{open.ser}</h1>
      <p className="text-gray-700 mb-3 font-semibold">{open.desc}</p>
  
  
      <h2 className="text-md font-semibold text-yellow-600">Technologies Used:</h2>
      <p className="text-gray-600 mb-2">{open.techs}</p>
      <h2 className="text-md font-semibold text-yellow-600">Languages Used:</h2>
      <p className="text-gray-600">{open.language}</p>
                    <Link href={open.link}>    <button className=" text-lg bg-gradient-to-r mt-4  from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold p-2 rounded-lg shadow-sm">Learn More</button></Link>  

    </div>
  </div>
)}


        </div>


        <div className="flex flex-col items-center justify-center p-2 m-2 mt-10">

        
          <span className="flex flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">Our Portfolio</h1>
            <p className="text-center text-wrap text-gray-400 font-semibold">Turning ideas into scalable digital products</p>
          </span>
          <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center p-2 m-2">
            {portfolio.map((port) => (
              <div key={port.id} className="flex flex-col items-center justify-center w-60 h-60 p-2 border border-1 border-gray-500 drop-shadow-2xl shadow-amber-500 space-y-4">
                <Image src={port.image} alt="mm" className="w-full object-cover h-44 overflow-hidden rounded-sm" />
                <h1 className="text-lg text-white font-semibold">{port.name}</h1>
                <span className="flex flex-row justify-between items-center ">
                  <ul className="flex flex-row flex-wrap  gap-3 items-center">
                     {port.tech.map((IconComponent, i) => ( // Now using IconComponent which is the component
          <li key={`${port.id}-tech-${i}`} className="text-white text-xl">
            <IconComponent /> {/* Instantiate the component here */}
          </li>
        ))}


                  </ul>
            
                </span>

              </div>
            ))}
          </div>
        <Link href="/portfolio"> <button className="text-xl font-bold text-amber-600 flex flex-row items-center gap-2"><FaArrowRightToBracket />Visit More</button></Link> 
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-2 mt-10">
          <span className="flex flex-col items-start justify-center m-3 space-y-3 space-x-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">Why Choose Our Social Media Agency</h1>
            <p className="text-start text-wrap text-gray-400 font-semibold"> We combine creativity with data-driven strategies to deliver exceptional results for our clients. <br />
              Our team of    certified social media experts stays ahead of platform algorithm  changes  and <br /> industry trends.</p>
            <ul className="flex flex-col items-start justify-center p-1 gap-2">
              <li className="flex flex-row items-center gap-3 text-gray-400 font-sans text-lg"><TiTick className="w-6 h-6 rounded-3xl bg-yellow-100 text-amber-700 " />Creative team with fresh, modern ideas</li>
              <li className="flex flex-row items-center gap-3 text-gray-400 font-sans text-lg"><TiTick className="w-6 h-6 rounded-3xl bg-yellow-100 text-amber-700 " />Clear communication and full transparency</li>
              <li className="flex flex-row items-center gap-3  text-gray-400 font-sans text-lg"><TiTick className="w-6 h-6 rounded-3xl bg-yellow-100 text-amber-700 " />Personalized focus on every client</li>
              <li className="flex flex-row items-center gap-3 text-gray-400 font-sans text-lg"><TiTick className="w-6 h-6 rounded-3xl bg-yellow-100 text-amber-700 " />Data-driven strategies built for growth</li>
            </ul>

          </span>
          <span className="">
            <Image src={ban} alt="" className="h-96 w-96" />
          </span>
        </div>


        <div className="flex flex-col  items-center justify-center p-2 mt-16 m-2">
          <span className="flex items-center flex-col p-2 space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">LATEST BLOGS</h1>
            <p className="text-center text-wrap text-gray-400 font-semibold">Smart Web Solutions for a Digital World</p>
          </span>
          <div className="p-4 flex flex-col sm:flex-row items-center justify-center flex-wrap  m-2 gap-28  lg:gap-18 mt-24 ">

            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col items-start justify-center p-4  space-y-3 w-96 h-20 mb-20">
                <h2 className="text-gray-500 font-normal ">{blog.date}</h2>
            <Link href={`/blogs/${blog.slug}`}>   <h1 className="text-white font-semibold text-xl hover:text-amber-500">{blog.title}</h1></Link> 
                <p className="text-gray-500 font-sans text-wrap text-start ">{blog.desc}</p>
                <span className="border w-full border-b-1 border-gray-500" />
                <span className="flex flex-row items-center gap-2">
                  <Image className="rounded-3xl w-10 h-10 mt-4" src={avatar} alt="mm" />
                  <h1 className="text- text-gray-400">By Mahad Usman</h1>
                </span>

              </div>
            ))}
          </div>

        </div>

     

        <div className="flex flex-col lg:flex-row  items-center justify-center gap-5 lg:gap-10 p-2 mt-16 m-2">
          <div className="flex flex-col items-start m-2 p-2 gap-4 space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text- text-white font-bold mb-5">Frequently asked  questions
              <p className="text-start text-wrap text-gray-400 font-semibold mt-5 text-lg">Let`s do our best to answer your most frequently asked questions.</p>
              <span className="mt-10 mb-5 p-3 m-1 flex flex-col items-start shadow-md shadow-orange-500 drop-shadow-sm border-1 rounded-lg  space-y-4 w-80 min-w-60 h-48">
                <h1 className="text-lg text-white">Still have questions?</h1>
                <p className="text-gray-500 font- semibold text-lg">Can`t find the answer you are looking for?</p>
                <Link href="/contact"><button className="bg-gradient-to-r from-amber-600 to-amber-900 rounded-lg hover:bg-yellow-200 text-lg p-2">Get in touch</button></Link>
              </span>
            </h1>
          </div>
          <div className="border-s-amber-50 rounded-lg flex flex-col items-start justify-center">
            {faqs.map((faq) => (
              <span key={faq.id} className=" flex flex-col  border-2 border-t-2 gap-5  border-amber-600 w-full px-2 py-2">
                <div className="flex flex-row items-center justify-between gap-10">
                  <h1 className="text-lg font-semibold text-white mt-2">{faq.question}</h1>


                   <button 
                                onClick={() => setIsOpen(isOpen === faq.id ? null : faq.id)} 
                                className="text-right"
                              >
                                {isOpen === faq.id ? 
                                  <FaMinus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" /> : 
                                  <FaPlus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" />
                                }
                              </button>



                </div>

                <AnimatePresence >
                  {isOpen === faq.id && (
                    <motion.p initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg overflow-hidden text-white w-full lg:w-96">{faq.answer}</motion.p>
                  )}
                </AnimatePresence>
              </span>
            ))}
          </div>
        </div>

      </div>

      

      </div>

      )
}
