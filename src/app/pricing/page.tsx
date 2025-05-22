"use client"
import banner from "../image/banner4.webp"
import Image from "next/image"

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaMinus,FaPlus } from "react-icons/fa"
import { useRouter } from "next/navigation"
type Faqs = {
  id: number
  question: string
  answer: string
}
const faqs:Faqs[] = [
  {
    id: 1,
    question: "What factors determine the cost of a website?",
    answer: "Pricing depends on the complexity, number of pages, custom features, design requirements, and whether it's built from scratch or using a template."
  },
  {
    id: 2,
    question: "Do you offer fixed packages or custom quotes?",
    answer: "We offer both. You can choose from our predefined packages or request a custom quote based on your specific needs and goals."
  },
  {
    id: 3,
    question: "Are there any hidden fees?",
    answer: "No, we believe in transparent pricing. All costs are clearly outlined in the proposal before any work begins."
  },
  {
    id: 4,
    question: "Do you charge monthly or one-time fees?",
    answer: "We offer both models. One-time fees cover development, while optional monthly plans cover hosting, maintenance, and ongoing support."
  },
  {
    id: 5,
    question: "Is hosting included in your pricing?",
    answer: "Hosting is not included by default but can be added as part of our maintenance plans for an additional monthly fee."
  },
  {
    id: 6,
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade or customize your plan at any time as your business grows or needs change."
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept payments via bank transfer, credit/debit cards, PayPal, and selected digital wallets."
  },
  {
    id: 8,
    question: "Is a deposit required to start the project?",
    answer: "Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon completion or at key project milestones."
  },
  {
    id: 9,
    question: "What if I need additional features mid-project?",
    answer: "We’ll assess the changes and provide a revised quote or timeline based on the additional scope."
  },
  {
    id: 10,
    question: "Do you offer refunds?",
    answer: "Due to the nature of our digital services, refunds are generally not offered once the work has begun. However, we ensure satisfaction through ongoing communication and milestone approvals."
  }
];

