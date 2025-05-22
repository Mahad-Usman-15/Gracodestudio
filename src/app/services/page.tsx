"use client";
import service from "../image/ser.jpg";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { ReactElement, useState, useRef } from "react";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import Link from "next/link";
import { LuPlane } from "react-icons/lu";

type Services = {
  id: number;
  icon: ReactElement;
  desc: string;
  ser: string;
  techs: string;
  language: string;
  link: string;
};

type Industries = {
  id: number;
  icons: ReactElement;
  desc: string;
  industry: string;
};

const industries: Industries[] = [
  {
    id: 0,
    icons: <LiaHospitalSolid />,
    desc: "Clinics, private practices, hospitals, wellness brands etc",
    industry: "Healthcare",
  },
  {
    id: 1,
    icons: <FaCartShopping />,
    desc: "Fashion brands, D2C stores, marketplaces, online boutiques etc",
    industry: "Ecommerce Brands",
  },
  {
    id: 2,
    icons: <MdOutlineCastForEducation />,
    desc: "Schools, online course platforms, tutors, academies etc",
    industry: "Education",
  },
  {
    id: 3,
    icons: <IoFastFoodOutline />,
    desc: "Restaurants, cafes, catering services, food delivery brands etc",
    industry: "Food Beverages",
  },
  {
    id: 4,
    icons: <LuPlane />,
    desc: "Hotels, tour operators, travel agencies, booking platforms etc",
    industry: "Travel & Hospitality",
  },
];

const services: Services[] = [

  {
    id: 1,
    ser: "Web Development",
    desc: "Robust and scalable websites built with modern technologies to fit your business goals.",
    icon: <CgWebsite />,
    techs: "Next JS,Tailwind CSS,React Libraries",
    language: "Typescript,Javascript,Python",
    link: "/pricing",
  },
  {
    id: 2,
    ser: "Web Design",
    desc: "User-friendly and visually appealing website designs optimized for engagement and UX.",
    icon: <MdDesignServices />,
    techs: "Next JS,Tailwind CSS,React Libraries",
    language: "Typescript,Html CSS",
    link: "/pricing",
  },
    {
    id: 0,
    ser: "Graphic Design",
    desc: "Creative visuals, branding, and marketing materials tailored to captivate your audience.",
    icon: <FaPaintBrush />,
    techs: "Canva,Pixlr Suite,Picsart",
    language: "English",
    link: "/graphicdesigning",
  },
  {
    id: 3,
    ser: "Digital Marketing",
    desc: "Strategies across SEO, social media, and advertising to grow your online presence.",
    icon: <FaBullhorn />,
    techs: "Social Media Ads",
    language: "English",
    link: "/digitalmarketing",
  },
];

export default function Services() {
  const [open, setOpen] = useState<null | Services>(null);
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const industryScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const amount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full mt-20">
        <Image src={service} alt="name" className="w-full h-96 object-cover opacity-60" />
        <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
        <span className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl sm:text-5xl text-white font-bold">
            What We<strong className="text-yellow-500 font-bold"> Offer</strong>
          </h1>
          <p className="text-lg text-wrap text-center text-white">
            Turning your vision into reality with creative <br /> digital strategies and designs.
          </p>
          <Link href="/contact">
            <button className="text-lg bg-gradient-to-r from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold p-2 rounded-lg shadow-sm">
              Let`s Collaborate
            </button>
          </Link>
        </span>
      </div>

      {/* Social Media Services Section */}
      <div className="flex flex-col items-center px-2 py-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
          Our Social Media Services
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Comprehensive solutions tailored to amplify your brand across every platform.
        </p>

        {/* Mobile Scroll Buttons */}
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
            <div className="bg-slate-200 rounded-xl p-6 w-[90%] max-w-md relative">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={() => setOpen(null)}
              >
                ✖
              </button>
              <h1 className="text-2xl font-bold text-amber-700 mb-2">{open.ser}</h1>
              <p className="text-gray-700 mb-3 font-semibold">{open.desc}</p>
              <h2 className="text-md font-semibold text-yellow-600">Technologies Used:</h2>
              <p className="text-gray-600 mb-2">{open.techs}</p>
              <h2 className="text-md font-semibold text-yellow-600">Languages Used:</h2>
              <p className="text-gray-600">{open.language}</p>
              <Link href={open.link}>
                <button className="mt-4 bg-gradient-to-r from-orange-600 to-yellow-900 text-white font-semibold p-2 rounded-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Industries We Serve Section */}
      <div className="flex flex-col items-center px-2 py-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
          Industries We Serve
        </h1>
        <p className="text-gray-300 text-center mt-2">Empowering Businesses Across All Sectors.</p>

        <div className="relative w-full mt-10">
          <button
            onClick={() => scroll(industryScrollRef, "left")}
            className="block sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <FaArrowAltCircleLeft className="fill-amber-400 w-8 h-8" />
          </button>

          <div
            ref={industryScrollRef}
            className="flex sm:flex-wrap sm:justify-center gap-4 overflow-x-auto sm:overflow-visible px-2 py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="snap-start shrink-0 sm:shrink sm:w-80 flex flex-col items-center justify-center px-4 py-4 space-y-2 bg-gray-800 rounded-2xl w-80 h-48"
              >
                <h1 className="text-3xl text-amber-300">{ind.icons}</h1>
                <h1 className="text-xl text-white font-bold text-center">{ind.industry}</h1>
                <p className="text-gray-300 font-semibold text-sm text-center">{ind.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(industryScrollRef, "right")}
            className="block sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <FaArrowAltCircleRight className="fill-amber-400 w-8 h-8" />
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl text-white font-bold mt-4">& Many More</h1>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">
          Our Process to Elevate Your Website
        </h1>
        <p className="text-center text-gray-500 font-semibold">
          Follow these steps to enhance your online presence.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 m-1 mb-10">
          {[
            "Optimize Your Website Content",
            "Enhance User Experience",
            "Get a Free Website Audit",
            "Boost Your SEO Rankings",
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10">
                {idx + 1}
              </div>
              <div className="mt-2 text-center text-sm font-semibold text-gray-400">
                {step.split(" ").slice(0, 3).join(" ")}
                <br />
                {step.split(" ").slice(3).join(" ")}
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-6 left-full w-36 h-0.5 bg-yellow-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}