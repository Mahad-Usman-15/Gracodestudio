"use client"
import Image from "next/image"
import image from "../image/cloaked-ai-img.webp"
import { ReactElement } from "react"
import pic from "../image/banner.jpg"
import { FaHandsHelping, FaLightbulb, FaUsers, FaClock, FaCogs, FaChartLine } from "react-icons/fa";

type Corevalues={
    id:number
    reacticons:ReactElement
    desc:string
    title:string
}


const corevalue: Corevalues[] = [
  {
    id: 0,
    reacticons: <FaHandsHelping />,
    title: "Client-Centric",
    desc: "We prioritize our clients' goals and experiences, crafting tailored solutions that meet real business needs.",
  },
  {
    id: 1,
    reacticons: <FaLightbulb />,
    title: "Innovation",
    desc: "We embrace creativity and forward-thinking, ensuring our strategies and designs stay ahead of the curve.",
  },
  {
    id: 2,
    reacticons: <FaUsers />,
    title: "Teamwork",
    desc: "Collaboration fuels our agency. We believe the best results come from working together with trust and purpose.",
  },
  {
    id: 3,
    reacticons: <FaClock />,
    title: "Reliability",
    desc: "Deadlines matter. We deliver what we promise, when we promise it — without compromising on quality.",
  },
  {
    id: 4,
    reacticons: <FaCogs />,
    title: "Technical Excellence",
    desc: "Our developers and designers maintain high standards of performance, accessibility, and scalability.",
  },
  {
    id: 5,
    reacticons: <FaChartLine />,
    title: "Results-Driven",
    desc: "We focus on measurable outcomes that impact your brand — whether it's conversions, traffic, or engagement.",
  },
];

export default function About() {
const scroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};


    return (
        <div className="flex flex-col items-center  justify-center">



            <div className="w-full relative mt-20">

                <Image src={pic} alt="pic" className="  w-full h-96  opacity-60 shadow-lg  shadow-inherit" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <span className="absolute inset-0 flex flex-col items-center justify-center space-y-6">

                    <h1 className="text-2xl sm:text-5xl text-white font-bold">About Our <strong className=" text-yellow-500 font-bold ">Company</strong></h1>
                    <p className=" text-lg text-wrap text-center text-white">We`re dedicated to delivering exceptional services, fostering innovation, and creating meaningful, <br /> measurable impact for our clients.</p>
<button
  onClick={() => scroll("section1")}
  className="cursor-pointer text-lg bg-gradient-to-r from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold p-2 rounded-lg shadow-sm transition"
>
  Learn More
</button>                </span>



            </div>


            <div className="bg-black w-full">

                <div className="flex flex-row sm:flex-row flex-wrap items-center justify-center gap-24 mt-10 ">
                    <Image src={image} alt="pic " height={500} width={500} />
                    <span className="flex flex-col w-full max-w-lg  p-2">
                        <h1 className="text-2xl text-white font-bold text-center sm:text-start">Our Mission & Vision</h1>

                        <p className="text-lg text-gray-500 font-normal text-center sm:text-start text-wrap mt-5">To empower businesses through innovative solutions that drive growth, efficiency, and sustainable We commit to excellence in every project  and lasting relationships with every client.</p>
                        <p className="text-lg text-gray-500 font-normal text-center sm:text-start text-balance mt-5">
                            To be the most trusted partner for businesses worldwide recognized for our transformative solutions and unwavering commitment  to client success.We  envision a future where every organization we work with achieves its fullest potential.</p>
                    </span>
                </div>
<div     id="section1" className="flex flex-col  flex-wrap items-center justify-center p-2 space-y-4 gap-6 mt-10">
<h1 className="text-2xl sm:text-3xl text-white font-bold">Our Core Values</h1>

<div className="flex flex-row items-center flex-wrap justify-center p-2 gap-6">
    {
    corevalue.map((core)=>(
<div key={core.id} className="flex flex-col items-center p-2 space-y-4 w-72 h-40">
    <h1 className="bg-amber-200 rounded-2xl p-2 w-10 h-10 items-center flex justify-center">{core.reacticons}</h1>
<h1 className="text-xl font-bold text-white">{core.title}</h1>
<p className="text-gray-400 font-normal text-xs text-center">{core.desc}</p>
</div>
    ))
}
</div>


</div>
            </div>


        </div>
    )
}