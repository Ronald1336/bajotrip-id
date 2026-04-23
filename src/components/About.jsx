import React from 'react';

export default function About() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1544527232-c8738c82300b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
                        Tentang TripBajo<span className="text-cyan-400">.id</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-300">
                        Menghadirkan pengalaman berlayar premium dan tak terlupakan di surga tersembunyi, Labuan Bajo.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                    <h2 className="text-sm font-bold text-ocean uppercase tracking-widest mb-2">Our Story</h2>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">Dedikasi Dalam Melayani Perjalanan Anda</h3>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            TripBajo.id lahir dari kecintaan kami terhadap pesona alam Nusantara, khususnya keajaiban Kepulauan Komodo dan Labuan Bajo. Berawal dari keinginan untuk membagikan keindahan ini kepada dunia, kami memulai perjalanan kami sebagai penyedia layanan Open Trip dan Private Charter Phinisi.
                        </p>
                        <p>
                            Berbekal pengalaman bertahun-tahun dalam industri pariwisata bahari, kami menyadari bahwa setiap perjalanan bukan sekadar tentang destinasi, melainkan tentang cerita, kenyamanan, dan kenangan yang tak tergantikan. Oleh karena itu, kami berkomitmen untuk selalu menyajikan armada terbaik, kru profesional yang ramah, serta itinerary yang dirancang secara detail untuk memastikan kepuasan setiap tamu.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-ocean/5 p-8 rounded-3xl border border-ocean/10 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-ocean text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md">
                            🎯
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Visi Kami</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Menjadi penyedia layanan perjalanan wisata bahari terdepan di Labuan Bajo yang memadukan pengalaman mewah, keamanan berstandar internasional, serta pelestarian lingkungan lokal demi pariwisata yang berkelanjutan.
                        </p>
                    </div>
                    <div className="bg-ocean/5 p-8 rounded-3xl border border-ocean/10 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-ocean text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md">
                            🚀
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Misi Kami</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start">
                                <span className="text-ocean mr-3 mt-1">✔</span>
                                Memberikan pelayanan ramah, hangat, dan profesional kepada setiap tamu.
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean mr-3 mt-1">✔</span>
                                Menyediakan armada Phinisi dan Speedboat yang terawat, aman, dan berfasilitas lengkap.
                            </li>
                            <li className="flex items-start">
                                <span className="text-ocean mr-3 mt-1">✔</span>
                                Bekerja sama dan memberdayakan komunitas lokal Labuan Bajo.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Team/Value Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-ocean uppercase tracking-widest mb-2">Why Us</h2>
                    <h3 className="text-4xl font-extrabold text-slate-800 mb-4">Mengapa Memilih TripBajo?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Kru Berpengalaman', desc: 'Kapten dan kru kapal kami adalah ahli navigasi lokal yang hafal setiap sudut kepulauan, menjamin keselamatan Anda.', icon: '⚓' },
                        { title: 'Transparansi Harga', desc: 'Tidak ada biaya tersembunyi. Semua fasilitas, include, dan exclude tercatat dengan jelas sejak awal pemesanan.', icon: '💎' },
                        { title: 'Premium Service', desc: 'Mulai dari makanan berkualitas, kebersihan kamar, hingga dokumentasi profesional, kami memberikan yang terbaik.', icon: '⭐' }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
