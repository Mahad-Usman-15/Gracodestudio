"use client"
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import banner from "../image/graphics.jpg"
import Image from "next/image";
import graph from "../image/grapichero.jpg"
import { sendEmail } from "../lib/resend";
const faqs = [
  {
    id: 1,
    ques: "What is graphic design and how can it help my business?",
    ans: "Graphic design visually communicates your brand’s message through logos, marketing materials, and digital assets. It helps build trust, increase recognition, and attract the right audience."
  },
  {
    id: 2,
    ques: "Which graphic design services do you offer?",
    ans: "We offer logo design, brand identity, social media graphics, marketing materials, packaging design, UI/UX graphics, and more—customized to your business needs."
  },
  {
    id: 3,
    ques: "How long does it take to complete a graphic design project?",
    ans: "Timelines vary by project size. A logo might take a few days, while a full brand identity or packaging set may take a few weeks. We always set clear delivery timelines upfront."
  },
  {
    id: 4,
    ques: "Do I need graphic design if I already have a logo?",
    ans: "Yes! Graphic design goes far beyond logos. Consistent visuals across social media, websites, and print materials are essential to maintain a strong and professional brand image."
  },
  {
    id: 5,
    ques: "What’s the difference between branding and graphic design?",
    ans: "Branding is the overall perception of your business, while graphic design is the visual language used to express that brand. We use design to build and strengthen your brand identity."
  },
  {
    id: 6,
    ques: "How do you decide the right design style for my brand?",
    ans: "We start with a discovery session to understand your audience, values, and goals. Based on this, we craft visuals that reflect your brand’s personality and speak to your target market."
  },
  {
    id: 7,
    ques: "Can I request revisions on the design work?",
    ans: "Absolutely. Our process includes multiple rounds of revisions to make sure the final designs align with your vision and goals. Your satisfaction is our priority."
  },
  {
    id: 8,
    ques: "Is graphic design expensive?",
    ans: "We offer transparent pricing with packages for startups to large brands. Every design is tailored, and we ensure you get real value and a lasting creative asset for your investment."
  },
  {
    id: 9,
    ques: "Do you provide editable source files?",
    ans: "Yes, once the project is finalized, we provide high-resolution exports along with source files (like PSD, AI, or Figma), so you have full control over your assets."
  },
  {
    id: 10,
    ques: "Why should I choose your agency for graphic design?",
    ans: "We blend creativity with strategy. Our designs don’t just look good—they work hard to communicate, convert, and grow your brand with consistency and style."
  }
];

