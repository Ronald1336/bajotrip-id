import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/628994113741?text=Halo%20%5BTripBajo.id%5D%2C%20saya%20mau%20tanya%20slot%20Open%20Trip%20Labuan%20Bajo"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        >
            <FaWhatsapp className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                Chat with us!
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-8 border-transparent border-l-white"></div>
            </span>
        </a>
    );
}
