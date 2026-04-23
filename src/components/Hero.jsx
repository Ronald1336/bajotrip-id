import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">


            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544527232-c8738c82300b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                }}
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-ocean-deep/60 to-ocean-deep/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl animate-fade-in-up opacity-0">
                    Discover the Magic of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                        Labuan Bajo
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-50 mb-10 font-light drop-shadow-md animate-fade-in-up opacity-0 animation-delay-300">
                    Unforgettable adventures, majestic islands, and premium sailing experiences.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-500">
                    <a href="#catalog" className="px-8 py-4 bg-gradient-to-r from-ocean-light to-ocean text-white font-semibold rounded-full shadow-lg hover:shadow-ocean-light/50 transition-all duration-300 transform hover:-translate-y-1">
                        Explore Boats
                    </a>
                    <a href="https://wa.me/628994113741?text=Halo%20%5BTripBajo.id%5D%2C%20saya%20mau%20tanya%20slot%20Open%20Trip%20Labuan%20Bajo" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <a href="#catalog" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