export default function Pricing() {
    const [isOpen, setIsOpen] = useState<number | null>(null)
    const [status,setStatus]=useState<{
     isSubmitted:boolean
      isSuccess:boolean
      message:string
    }>(
      {
        isSubmitted:false,
        isSuccess:false,
        message:""
      }
    )


   const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     const formData = new FormData(event.currentTarget);
     const name = formData.get("name") as string;
     const email = formData.get("email") as string;
     const phone = formData.get("phone") as string;
     const projectdetail = formData.get("projectdetail") as string;
          const company = formData.get("company") as string;
   
     try {
       const result = await sendEmail(name, email, phone,company, projectdetail);
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
  {/* Banner Section */}
  <div className="relative w-full mt-10 md:mt-20">
    <Image 
      src={banner} 
      alt="name" 
      className="w-full h-64 md:h-96 opacity-60 flex justify-center items-center" 
    />
    <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
    <span className="absolute inset-0 flex flex-col items-center justify-center space-y-2 md:space-y-4 px-4">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
        Graphic <strong className="text-yellow-500 font-bold">Designing</strong>
      </h1>
      <p className="text-sm md:text-lg text-center text-white">
        Turning your vision into reality with creative designs.
      </p>
      <Link href="/contact">
        <button className="text-sm md:text-lg bg-gradient-to-r from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold px-4 py-1 md:p-2 rounded-lg shadow-sm">
          Let`s Collaborate
        </button>
      </Link>     
    </span>
  </div>

  {/* Contact & Form Section */}
  <div className="flex flex-col lg:flex-row items-center justify-center p-4 mt-10 md:mt-20 gap-6 w-full max-w-7xl">
    <div className="flex items-start flex-col p-2 w-full lg:w-[45%]">
      <h1 className="flex flex-col items-start text-2xl md:text-3xl text-white gap-2 font-bold">
       Have a Graphic Designing Project?
        <label className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-amber-300 via-amber-600 to-amber-800 text-2xl md:text-3xl lg:text-4xl">
          Let`s Chat.
        </label>
      </h1>
      <p className="text-balance font-semibold text-start mt-2 md:mt-4 text-amber-200">
   Transparent pricing, custom design strategies, and impactful visuals.<br className="hidden sm:block" />
Get in touch today to elevate your brand with expert graphic design solutions.

      </p>

  <a href="mailto:gracode8@gmail.com">
  <span className="transform transition-all ease-out scale-100 hover:scale-105 duration-300 mt-4 md:mt-6 flex flex-col items-start bg-gradient-to-r from-amber-300 to-amber-500 px-3 py-3 md:px-4 md:py-4 rounded-xl shadow-sm shadow-amber-800">
    <MdOutlineEmail className="w-6 h-6 md:w-7 md:h-7" />
    <h1 className="text-base md:text-xl text-amber-900 font-semibold">Email us</h1>
    <h1 className="text-lg md:text-2xl text-amber-900 font-bold">gracode8@gmail.com</h1>
  </span>
</a>

    </div>

    <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl p-2 w-full lg:w-[45%]">
      <form onSubmit={handlesubmit} className="flex flex-col items-start justify-center p-2 md:p-4 space-y-2 md:space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full">
          <span className="flex flex-col items-start w-full md:w-1/2">
            <label className="text-black font-semibold text-sm md:text-base">Name*</label>
            <input name="name" type="text" className="px-2 py-2 md:px-3 md:py-3 rounded w-full" />
          </span>
          <span className="flex flex-col items-start w-full md:w-1/2">
            <label className="text-black font-semibold text-sm md:text-base">Company Name*</label>
            <input name="company" type="text" className="px-2 py-2 md:px-3 md:py-3 rounded w-full" />
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full">
          <span className="flex flex-col items-start w-full md:w-1/2">
            <label className="text-black font-semibold text-sm md:text-base">Email Address*</label>
            <input name="email" type="text" className="px-2 py-2 md:px-3 md:py-3 rounded w-full" />
          </span>
          <span className="flex flex-col items-start w-full md:w-1/2">
            <label className="text-black font-semibold text-sm md:text-base">Phone Number*</label>
            <input name="phone" type="number" className="px-2 py-2 md:px-3 md:py-3 rounded-lg w-full" />
          </span>
        </div>
        
        <span className="flex flex-col items-start w-full">
          <label className="text-black font-semibold text-sm md:text-base">Project details & budget*</label>
          <textarea name="projectdetail" rows={4} className="w-full rounded-lg"></textarea>
        </span>
        
        <button  className="bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-2 rounded-lg text-white font-bold text-base md:text-lg w-full md:w-auto">
          Submit Request
        </button>
        
  {status.isSubmitted && (
    <p className={`text-center text-sm mt-2 font-semibold ${status.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
      {status.message}
    </p>
  )}
      </form>

    </div>
  </div>
  {/* Process Section */}
  <div className="flex flex-col items-center gap-4 mt-10 px-4 w-full max-w-7xl">
    <span className="gap-4 md:gap-6 flex items-center flex-col">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold">
        Our Graphic Design Process
      </h1>
      <p className="text-center text-gray-300 font-semibold max-w-2xl text-sm md:text-base">
        A structured 4-step approach to creating perfect designs for your brand
      </p>
      
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 m-1 mb-6 md:mb-10 w-full max-w-2xl px-4 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-0.5 bg-yellow-600 -z-10"></div>

          {/* Step 1 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Discovery & Research</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                We analyze your brand, competitors, and target audience
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Concept Creation</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Initial sketches and multiple design concepts are developed
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Refinement</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Your feedback helps us perfect the chosen design
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Final Delivery</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                All files delivered in required formats with usage guidelines
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto">
          <Image 
            src={graph} 
            alt="picture" 
            className="h-64 md:h-96 w-full object-contain" 
          />
        </div>
      </div>
    </span>
  </div>

  {/* FAQ Section */}
  <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2 mt-10 text-center">
        Frequently asked questions
      </h1>
      <p className="text-sm md:text-base mb-4 md:mb-6 font-semibold mt-2 text-slate-300 text-center">
        Some of the most common questions asked by our clients.<br className="hidden sm:block"/>
        Got other questions or concerns? Reach out to us, and we`ll be happy to assist you!
      </p>
      
      <div className="border-s-amber-50 rounded-lg flex flex-col items-start justify-center w-full">
        {faqs.map((faq) => (
          <span key={faq.id} className="flex flex-col border-2 border-t-2 gap-3 md:gap-5 border-amber-600 w-full px-2 py-2">
            <div className="flex flex-row items-center justify-between gap-4 md:gap-10">
              <h1 className="text-base md:text-lg font-semibold text-white mt-1 md:mt-2">
                {faq.ques}
              </h1>
              <button 
                onClick={() => setIsOpen(isOpen === faq.id ? null : faq.id)} 
                className="text-right"
              >
                {isOpen === faq.id ? 
                 (<FaMinus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" />)  : 
                  (<FaPlus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" />)
                }
              </button>
            </div>

            <AnimatePresence>
              {isOpen === faq.id && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base overflow-hidden text-white w-full"
                >
                  {faq.ans}
                </motion.p>
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



