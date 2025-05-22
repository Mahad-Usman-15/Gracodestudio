"use client"
import { useState } from "react"
import banner from "../image/ban.jpg"
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5"
<IoLocationSharp />;
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { sendEmail } from "../lib/resend";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
export default function Contact() {
const [status, setStatus] = useState<{
    isSubmitted: boolean;
    isSuccess: boolean;
    message: string;
  }>({
    isSubmitted: false,
    isSuccess: false,
    message: "",
  });
const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  try {
    const result = await sendEmail(name, email, phone, message);
    if (result.success) {
      setStatus({
        isSubmitted: true,
        isSuccess: true,
        message: "Message sent successfully!",
      });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({
        isSubmitted: true,
        isSuccess: false,
        message: "Failed to send message. Please try again.",
      });
    }
  } catch (error) {
    setStatus({
      isSubmitted: true,
      isSuccess: false,
      message: `${error}`,
    });
  }
};

    return (
        <div className="flex flex-col items-center">
            <div className="relative   w-full mt-20 ">
                <Image src={banner} alt="name" className="w-full  h-96  opacity-60 flex justify-center items-center " />
                <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
                <span className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-2xl sm:text-5xl text-white font-bold">Contact Our <strong className=" text-yellow-500 font-bold ">Company</strong></h1>
                    <p className=" text-lg text-wrap text-center text-white">Have some big idea or brand to develop and need help? Then reach out we`d love to hear <br /> about your project and provide help.</p>

                </span>
            </div>



            <div className=" w-full min-h-screen  flex  justify-center items-center gap-8 lg:gap-12 p-6">
              <div className="w-full lg:max-w-4xl flex flex-col lg:flex-row p-2 mt-8 rounded-lg overflow-hidden ">
  {/* Contact Information Section */}
  <div className="w-full lg:w-1/2 rounded-lg lg:rounded-r-none bg-gradient-to-r from-amber-300 via-amber-600 to-amber-900 p-6 flex flex-col space-y-6">
    <h1 className="text-2xl text-white font-bold">Contact Information</h1>
    
    <ul className="flex flex-col space-y-4">
      <li className="flex items-center gap-3">
        <MdEmail className="w-6 h-6 fill-red-500" />
        <span className="text-lg text-white">gracode8@gmail.com</span>
      </li>
      <li className="flex items-center gap-3">
        <IoCall className="w-6 h-6 fill-green-500" />
        <span className="text-lg text-white">0333 2234088</span>
      </li>
      <li className="flex items-center gap-3">
        <IoLocationSharp className="w-6 h-6 fill-blue-500" />
        <span className="text-lg text-white">Karachi, Pakistan</span>
      </li>
    </ul>

    <div className="mt-4">
      <h1 className="text-2xl text-white font-bold mb-4">Follow us on</h1>
      <div className="flex flex-col space-y-3">
        {[
          { icon: <FaInstagram className="w-6 h-6 fill-pink-700" />, text: "instagram.com",link:"https://www.instagram.com/gracode_studio/reel/DJ1QrnUII1O/" },
          { icon: <CiLinkedin className="w-6 h-6 fill-blue-500" />, text: "Linkedin.com",link:"https://pk.linkedin.com/in/gracode-studio-a3695b361" },
          { icon: <FaFacebookF className="w-6 h-6 fill-blue-900" />, text: "Facebook.com",link:"https://www.facebook.com/share/1CFeBi4RcS/" },
          { icon: <FaGoogle className="w-6 h-6 text-white" />, text: "Review us on Google",link:"https://g.co/kgs/uv3gqCu" }
        ].map((item, index) => (
          <Link key={index} href={item.link} className="flex items-center gap-3 ">
            {item.icon}
            <span className="text-lg text-white">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Contact Form Section */}
  <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg lg:rounded-l-none">
   <form className="flex flex-col space-y-4" onSubmit={handlesubmit}>
  <div className="flex flex-col space-y-1">
    <label className="text-lg font-semibold text-amber-600">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

  <div className="flex flex-col space-y-1">
    <label className="text-lg font-semibold text-amber-600">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

  <div className="flex flex-col space-y-1">
    <label className="text-lg font-semibold text-amber-600">Phone-number</label>
    <input
      
      name="phone"
      placeholder="Enter your phone number"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

  <div className="flex flex-col space-y-1">
    <label className="text-lg font-semibold text-amber-600">Message</label>
    <textarea
      rows={4}
      name="message"
      placeholder="Enter your message"
      required
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-200"
  >
    Submit
  </button>

  {status.isSubmitted && (
    <p className={`text-center text-sm mt-2 font-semibold ${status.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
      {status.message}
    </p>
  )}
</form>

  </div>
</div>
            </div>


        </div>
    )
}

