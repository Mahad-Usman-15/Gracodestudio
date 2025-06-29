import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LoadingWrapper from "./components/loader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GracodeStudio",
  description: "Digital and Web Agency",
  openGraph: {
    type: "website",
    url: "https://www.gracodestudio.com/",
    title: "GracodeStudio",
    description: `Gracode is a leading web design and digital marketing agency specializing in graphic design, SEO services, social media marketing, web development, and responsive web design. We empower brands to grow their online presence by offering tailored digital solutions that amplify brand visibility and engagement across all platforms. At Gracode, we turn your business vision into reality with innovative graphic designs, result-driven SEO strategies, and customized digital marketing campaigns.
Our services include custom website design, search engine optimization (SEO), and social media management, all designed to boost traffic, generate leads, and increase conversions. We pride ourselves on transparent pricing, data-driven strategies, and eye-catching visual designs that leave a lasting impression.
Gracode is committed to delivering measurable results, driving innovation, and building long-term partnerships with our clients. Our mission is to be the most trusted digital marketing partner for businesses worldwide, recognized for providing transformative solutions and an unwavering dedication to client success. We envision a future where every business we work with achieves maximum growth, enhanced brand authority, and sustained digital impact.`,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gracode Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracode - Web Design and Digital Marketing",
    description: "Expert web design, SEO, and digital marketing services by Gracode.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
