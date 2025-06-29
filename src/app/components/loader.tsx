"use client";

import { useEffect, useState } from "react";
import Navbar from "./header";
import Whatsapp from ".//whatsapp";
import Footer from "./footer";
import Chatbot from "./chatbase";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Whatsapp />
      <Chatbot />
      {children}
      <Footer />
    </>
  );
}
