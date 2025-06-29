import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp(){
    return (
          <div className="fixed bottom-4 left-4 z-50">
          <div className="relative group">
            <a
              href="https://wa.me/9233345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="w-12 h-12 p-2 bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition-colors duration-200" />
            </a>

            <div className="absolute hidden group-hover:block left-full ml-3 top-1/2 transform -translate-y-1/2">
              <div className="relative bg-white text-green-900 text-sm font-semibold px-3 py-2 rounded shadow-lg whitespace-nowrap">
                Chat with us!
                <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
    )
}