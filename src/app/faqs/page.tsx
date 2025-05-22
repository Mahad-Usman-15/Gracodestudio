
"use client"
import { AnimatePresence,motion } from "framer-motion"
import { FaMinus,FaPlus } from "react-icons/fa"
import { useState } from "react"
import banner from "../image/faqs.jpg"
import Image from "next/image"
type Faqs = {
    id: number
    question: string
    answer: string
}
const faqs1: Faqs[] = [
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
    {
        id: 5,
        question: "What is included in your digital marketing services?",
        answer: "Our digital marketing services include SEO, PPC campaigns, social media marketing, content creation, email marketing, and performance analytics."
    },
    {
        id: 6,
        question: "Do you manage social media accounts?",
        answer: "Yes, we offer full social media management, including strategy, content creation, posting, engagement, and analytics reporting."
    },
    {
        id: 7,
        question: "Can you help me improve my website’s SEO?",
        answer: "Absolutely. We optimize your site’s structure, content, and technical aspects to improve rankings and organic traffic on search engines."
    },
    {
        id: 8,
        question: "Do you provide Google Ads or PPC services?",
        answer: "Yes, we run and manage Google Ads campaigns tailored to your business goals, including keyword research, ad creation, and ongoing optimization."
    },
    {
        id: 9,
        question: "What platforms do you use for web development?",
        answer: "We work with platforms like WordPress, Shopify, Webflow, and also build custom websites using technologies like React, Next.js, and Node.js."
    },
    {
        id: 10,
        question: "Do you offer custom graphic design services?",
        answer: "Yes, we create custom logos, branding kits, social media graphics, marketing collateral, and more tailored to your brand identity."
    },
    {
        id: 11,
        question: "Can you help with branding from scratch?",
        answer: "Absolutely. We help businesses develop their brand strategy, including name, logo, color palette, typography, and brand voice."
    },
    {
        id: 12,
        question: "Do you redesign logos?",
        answer: "Yes, we offer logo redesign services that enhance your brand’s appeal while maintaining its core identity and recognition."
    },
    {
        id: 13,
        question: "Will my website be mobile-friendly?",
        answer: "Yes, all our websites are fully responsive and optimized for all devices, ensuring a seamless experience for mobile, tablet, and desktop users."
    },
    {
        id: 14,
        question: "Can I update my website content myself?",
        answer: "Yes, we build websites with easy-to-use CMS platforms, so you can update your content, images, and blog posts without needing technical skills."
    },
    {
        id: 15,
        question: "Do you provide e-commerce development?",
        answer: "Yes, we specialize in building scalable and secure e-commerce websites using platforms like Shopify, WooCommerce, and custom solutions."
    },
  
]
const faqs2:Faqs[]=[  {
        id: 16,
        question: "Can you integrate payment gateways on my website?",
        answer: "Yes, we integrate payment gateways like Stripe, PayPal, and local solutions to ensure smooth and secure transactions."
    },
    {
        id: 17,
        question: "What’s your process for starting a new project?",
        answer: "Our process involves discovery, planning, design, development, testing, and launch. We keep you informed at every stage."
    },
    {
        id: 18,
        question: "Do you offer copywriting or content creation?",
        answer: "Yes, we have experienced copywriters who can craft engaging website copy, blog posts, social media content, and ad creatives."
    },
    {
        id: 19,
        question: "How do you ensure websites load fast?",
        answer: "We use performance-optimized code, compress images, implement caching, and follow best practices for speed and core web vitals."
    },
    {
        id: 20,
        question: "Do you provide hosting and domain services?",
        answer: "Yes, we offer reliable hosting and domain registration services, or we can help manage your existing setup for better performance."
    },
    {
        id: 21,
        question: "Can you work with clients from other countries?",
        answer: "Yes, we work with clients globally and manage all communications, payments, and project deliverables remotely with ease."
    },
    {
        id: 22,
        question: "Do you provide email marketing services?",
        answer: "Yes, we design and automate email marketing campaigns using tools like Mailchimp, ConvertKit, and Klaviyo for effective customer outreach."
    },
    {
        id: 23,
        question: "How do you track the success of marketing campaigns?",
        answer: "We use tools like Google Analytics, Facebook Pixel, and custom dashboards to monitor KPIs like traffic, engagement, and conversions."
    },
    {
        id: 24,
        question: "What makes your agency different from others?",
        answer: "We focus on results, offer personalized service, and blend creativity with data-driven strategies to help your business grow online."
    },
    {
        id: 25,
        question: "Do you provide analytics and performance reports?",
        answer: "Yes, we deliver detailed monthly reports showing campaign performance, website metrics, and actionable insights."
    },
    {
        id: 26,
        question: "Can I request revisions during the project?",
        answer: "Of course. We encourage feedback and include multiple revision rounds to ensure the final product meets your expectations."
    },
    {
        id: 27,
        question: "Will I own the design and code after project completion?",
        answer: "Yes, you’ll own full rights to all project deliverables once the final payment is made, including code, designs, and assets."
    },
    {
        id: 28,
        question: "Do you create websites for specific industries?",
        answer: "Yes, we tailor our services for industries like real estate, healthcare, fashion, tech, education, and more with industry-specific features."
    },
    {
        id: 29,
        question: "Can you help with launching a product online?",
        answer: "Yes, we offer complete launch support including landing page creation, digital ads, social media promotion, and email blasts."
    },
    {
        id: 30,
        question: "Do you offer UI/UX audits for existing websites?",
        answer: "Yes, we evaluate your current site’s user experience and provide actionable recommendations for improvement in design and usability."
    },
    {
        id: 31,
        question: "Can I hire you for just one service (e.g., only SEO)?",
        answer: "Yes, our services are modular. You can hire us for specific tasks like SEO, graphic design, or development depending on your needs."
    },
    
]


export default function Faqs() {
      const [isOpen, setIsOpen] = useState<number | null>(null)
    return (
        <div className="flex flex-col items-center ">

            <div className="relative   w-full mt-20">
                <Image src={banner} alt="name" className="w-full  h-96  opacity-60 flex justify-center items-center " />
                <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
                <span className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-2xl sm:text-5xl text-white font-bold">Frequently Asked<strong className=" text-yellow-500 font-bold "> Questions</strong></h1>
                    <p className=" text-lg text-wrap text-center text-white">Everything You Need to Know — All in One Place</p>

                </span>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center mt-24 justify-center gap-0 p-2">
                <div className="border-s-amber-50 rounded-lg flex flex-col items-start justify-center">
                    {faqs1.map((faq) => (
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
                <div className="border-s-amber-50 rounded-lg flex flex-col items-start justify-center">
                    {faqs2.map((faq) => (
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