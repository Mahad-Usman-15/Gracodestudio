import Image from "next/image";
import { StaticImageData } from "next/image";
import blog1 from "../../image/blog1.png"
import blog2 from "../../image/blog2.png"
import blog3 from "../../image/blog3.webp"
import blog4 from "../../image/blog4.jpg"
import blog5 from "../../image/blog5.png"
import blog6 from "../../image/blog6.webp"
import blog7 from "../../image/blog7.jpg"
import blog8 from "../../image/blog8.jpg"
import blog9 from "../../image/blog9.jpg"
import blog10 from "../../image/blog10.jpg"
import blog11 from "../../image/blog11.jpg"
import blog13 from "../../image/blog13.jpg"
import blog14 from "../../image/blog 14.jpg"
import blog15 from "../../image/blog15.webp"
import blog16 from "../../image/blog16.png"
import blog17 from "../../image/blog17.jpg"
import blog18 from "../../image/blog18.jpg"
import { notFound } from "next/navigation";
import avatar from "../../avatar.jpg"
import Link from "next/link";
type BlogPost = {
  id: number;
  title: string;
  brief: string;
image:StaticImageData
  date: string;
  slug: string;
  
};
const agencyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Features Every Modern Website Needs",
    brief: "A successful modern website goes beyond just looking good. It must be fast, responsive, and optimized for both desktop and mobile devices. Features like SSL security, SEO readiness, and accessibility are non-negotiable. Easy navigation and intuitive UI increase user engagement. Fast load times keep bounce rates low. Integration with analytics tools helps monitor performance. Contact forms and CTAs are crucial for conversions. Content management should be seamless. Social media integration expands reach. Mobile responsiveness ensures consistent experience. Search functionality enhances usability. Regular backups are a must. ADA compliance broadens accessibility. And, of course, excellent hosting underpins all these elements.",
    date: "2024-01-15",
    image:blog1,
    slug: "essential-website-features-2024",
  },
  {
    id: 2,
    title: "Web Design Psychology: How Colors Affect User Behavior",
    brief: "Colors influence mood, perception, and decision-making. Warm tones like red evoke urgency and passion. Blue builds trust and is popular with tech brands. Green is associated with calm and eco-friendliness. Yellow grabs attention and radiates optimism. Black exudes luxury and authority. Color contrast can improve readability. Consistent palettes reinforce brand identity. Strategic use of accent colors directs user focus. Emotional triggers can increase conversions. A/B testing color schemes helps refine performance. Culture affects color interpretation, so know your audience. Accessibility is key—avoid problematic combinations. Background and text color pairings matter. Don't just follow trends—align colors with brand values. Understand the psychology, then design with intent.",
    date: "2024-02-03",
        image:blog2,

    slug: "web-design-color-psychology",
  },
  {
    id: 3,
    title: "The Complete Website Launch Checklist",
    brief: "Launching a website is more than clicking ‘publish’. Check that all content is accurate and finalized. Proofread thoroughly to eliminate typos. Test responsiveness on all devices. Validate all internal and external links. Ensure forms work properly. Optimize all images for performance. Double-check SEO meta tags and titles. Install and configure analytics tools. Set up backups and security measures. Confirm fast loading across pages. Test site speed with Google tools. Enable 404 and 301 redirects where needed. Submit XML sitemap to search engines. Finally, soft-launch to a test audience. Following this checklist helps ensure a smooth and error-free launch experience.",
    date: "2024-02-20",
        image:blog3,

    slug: "website-launch-checklist",
  },
  {
    id: 4,
    title: "Responsive Design vs Adaptive Design: Which to Choose?",
    brief: "Both responsive and adaptive design cater to mobile users. Responsive design uses flexible grids to adjust content fluidly. Adaptive design uses fixed layouts that change at specific breakpoints. Responsive is easier to manage with one codebase. Adaptive can be faster with tailored versions. Responsive adapts to any screen size, future-proofing your site. Adaptive offers more control over specific device experiences. Responsive tends to rank better in SEO. Adaptive may require more resources to build and maintain. Choose responsive for general websites with varied audiences. Adaptive suits highly targeted apps or devices. Both improve UX, but trade-offs differ. Testing is essential either way. Budget and timeline also play roles. Choose based on goals, not trends.",
    date: "2024-03-08",
        image:blog4,

    slug: "responsive-vs-adaptive-design",
  },
  {
    id: 5,
    title: "How Much Should a Website Cost in 2024?",
    brief: "Website costs vary widely based on scope and needs. A basic static site may cost $500–$1,000. A custom CMS-based site ranges from $2,000–$10,000. E-commerce platforms usually start at $5,000. Enterprise sites can exceed $50,000. Design complexity influences cost significantly. Custom UI/UX increases development time. CMS licensing and plugins add to total. Hosting and domain renewals are recurring costs. SEO and content writing are often extra. Maintenance plans vary from $50–$500/month. Costs also depend on agency vs freelancer. Offshore developers may offer lower rates. But quality, support, and security vary. Always budget for scalability and future upgrades. Transparent quotes prevent unexpected surprises later.",
    date: "2024-03-25",
        image:blog5,

    slug: "website-cost-2024",
  },
  {
    id: 6,
    title: "JavaScript Frameworks Comparison: React, Angular, Vue",
    brief: "React, Angular, and Vue are popular JS frameworks. React is component-based, lightweight, and widely adopted. Angular is a full-fledged framework with strong tooling. Vue offers simplicity and progressive enhancement. React has a steep learning curve but massive community. Angular provides out-of-the-box solutions but is heavyweight. Vue is easy to learn and great for beginners. React excels in flexibility and integration. Angular suits enterprise-scale applications. Vue is ideal for rapid prototyping. React uses JSX; Angular uses TypeScript; Vue supports both. All support state management through different libraries. Choose React for flexibility, Angular for structure, Vue for ease. Consider project needs, team skillset, and long-term support. All are powerful with the right context.",
    date: "2024-04-12",
        image:blog6,

    slug: "javascript-frameworks-comparison",
  },
  {
    id: 7,
    title: "The Anatomy of a High-Converting Landing Page",
    brief: "A high-converting landing page drives action. Start with a compelling headline. Follow with a clear subheading explaining the offer. Use concise, benefit-focused copy. Add persuasive visuals or videos. Place a strong, visible CTA above the fold. Offer social proof—testimonials, reviews, trust badges. Include limited-time offers to create urgency. Minimize distractions and external links. Ensure mobile responsiveness. A/B test CTA buttons and layout. Use forms with minimal required fields. Show a clear value proposition. Eliminate jargon—write like you speak. Use color and whitespace effectively. Always align the page with the ad or referral source.",
    date: "2024-04-30",
        image:blog7,

    slug: "high-converting-landing-page",
  },
  {
    id: 8,
    title: "Website Maintenance: What Clients Need to Know",
    brief: "Maintenance ensures your site remains secure and effective. Update plugins and themes regularly. Monitor for broken links. Backup the website frequently. Perform security scans to avoid breaches. Keep an eye on uptime and performance. Review SEO performance and traffic. Refresh content to keep it relevant. Test forms and conversion paths periodically. Update privacy policy and legal pages. Ensure compliance with changing regulations. Maintain accessibility standards. Train staff on CMS updates. Check for outdated media or files. Monitor loading speed improvements. Good maintenance prevents costly downtimes and builds trust.",
    date: "2024-05-18",
        image:blog8,

    slug: "website-maintenance-guide",
  },
  {
    id: 9,
    title: "Accessibility Compliance: WCAG 2.2 Standards Explained",
    brief: "Accessibility is about inclusivity and legal compliance. WCAG 2.2 outlines standards for accessible design. Use sufficient contrast for readability. Ensure all images have alt text. Enable keyboard navigation. Provide captions for videos. Use clear, structured HTML markup. Avoid content that flashes or auto-plays. Make error messages specific and helpful. Ensure forms have proper labels. Use ARIA roles where appropriate. Test with screen readers. Avoid relying solely on color to convey information. Maintain responsive design for various devices. Regularly audit your site for compliance. Accessibility improves UX for everyone—not just users with disabilities.",
    date: "2024-06-05",
        image:blog9,

    slug: "wcag-accessibility-guide",
  },
  {
    id: 10,
    title: "The Future of Web Design: 2024 Trends to Watch",
    brief: "Web design evolves constantly with tech and user behavior. Minimalist layouts are dominating in 2024. Dark mode remains popular. 3D elements add depth and interaction. AI-driven personalization boosts engagement. Micro-interactions improve navigation intuitively. Scroll-triggered animations create immersive experiences. Custom illustrations bring uniqueness. Inclusive design becomes standard. Voice search optimization is rising. Mobile-first approaches are a must. Faster load speeds remain a top priority. Video headers and content are trending. No-code tools shape design possibilities. Accessibility and ethics drive decisions. Stay current by embracing innovation while ensuring usability.",
    date: "2024-06-22",
        image:blog10,

    slug: "web-design-trends-2024",
  },
  {
    id: 11,
    title: "CMS Showdown: WordPress vs Webflow vs Custom Solutions",
    brief: "Choosing the right CMS depends on your needs. WordPress is flexible, with vast plugin support. Webflow offers design freedom with no code. Custom CMS gives total control but costs more. WordPress excels in blogging and eCommerce. Webflow is great for visual design and marketing sites. Custom CMS fits niche platforms. WordPress has a massive developer community. Webflow requires less maintenance. Custom CMS can be lightweight and fast. WordPress security depends on plugin management. Webflow handles hosting and security. Custom CMS needs dev resources for updates. Budget, scalability, and use-case decide the winner. Try demos before deciding.",
    date: "2024-07-10",
        image:blog11,

    slug: "cms-comparison-guide",
  },
  {
    id: 12,
    title: "How to Communicate Technical Concepts to Non-Technical Clients",
    brief: "Effective client communication builds trust. Avoid jargon and use analogies. Explain processes with visuals or diagrams. Break down timelines into milestones. Clarify scope with simple terms. Listen actively and confirm understanding. Use real-world examples to explain features. Offer recorded demos or tutorials. Set expectations clearly and early. Create FAQs for common questions. Provide regular updates in plain language. Translate technical terms into business benefits. Use storytelling to convey value. Encourage questions without judgment. Empathy is key—speak with their priorities in mind.",
    date: "2024-07-28",
        image:blog11,

    slug: "technical-communication-clients",
  },
  {
    id: 13,
    title: "Optimizing Website Performance: Beyond Page Speed",
    brief: "Website performance affects UX, SEO, and conversions. Page speed is just the beginning. Compress images without losing quality. Use lazy loading for media. Minify CSS, JS, and HTML files. Implement caching for static assets. Use a content delivery network (CDN). Optimize your hosting server settings. Eliminate render-blocking scripts. Audit third-party scripts for slowdowns. Prioritize mobile performance. Monitor performance with tools like Lighthouse. Regularly test with real user data. Use font-display for faster text rendering. Reduce redirects and HTTP requests. Aim for a fast, seamless user experience across devices.",
    date: "2024-08-15",
        image:blog13,

    slug: "website-performance-optimization",
  },
  {
    id: 14,
    title: "The Psychology of Website Navigation",
    brief: "Navigation impacts how users explore your site. Clear menus reduce confusion. Group related pages logically. Use familiar iconography for clarity. Place menus where users expect them. Sticky navigation aids in long-scroll pages. Mega menus can work for large sites. Limit menu items to essential pages. Highlight the current page for context. Use breadcrumbs for deeper navigation. Offer search functionality as backup. Prioritize important paths in your hierarchy. Test navigation flow with real users. Keep labels concise and descriptive. Good navigation builds trust and retention. Design with the user’s journey in mind.",
    date: "2024-09-02",
        image:blog14,

    slug: "website-navigation-psychology",
  },
  {
    id: 15,
    title: "Building a Web Design Portfolio That Wins Clients",
    brief: "A strong portfolio tells your story. Highlight your best work, not all work. Include case studies, not just screenshots. Show before-and-after results if possible. Explain your role in each project. Display measurable outcomes—conversion increases, traffic boosts. Use clean, user-friendly layout. Group projects by category or industry. Add testimonials from satisfied clients. Showcase personal branding and unique value. Keep it updated with recent work. Include your process and methodology. Make contact easy and obvious. Optimize it for SEO and performance. Your portfolio should sell your expertise, not just your style.",
    date: "2024-09-20",
        image:blog15,

    slug: "web-design-portfolio-tips",
  }
  ,
    {
    id: 16,
    title: "Why Your Business Needs More Than Just a Website in 2025",
    date: "8 MAY 2025",
    slug:"web-needs",
    image:blog16,
    brief: `
    In 2025, simply having a website is no longer enough to compete in the digital space. With online competition at an all-time high, businesses must go beyond static web pages to capture and retain customer attention. A modern website must function as a conversion machine—not just a digital brochure. That means integrating tools like chatbots, lead magnets, analytics, and personalization engines. Customers expect more, and they judge your brand in seconds. More importantly, your digital presence should span multiple channels. Social media, email campaigns, SEO strategies, and paid ads must all work in harmony with your website to create a seamless brand experience. Content marketing is another must-have. Blogs, videos, and educational content not only improve SEO but also build trust with your audience. A stagnant site without fresh content can feel outdated and irrelevant. In 2025, mobile-first design isn’t optional—it’s the standard. If your site isn’t optimized for phones and tablets, you're losing customers daily. Combine that with fast loading times, accessibility compliance, and interactive UX for real impact. Add to that the rising importance of data privacy and security. Users want to feel safe on your platform, and regulations demand that you handle data responsibly. Your business also needs integrations—CRM systems, automation tools, payment gateways—all working behind the scenes to deliver a frictionless experience for you and your customers. In short, your online presence must be smart, agile, and deeply customer-centric. A simple website is just the foundation. Success in 2025 demands a fully connected, strategy-driven digital ecosystem. Don’t just build a website—build a digital growth engine.
    `
  },
  {
    id: 17,
    title: 'From Idea to Launch: Our Web Development Process Explained',
    date: "10 MAY 2025",
    slug:"web-launch",
      image:blog17,
    brief: 'Every successful website starts with a powerful idea—and turning that idea into reality requires a clear, strategic process. At our agency, we begin with discovery: understanding your business, goals, target audience, and competitors. This fuels the planning phase, where we map out the site structure, user flows, and key features. Next comes wireframing—blueprints of your site’s layout to visualize functionality and content placement. Once approved, we move into design, where UI/UX experts craft a visually compelling, brand-aligned interface. Then, our developers step in, coding your site using modern, scalable technologies like Next.js, Tailwind, and TypeScript. We ensure responsiveness across all devices and integrate necessary features like contact forms, CMS, analytics, and more. Testing is crucial—so we run comprehensive QA for speed, compatibility, security, and bugs. After internal reviews, we present the pre-launch version to you for final feedback. Any tweaks are made, and then we prep for launch: connecting domains, configuring hosting, and pushing the site live. Post-launch, we don’t disappear. We monitor performance, offer support, and provide options for SEO, maintenance, and future enhancements. Our process is transparent, collaborative, and results-driven—ensuring your vision is not just realized, but elevated. With us, web development isn’t just technical; it’s a creative partnership focused on long-term success. From the first call to the live launch, every step is handled with precision, care, and a growth mindset. That’s how we turn ideas into impactful, high-performing websites.'
  },
  {
    id: 18,
    title: 'Top 5 Website Mistakes Small Businesses Still Make',
    slug:"web-mistakes",
      image:blog18,
    brief: "In 2025, your website is often the first impression customers get—and yet, many small businesses still fall into the same avoidable traps. The first major mistake is neglecting mobile optimization. With over half of web traffic coming from phones, a site that doesn’t adapt to smaller screens drives visitors away instantly. Second, slow load times continue to plague many business sites. Pages that take more than 3 seconds to load result in high bounce rates and poor SEO rankings. Third, unclear messaging—if a visitor can’t tell what your business does within 5 seconds, they’re gone. A lack of a clear value proposition and call-to-action kills conversions. Fourth, outdated design makes your brand appear untrustworthy or unprofessional. A modern UI shows credibility and signals that your business is active and invested. Finally, the fifth mistake is no SEO strategy. Without keyword targeting, clean URLs, meta tags, and optimized content, your site remains invisible on search engines. These mistakes not only hurt your credibility but also cost you potential leads and revenue. Thankfully, they’re all fixable with the right development and digital strategy. Regular audits, speed optimization, mobile-first design, strong branding, and SEO fundamentals are the pillars of a high-performing website. Avoiding these errors gives small businesses a competitive edge in a digital-first world.",
    date: '12 MAY 2025'
  }
];

