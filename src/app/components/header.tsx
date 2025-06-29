"use client"
import Image from "next/image"
import Link from "next/link"

import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logo from "../image/logo.png"

export default function Navbar() {
  const [IsOpen, SetIsOpen] = useState(false)
  return (
    <div className="backdrop-blur-sm  border-b-slate-50 fixed w-full flex items-center justify-between p-2 header z-20">

      <div >
        <Link href="/" className="flex flex-row items-center gap-3">
          <Image src={logo} alt="logo" height={50} width={50} />
          <h1 className="font-extrabold text-yellow-200 text-xl lg:text-2xl">GracodeStudio</h1>
        </Link>
      </div>

      <div className="hidden lg:block flex  justify-center items-center p-4">
        <ul className="flex justify-center items-center flex-row gap-6">
          <Link href="/"><li className="text-yellow-200 font-bold  hover:text-yellow-800  rounded-2xl w-full m-1 text-center">Home</li></Link>

          <Link href="/services"><li className="text-yellow-200 font-bold hover:text-yellow-800   rounded-2xl w-full m-1 text-center">Services</li></Link>
          <Link href="/portfolio"><li className="text-yellow-200 font-bold hover:text-yellow-800  rounded-2xl w-full m-1 text-center">Portfolio</li></Link>
          <Link href="/about"><li className="text-yellow-200 font-bold hover:text-yellow-800  rounded-2xl w-full m-1 text-center">About</li></Link>
          <Link href="/contact"><li className="text-yellow-200 font-bold hover:text-yellow-800  rounded-2xl w-full m-1 text-center">Contact</li></Link>

        </ul>
      </div>
      <div className="block lg:hidden  h-full ">
        <button onClick={() => SetIsOpen(!IsOpen)}><RxHamburgerMenu className={`w-6 h-6 z-50  text-amber-200`} /></button>
        {IsOpen && (
          <div onClick={() => SetIsOpen(!IsOpen)} className="fixed inset-0 bg-opacity-30 z-40 lg:hidden">
            <div
              className="absolute inset-0  opacity-30 h-screen"
            ></div>
          </div>
        )}
      </div>


      <div className={`fixed top-0 right-0  w-52 h-screen bg-gradient-to-tr from-amber-300 via-amber-500 to-amber-700 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${IsOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="top-0 right-0 fixed p-4" onClick={() => SetIsOpen(!IsOpen)}><RxCross2 className="w-6 h-6" /></button>
        <ul className="flex flex-col justify-center items-center space-y-4 mt-20">
          <Link href="/"><li className="text-gray-950 font-semibold hover:text-gray-800">Home</li></Link>
          <Link href="/about"><li className="text-gray-950 font-semibold hover:text-gray-800">About</li></Link>
          <Link href="/services"><li className="text-gray-950 font-semibold hover:text-gray-800">Services</li></Link>
                  <Link href="/portfolio"><li className="text-gray-950 font-semibold hover:text-gray-800">Portfolio</li></Link>
  <Link href="/contact"><li className="text-gray-950 font-semibold hover:text-gray-800">Contact</li></Link>
        
        </ul>
      </div>

    </div>
  )
}