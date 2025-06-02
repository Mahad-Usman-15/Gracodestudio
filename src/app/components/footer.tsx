import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import logo from "../image/logo.png"
export default function Footer() {
    return (
        <footer className="footer flex items-center flex-col mt-20 bg-gray-600 p-2">


            <div className="flex flex-col sm:flex-row flex-wrap  items-start p-3 justify-center gap-16">
                <span className="flex flex-col items-start">
                    <Link href="/"><h1 className="text-amber-300 text-2xl font-extrabold space-x-2 flex flex-row items-center gap-2"><Image src={logo} className="h-10 w-10" alt="picture" />GRACODE STUDIO</h1></Link>
                    <p className="text-lg text-gray-100 font-thin">Empowering ecommerce brands in the digital <br /> landscape
                        with data-driven strategies <br /> and exceptional results.</p>
                </span>
                <span className="flex flex-col items-start ">
                    <h1 className="font-bold text-gray-100 text-xl">Company</h1>
                    <ul className="flex flex-col items-start  ">
                        <Link href="/about"><li className="text-gray-100 font-thin">About Us</li></Link>
                        <Link href="/blogs"><li className="text-gray-100 font-thin">Blogs</li></Link>
                        <Link href="/pricing"><li className="text-gray-100 font-thin">Pricing</li></Link>
                        <Link href="/faqs"><li className="text-gray-100 font-thin">FAQs</li></Link>
                    </ul>
                </span>
                <span className="flex flex-col items-start ">
                    <h1 className="font-bold text-gray-100 text-xl">Services</h1>
                    <ul className="flex flex-col items-start  ">
                        <Link href="/pricing"><li className="text-gray-100 font-thin">Website Development</li></Link>
                        <Link href="/pricing"><li className="text-gray-100 font-thin">Website Design</li></Link>
                        <Link href="/graphicdesigning"><li className="text-gray-100 font-thin">Graphic Design</li></Link>
                        <Link href="/digitalmarketing"><li className="text-gray-100 font-thin">Digital Marketing</li></Link>
                    </ul>
                </span>
                <span className="flex flex-col items-start ">
                    <h1 className="font-bold text-gray-100 text-xl">Contact Us</h1>
                    <h1 className="text-gray-100 font-thin flex flex-row items-center gap-2">Email: <label className="text-blue-500 font-semibold"> gracode8@gmail.com</label></h1>
                    <h1 className="text-gray-100 font-thin">Phone: <label className="text-blue-500 font-semibold"> 0333 2234088</label></h1>
                    <span className="flex-col items-center flex space-y-2 mt-4">
                        <h1 className="text-xl font-bold text-gray-100">
                            Follow us on
                        </h1>
                        <span className="flex flex-row items-center gap-2">
                            <Link href="https://www.instagram.com/gracode_studio/reel/DJ1QrnUII1O/">  <button className="bg-blue-100 rounded-3xl w-10 h-10 flex items-center justify-center transform transition-all duration-300 ease-in-out scale-100 hover:scale-105 "><FaInstagram className="w-6 h-6" /></button></Link>   
                            <Link href="https://pk.linkedin.com/in/gracode-studio-a3695b361">  <button className="bg-blue-100 rounded-3xl w-10 h-10 flex items-center justify-center transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"><CiLinkedin className="w-6 h-6" /></button></Link>     
                            <Link href="https://www.facebook.com/share/1CFeBi4RcS/"> <button className="bg-blue-100 rounded-3xl w-10 h-10 flex items-center justify-center transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"><FaFacebookF className="w-6 h-6" /></button></Link>      
                            <Link href="https://x.com/Gracodestudio?t=5lKovaOcA9OOpxeEcDKBhQ&s=08"> <button className="bg-blue-100 rounded-3xl w-10 h-10 flex items-center justify-center transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"><FaXTwitter className="w-6 h-6" /></button></Link>          

                        </span>
                    </span>
                </span>

            </div>
            <div className="border-t-2 w-full p-2">
                <p className="text-gray-100 text-lg">&copy; {new Date().getFullYear()} Gracode Studio. All rights reserved</p>
            </div>
        </footer>
    )
}
