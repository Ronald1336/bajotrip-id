import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color changes depending on scroll state on desktop
    const navLinkClass = `font-semibold text-sm tracking-wide transition-colors duration-300 ${
        isScrolled ? 'text-slate-700 hover:text-ocean' : 'text-white/90 hover:text-white drop-shadow-md'
    }`;

    // Logo color changes depending on scroll state
    const logoClass = `text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-300 ${
        isScrolled ? 'text-slate-800' : 'text-white drop-shadow-md'
    }`;
    const logoDotClass = `transition-colors duration-300 ${
        isScrolled ? 'text-ocean' : 'text-cyan-400'
    }`;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                
                {/* Logo */}
                <a href="#" className={logoClass}>
                    TripBajo<span className={logoDotClass}>.id</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#" className={navLinkClass}>HOME</a>
                    <a href="#about" className={navLinkClass}>ABOUT</a>
                    <a href="#catalog" className={navLinkClass}>OUR BOATS</a>
                    <a href="#itinerary" className={navLinkClass}>TOUR PROGRAM</a>
                    <a href="#terms" className={navLinkClass}>TERMS & CONDITIONS</a>
                    
                    {/* Contact Button */}
                    <a 
                        href="https://wa.me/628994113741?text=Halo%20%5BTripBajo.id%5D%2C%20saya%20mau%20tanya%20paket%20Open%20Trip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 ${
                            isScrolled 
                                ? 'bg-ocean text-white shadow-lg shadow-ocean/30 hover:bg-ocean-dark' 
                                : 'bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30'
                        }`}
                    >
                        CONTACT
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-slate-800' : 'text-white'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 origin-top overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="flex flex-col py-4 px-4 space-y-2">
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-ocean rounded-lg">HOME</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-ocean rounded-lg">ABOUT</a>
                    <a href="#catalog" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-ocean rounded-lg">OUR BOATS</a>
                    <a href="#itinerary" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-ocean rounded-lg">TOUR PROGRAM</a>
                    <a href="#terms" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-ocean rounded-lg">TERMS & CONDITIONS</a>
                    
                    <div className="px-4 py-4 mt-2 border-t border-slate-100">
                        <a 
                            href="https://wa.me/628994113741?text=Halo%20%5BTripBajo.id%5D%2C%20saya%20mau%20tanya%20paket%20Open%20Trip"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex justify-center items-center w-full bg-ocean text-white font-bold py-3 rounded-xl shadow-lg shadow-ocean/20"
                        >
                            CONTACT VIA WHATSAPP
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