export default function Pricing(){
  const [isOpen, setIsOpen] = useState<number | null>(null)

    const router = useRouter();

const handleGetStarted = (plan: {
  name: string;
  price: string;
  features: string[];
}) => {
  const featuresString = JSON.stringify(plan.features);
  const encodedFeatures = encodeURIComponent(featuresString);
  const url = `/contactform?package=${plan.name}&price=${plan.price}&features=${encodedFeatures}`;
  router.push(url);
};

    return(
        <div className="flex flex-col items-center p-2 ">
       <div className="relative w-full mt-20">
<Image src={banner} alt="" className="w-full h-96 opacity-60 flex flex-col items-center justify-center"/>
  <div className="inset-0 bg-black opacity-60 w-full absolute"></div>
<span className="absolute inset-0 flex flex-col items-center justify-center p-2">
  
 <h1 className="text-2xl sm:text-5xl text-amber-600 font-bold">Pricing</h1>
                    <p className=" text-lg text-wrap text-center text-white">Get More, Pay Less.</p>

</span>
       </div>
         <h1 className="mt-10 text-white text-3xl text-wrap font-bold">Web <label className="text-amber-500">Development</label>  & Web <label className="text-amber-500"> Design</label></h1>
            <div className="flex flex-col sm:flex-row items-center p-2 mt-16 gap-2 lg:gap-0">

<span className="h-[474px] w-full sm:w-1/2 flex flex-col items-start justify-start transform transition-all duration-300 ease-out  scale-100 hover:scale-105 p-4 bg-gradient-to-tr from-amber-100 via-amber-300 to-amber-500 rounded-xl shadow-xl  ">
    <h1 className="text-2xl font-bold text-black ">Basic</h1>
    <p className="text-slate-900 font-semibold text-lg mb-2">ideal for individuals</p>
<h1 className="text-3xl font-bold text-gray-900 mb-2">$35.00</h1>
<h1 className="text-xl font-bold text-amber-900">Plans Included</h1>
<ul className="flex flex-col items-start p-2">
    <li className="text-lg text-gray-900 font-normal ">✔️ 1–2 Pages</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Responsive Design</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Contact Form</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Basic SEO</li>
    {/* <li className="text-lg text-gray-900 font-normal">✔️ Hosting</li> */}
    <li className="text-lg text-gray-900 font-normal">✔️ 1 Revisions</li>
        <li className="text-lg text-gray-9F00 font-normal">✔️ 5–7 Days</li>
</ul>
<button   onClick={() =>
    handleGetStarted({ name: "Basic", price: "35" , features: [
        '1–2 Pages',
        'Responsive Design',
        'Contact Form',
        'Basic SEO',
        '1 Revisions',
        '5–7 Days'
      ]})} className="w-full p-2 bg-amber-900 text-white rounded-xl shadow-lg hover:bg-amber-800">Get Started</button>
</span>


<span className="w-full sm:w-1/2 flex flex-col items-start justify-centertransform transition-all duration-300 ease-out  scale-100 hover:scale-105 p-4 bg-gradient-to-tr from-amber-100 via-amber-300 to-amber-500 rounded-xl shadow-xl ">
    <h1 className="text-2xl font-bold text-black ">Premium</h1>
    <p className="text-slate-900 font-semibold text-lg mb-2">ideal for large business</p>
<h1 className="text-3xl font-bold text-gray-900 mb-2">$80.00</h1>
<h1 className="text-xl font-bold text-amber-900">Plans Included</h1>
<ul className="flex flex-col items-start  p-2">
    <li className="text-lg text-gray-900 font-normal text-center">✔️ Unlimited Pages</li>
    <li className="text-lg text-gray-900 font-normal text-center">✔️  Fully Custom Design</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Responsive Design</li>
    <li className="text-lg text-gray-900 font-normal ">✔️ Contact Form + Backend Email Integration</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Basic SEO</li>
       <li className="text-lg text-gray-900 font-normal">✔️ Advanced Speed Optimization	</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Hosting + Deployment Included</li>
    <li className="text-lg text-gray-900 font-normal">✔️ 1 Revisions</li>
        <li className="text-lg text-gray-9F00 font-normal">✔️ 10–15 Days</li>
</ul>
<button onClick={()=>handleGetStarted({ name: "Premium", price: "80" ,features:[
  'Unlimited Pages',
  'Fully Custom Design',
  'Responsive Design',
  'Contact Form + Backend Email Integration',
  'Basic SEO',
  'Advanced Speed Optimization',
  'Hosting + Deployment Included',
  ' 1 Revisions',
  '10–15 Days'
]})} className="w-full p-2 bg-amber-900 text-white rounded-xl shadow-lg hover:bg-amber-800">Get Started</button>
</span>


<span className="w-full sm:w-1/2 flex flex-col items-start justify-center transform transition-all duration-300 ease-out  scale-100 hover:scale-105 p-4 bg-gradient-to-tr from-amber-100 via-amber-300 to-amber-500 rounded-xl shadow-xl  ">
    <h1 className="text-2xl font-bold text-black ">Standard</h1>
    <p className="text-slate-900 font-semibold text-lg mb-2">ideal for small business</p>
<h1 className="text-3xl font-bold text-gray-900 mb-2">$50.00</h1>
<h1 className="text-xl font-bold text-amber-900">Plans Included</h1>
<ul className="flex flex-col items-start p-2">
    <li className="text-lg text-gray-900 font-normal ">✔️ 5–6 Pages</li>
       <li className="text-lg text-gray-900 font-normal ">✔️  Basic Customization</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Responsive Design</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Contact Form</li>
    <li className="text-lg text-gray-900 font-normal">✔️ SEO</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Hosting</li>
    <li className="text-lg text-gray-900 font-normal">✔️ 3 Revisions</li>
    <li className="text-lg text-gray-900 font-normal">✔️ Animations:Minimal</li>
        <li className="text-lg text-gray-9F00 font-normal">✔️ 7–10 Days</li>
</ul>
<button onClick={()=>handleGetStarted({ name: "Standard", price: "50",features:[
  '5-6 pages',
  'Basic Customization',
  'Responsive Design',
  'Contact Form',
  'SEO',
  'Hosting',
  '3 Revisions',
  'Animations:Minimal',
  '7–10 Days'
] })} className="w-full p-2 bg-amber-900 text-white rounded-xl shadow-lg hover:bg-amber-800">Get Started</button>
</span>



            </div>
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text- text-white font-bold mb-5 mt-10">Frequently asked  questions</h1>
 <div className="border-s-amber-50 rounded-lg flex flex-col items-start justify-center">
            {faqs.map((faq) => (
              <span key={faq.id} className=" flex flex-col  border-2 border-t-2 gap-5  border-amber-600 w-full px-2 py-2">
                <div className="flex flex-row items-center justify-between gap-10">
                  <h1 className="text-lg font-semibold text-white mt-2">{faq.question}</h1>
                  <button onClick={() =>
                    setIsOpen(isOpen === faq.id ? null : faq.id)
                  } className="text-right">{isOpen ? <FaMinus className={`w-6 h-6 fill-slate-700 mt-2`} /> : <FaPlus className={`w-6 h-6 fill-slate-700 mt-2`} />}</button>
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
    )
}