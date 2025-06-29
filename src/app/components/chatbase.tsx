"use client"
import Image from "next/image"
import logo from "../image/logo.png"
import { useEffect, useState } from "react"
export default function Chatbot(){
    const [isopen,setisopen]=useState(false)
     const [isshowmsg, setisshowmsg] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setisshowmsg(false)
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

    return (
        <div className="">

            <button onClick={()=>setisopen(!isopen)} className="group  fixed bottom-4 right-4 z-50 bg-transparent flex flex-row-reverse items-center gap-2">
            <Image src={logo} alt="logo" className="rounded-[40px] w-12 h-12  "/>
            {
                isshowmsg &&(
                    <p className="items-center justify-center absolute   transition-all ease-in duration-700 text-lg  text-white font-semibold rounded-s-2xl px-3 py-3 w-52 mr-14 mb-2  bg-black">
                Hi,How can i help you
            </p>
                )
            }
        
            
            
</button>

            {
                isopen && (
<iframe
    src="https://www.chatbase.co/chatbot-iframe/qZ2gMoDsr5hvJ8Rd-Kq9R"
    
    className="rounded-xl fixed right-0 mt-20 mr-2  md:w-4xl lg:w-5xl h-[500px] z-20"
    
    frameBorder={0}
></iframe>
                )
            }
        
      </div>
    )
}