export default function BlogPage({params}:{params:{slug:string}}){
    const blog=agencyBlogPosts.find((blogpost)=>blogpost.slug===params.slug)
    
    const getRelatedBlogs=(currentSlug: string, allPosts: BlogPost[], count: number = 2): BlogPost[]=> {
      // Filter out the current post
      const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
      
      // Shuffle array using Fisher-Yates algorithm
      const shuffled = [...otherPosts];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      return shuffled.slice(0, count);
    }

    if(!blog){
      return notFound()
    }

    // Get related blogs
    const relatedBlogs = getRelatedBlogs(params.slug, agencyBlogPosts);

    return (
      <div className="flex flex-col sm:flex-row justify-between items-center p-2">
        {/* Main blog content (unchanged) */}
        <div className="flex flex-col items-start justify-center mt-20 m-6 p-2 w-full lg:w-3/4">
          <h1 className="text-start text-3xl sm:text-4xl text-balance text-amber-700 font-bold mb-2">{blog.title}</h1>
          <h2 className="text-yellow-100 text-xl font-semibold mb-4">{blog.date}</h2>
          <Image src={blog.image} alt="blog" className="w-full lg:w-3/4 object-cover overflow-hidden "/>
          <div className="flex flex-col items-start p-2 w-full lg:w-3/4 mt-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-700">Introduction</h1>
            <div className="border-t-2 border-yellow-200 w-full mt-4 mb-4"/>
            <p className="font-normal text-lg space-x-1 space-y-2 p-1 text-yellow-200">
              {blog.brief}
            </p>
          </div>
        </div>

        {/* Updated Related Blogs section */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-700 text-">Related Blogs</h1>
          
          {relatedBlogs.map((relatedBlog) => (
            <div 
              key={relatedBlog.id} 
              className="flex flex-col items-start justify-center p-4 space-y-3 w-full sm:w-96 mb-12 sm:mb-12"
            >
              <h2 className="text-gray-500 font-normal">{relatedBlog.date}</h2>
              <Link href={`${relatedBlog.slug}`}>
                <h1 className="text-white font-semibold text-xl hover:text-amber-500">{relatedBlog.title}</h1>
              </Link> 
              <span className="border w-full border-b-1 border-gray-500" />
              <span className="flex flex-row items-center gap-2">
                <Image 
                  className="rounded-3xl w-10 h-10 mt-4" 
                  src={avatar} 
                  alt="Author avatar" 
                  width={40}
                  height={40}
                />
                <h1 className="text-gray-400">By Mahad Usman</h1>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
}