import avatar from "../avatar.jpg"
import Image from "next/image";
import Link from "next/link";
import banner from "../image/banner2.jpg"
type BlogPost = {
  id: number;
  title: string;
  brief: string;

  date: string;
  slug: string;
  
};

const agencyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Features Every Modern Website Needs",
    brief: "Discover the must-have elements that will make your website competitive in 2024",
   
    date: "2024-01-15",
    slug: "essential-website-features-2024",
    
  },
  {
    id: 2,
    title: "Web Design Psychology: How Colors Affect User Behavior",
    brief: "Learn how strategic color choices can improve conversions and user engagement",
   
    date: "2024-02-03",
    slug: "web-design-color-psychology",
   
  },
  {
    id: 3,
    title: "The Complete Website Launch Checklist",
    brief: "Ensure nothing gets missed when launching your client's website",
  
    date: "2024-02-20",
    slug: "website-launch-checklist",
 
  },
  {
    id: 4,
    title: "Responsive Design vs Adaptive Design: Which to Choose?",
    brief: "Compare these two approaches to mobile-friendly design",
   
    
    date: "2024-03-08",
    slug: "responsive-vs-adaptive-design",
   
  },
  {
    id: 5,
    title: "How Much Should a Website Cost in 2024?",
    brief: "Breaking down pricing for different types of web projects",

    date: "2024-03-25",
    slug: "website-cost-2024",
  
  },
  {
    id: 6,
    title: "JavaScript Frameworks Comparison: React, Angular, Vue",
    brief: "Which framework is right for your next project?",
    
    date: "2024-04-12",
    slug: "javascript-frameworks-comparison",
  
  },
  {
    id: 7,
    title: "The Anatomy of a High-Converting Landing Page",
    brief: "Key elements that turn visitors into customers",
    
    date: "2024-04-30",
    slug: "high-converting-landing-page",
  
  },
  {
    id: 8,
    title: "Website Maintenance: What Clients Need to Know",
    brief: "Educating clients about ongoing website care",

    date: "2024-05-18",
    slug: "website-maintenance-guide",

  },
  {
    id: 9,
    title: "Accessibility Compliance: WCAG 2.2 Standards Explained",
    brief: "Making your websites usable for everyone",
  
    date: "2024-06-05",
    slug: "wcag-accessibility-guide",
   
  },
  {
    id: 10,
    title: "The Future of Web Design: 2024 Trends to Watch",
    brief: "Emerging design patterns and technologies",
  
    date: "2024-06-22",
    slug: "web-design-trends-2024",

  },
  {
    id: 11,
    title: "CMS Showdown: WordPress vs Webflow vs Custom Solutions",
    brief: "Choosing the right content management system",
  
    date: "2024-07-10",
    slug: "cms-comparison-guide",
   
  },
  {
    id: 12,
    title: "How to Communicate Technical Concepts to Non-Technical Clients",
    brief: "Bridging the gap between developers and clients",
  
    date: "2024-07-28",
    slug: "technical-communication-clients",
   
  },
  {
    id: 13,
    title: "Optimizing Website Performance: Beyond Page Speed",
    brief: "Comprehensive performance optimization strategies",
  
    date: "2024-08-15",
    slug: "website-performance-optimization",

  },
  {
    id: 14,
    title: "The Psychology of Website Navigation",
    brief: "How users interact with your site's structure",
   
    date: "2024-09-02",
    slug: "website-navigation-psychology",
   
  },
  {
    id: 15,
    title: "Building a Web Design Portfolio That Wins Clients",
    brief: "Showcasing your agency's work effectively",
  
    date: "2024-09-20",
    slug: "web-design-portfolio-tips",
  }
];

export default function Blogs(){
    return(
        <div className="flex flex-col items-center justify-center">
             <div className="relative   w-full mt-20">
                            <Image src={banner} alt="name" className="w-full  h-96  opacity-60 flex justify-center items-center " />
                            <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
                            <span className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                                <h1 className="text-2xl sm:text-5xl text-white font-bold">Our Featured<strong className=" text-yellow-500 font-bold ">Blogs</strong></h1>
                                <p className=" text-lg text-wrap text-center text-white">Here a look on blogs of our company and comment if you really <br /> learn and got to know about something new.</p>
            
                            </span>
                        </div>
         <div className="mt-24 flex flex-col sm:flex-row items-center justify-center p-2 gap-8 sm:gap-12 md:gap-12 flex-wrap">
  {agencyBlogPosts.map((blog) => (
    <div 
      key={blog.id} 
      className="flex flex-col items-start justify-center p-4 space-y-3 w-full sm:w-96 mb-12 sm:mb-20"
    >
      <h2 className="text-gray-500 font-normal">{blog.date}</h2>
      <Link href={`blogs/${blog.slug}`}>
        <h1 className="text-white font-semibold text-xl hover:text-amber-500">{blog.title}</h1>
      </Link> 
      <p className="text-gray-500 font-sans text-start">{blog.brief}</p>
      <span className="border w-full border-b-1 border-gray-500" />
      <span className="flex flex-row items-center gap-2">
        <Image className="rounded-3xl w-10 h-10 mt-4" src={avatar} alt="mm" />
        <h1 className="text-gray-400">By Mahad Usman</h1>
      </span>
    </div>
  ))}
</div>
        </div>
    )
}