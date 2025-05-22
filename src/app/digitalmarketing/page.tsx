"use client"
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import banner from "../image/digitalmarkeitng.jpg"
import Image from "next/image";
import digit from "../image/digit.jpg"
import { sendEmail } from "../lib/resend";
const faqs = [
  {
    id: 1,
    ques: "What is digital marketing and how can it help my business?",
    ans: "Digital marketing uses online channels like search engines, social media, and email to promote your brand and attract customers. It helps grow your business by increasing visibility, engagement, and conversions."
  },
  {
    id: 2,
    ques: "Which digital marketing services do you offer?",
    ans: "We offer SEO, social media marketing, content creation, paid advertising (Google & Meta), email marketing, and full digital strategy tailored to your business goals."
  },
  {
    id: 3,
    ques: "How long does it take to see results from digital marketing?",
    ans: "Some strategies like paid ads can bring quick results within days, while others like SEO or content marketing take 2–6 months for consistent growth. We balance both for short- and long-term success."
  },
  {
    id: 4,
    ques: "Do I need digital marketing if I already have a website?",
    ans: "Yes! A website without marketing is like a shop without signage. Digital marketing drives traffic to your website and helps convert visitors into paying customers."
  },
  {
    id: 5,
    ques: "What’s the difference between SEO and paid ads?",
    ans: "SEO improves your website’s organic ranking on search engines over time. Paid ads (like Google Ads) place your business at the top instantly but cost per click. We often use both for maximum impact."
  },
  {
    id: 6,
    ques: "How do you decide which platform is right for my business?",
    ans: "We start by understanding your audience and goals. For example, B2B businesses may benefit from LinkedIn, while B2C brands often perform well on Instagram or Facebook."
  },
  {
    id: 7,
    ques: "Can I track the results of my campaigns?",
    ans: "Absolutely! We provide monthly reports showing key metrics like clicks, traffic, leads, conversions, and ROI. Transparency and data-driven decisions are core to our approach."
  },
  {
    id: 8,
    ques: "Is digital marketing expensive?",
    ans: "We offer flexible packages based on your goals and budget. Whether you’re just starting or scaling up, we ensure every dollar you spend works hard to bring results."
  },
  {
    id: 9,
    ques: "Do you manage everything or just guide us?",
    ans: "We offer both full-service management and strategic consulting. We can run your campaigns completely or guide your in-house team—whatever suits your needs."
  },
  {
    id: 10,
    ques: "Why should I choose your agency for digital marketing?",
    ans: "We combine creativity with data-driven strategy. With a focus on results, real communication, and customized plans, we treat your business like our own and aim to grow it online, fast and smart."
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
  {/* Hero Banner Section */}
  <div className="relative w-full mt-10 md:mt-20">
    <Image 
      src={banner} 
      alt="Digital Marketing Services" 
      className="w-full h-64 md:h-96 opacity-60 object-cover" 
    />
    <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
    <span className="absolute inset-0 flex flex-col items-center justify-center space-y-2 md:space-y-4 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
        Digital<strong className="text-yellow-500 font-bold"> Marketing</strong>
      </h1>
      <p className="text-sm md:text-lg text-center text-white">
        Turning your vision into reality with creative <br className="hidden sm:block"/> digital strategies
      </p>
      <Link href="/contact">
        <button className="text-sm md:text-lg bg-gradient-to-r from-orange-600 to-yellow-900 hover:bg-yellow-500 text-white font-semibold px-4 py-1 md:p-2 rounded-lg shadow-sm transition-all duration-300">
          Let`s Collaborate
        </button>
      </Link>     
    </span>
  </div>

  {/* Contact & Form Section */} 
  <div className="flex flex-col lg:flex-row items-center justify-center p-4 mt-10 md:mt-20 gap-6 w-full max-w-7xl">
    <div className="flex items-start flex-col p-2 w-full lg:w-[45%]">
      <h1 className="flex flex-col items-start text-2xl md:text-3xl text-white gap-2 font-bold">
        Ready to Scale Your Brand?
        <label className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-amber-300 via-amber-600 to-amber-800 text-2xl md:text-3xl lg:text-4xl">
          Let`s Chat.
        </label>
      </h1>
      <p className="text-balance font-semibold text-start mt-2 md:mt-4 text-amber-200">
        Transparent pricing, tailored strategies, and real ROI.<br className="hidden sm:block"/>
        Get in touch today to scale your business with expert digital marketing solutions.
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
        
        <button className="bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-2 rounded-lg text-white font-bold text-base md:text-lg w-full md:w-auto">
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
        Our Digital Marketing Process
      </h1>
      <p className="text-center text-gray-300 font-semibold max-w-2xl text-sm md:text-base">
        A proven strategy to grow your online presence and conversions
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
              <h3 className="text-white text-base md:text-lg font-bold">Strategy Development</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Analyzing your business, competitors, and target audience to create a custom marketing plan
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Campaign Setup</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Implementing SEO, social media ads, and content marketing strategies
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Optimization</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Continuous A/B testing and data analysis to improve performance
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4 group">
            <div className="bg-amber-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-bold">Reporting & Scaling</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                Detailed performance reports and scaling successful campaigns
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto">
          <Image 
            src={digit} 
            alt="Digital Marketing Process" 
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
                  <FaMinus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" /> : 
                  <FaPlus className="w-5 h-5 md:w-6 md:h-6 fill-slate-700 mt-1 md:mt-2" />
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