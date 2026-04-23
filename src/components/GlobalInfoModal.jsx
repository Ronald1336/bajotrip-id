import React from 'react';
import { FaCheckCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';

export default function GlobalInfoModal({ isOpen, onClose, activeTab, setActiveTab }) {
    if (!isOpen) return null;

    const renderTabButton = (id, label) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`whitespace-nowrap px-4 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                activeTab === id 
                    ? 'border-ocean text-ocean' 
                    : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
                
                {/* Header */}
                <div className="bg-white/95 backdrop-blur z-10 px-6 pt-5 pb-0 border-b border-slate-100 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-slate-800">Trip Information</h2>
                        <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    {/* Tab Navigation */}
                    <div className="flex overflow-x-auto gap-2 sm:gap-6 border-b border-transparent scrollbar-hide">
                        {renderTabButton('gallery', 'Gallery')}
                        {renderTabButton('itinerary', 'Itinerary')}
                        {renderTabButton('include', 'Include & Exclude')}
                        {renderTabButton('terms', 'Terms & Condition')}
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-grow bg-slate-50/50">
                    
                    {/* TAB: GALLERY */}
                    {activeTab === 'gallery' && (
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                Labuan Bajo Highlights
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: 'Pulau Padar', url: 'https://images.unsplash.com/photo-1518314115160-c4e1f7ec8ee7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    { name: 'Pink Beach', url: 'https://images.unsplash.com/photo-1544527232-c8738c82300b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    { name: 'Komodo Dragon', url: 'https://images.unsplash.com/photo-1620023608240-5e6080de71bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    { name: 'Manta Point', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    { name: 'Pulau Kelor', url: 'https://images.unsplash.com/photo-1596701582239-0fc4fb12b50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    { name: 'Sunset Trip', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                ].map((img, idx) => (
                                    <div key={idx} className="relative h-48 sm:h-40 rounded-xl overflow-hidden group shadow-sm">
                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                            <span className="text-white text-sm font-semibold">{img.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB: ITINERARY */}
                    {activeTab === 'itinerary' && (
                        <div className="max-w-3xl mx-auto space-y-16">
                            
                            {/* 3D2N Section */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-4">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                        Itinerary 3 Days 2 Nights
                                    </h3>
                                    <span className="text-slate-500 font-medium text-sm mt-2 sm:mt-0">Start Trip: 11:00 | End Trip: 12:00</span>
                                </div>
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    {/* Day 1 */}
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                            D1
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <ul className="text-slate-600 text-sm space-y-2">
                                                <li><strong>Pick up</strong> at Hotel/Airport</li>
                                                <li>Lunch Time</li>
                                                <li>Sailing to <strong>Kelor Island</strong></li>
                                                <li>Tracking at <strong>Rinca Island</strong></li>
                                                <li>Sunset at <strong>Kalong Island</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Day 2 */}
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                            D2
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <ul className="text-slate-600 text-sm space-y-2">
                                                <li>Sunrise at <strong>Padar Island</strong></li>
                                                <li>Breakfast Time</li>
                                                <li>Beach Activity at <strong>Pink Beach</strong></li>
                                                <li>Lunch Time</li>
                                                <li>Snorkling at <strong>Taka Makassar</strong></li>
                                                <li>Snorkling at <strong>Manta point</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Day 3 */}
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                            D3
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <ul className="text-slate-600 text-sm space-y-2">
                                                <li>Breakfast Time</li>
                                                <li>Snorkling at <strong>Siaba/Sebayur Island</strong></li>
                                                <li>Sailing back to <strong>Labuan Bajo</strong></li>
                                                <li><strong>Drop off</strong> to Hotel/Airport</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2D1N Section */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-4">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                        Itinerary 2 Days 1 Night
                                    </h3>
                                    <span className="text-slate-500 font-medium text-sm mt-2 sm:mt-0">Start Trip: 11:00 | End Trip: 17:30</span>
                                </div>
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    {/* Day 1 */}
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                            D1
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <ul className="text-slate-600 text-sm space-y-2">
                                                <li><strong>Pick up</strong> at Hotel/Airport</li>
                                                <li>Lunch Time</li>
                                                <li>Sailing to <strong>Kelor Island</strong></li>
                                                <li>Tracking at <strong>Rinca Island</strong></li>
                                                <li>Sunset at <strong>Kalong Island</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Day 2 */}
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                            D2
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <ul className="text-slate-600 text-sm space-y-2">
                                                <li>Sunrise at <strong>Padar Island</strong></li>
                                                <li>Breakfast Time</li>
                                                <li>Beach Activity at <strong>Pink Beach</strong></li>
                                                <li>Lunch Time</li>
                                                <li>Snorkling at <strong>Taka Makassar</strong></li>
                                                <li>Snorkling at <strong>Manta point</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-xs text-slate-400 mt-6 text-center italic">*Itinerary dapat berubah sewaktu-waktu menyesuaikan kondisi cuaca dan arus laut.</p>
                        </div>
                    )}

                    {/* TAB: INCLUDE & EXCLUDE */}
                    {activeTab === 'include' && (
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                Include & Exclude
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Include */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <FaCheckCircle className="text-green-500" />
                                        Paket Termasuk
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Antar jemput Bandara / Hotel ke Pelabuhan',
                                            'Akomodasi kabin (AC) selama 3 Hari 2 Malam',
                                            'Makan selama perjalanan (Breakfast, Lunch, Dinner)',
                                            'Air mineral, kopi, teh, dan snack',
                                            'Alat snorkeling & Life jacket',
                                            'Tour Guide lokal berpengalaman',
                                            'Dokumentasi Premium (Mirrorless, Drone, GoPro)'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-600">
                                                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Exclude */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <FaTimesCircle className="text-red-500" />
                                        Tidak Termasuk
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Tiket pesawat PP ke Labuan Bajo',
                                            'Tiket Masuk Taman Nasional Komodo (WNI/WNA)',
                                            'Pengeluaran pribadi selama trip',
                                            'Tips untuk kru kapal & tour guide',
                                            'Asuransi perjalanan wisata',
                                            'Minuman beralkohol (jika ada)'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-600">
                                                <FaTimesCircle className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: TERMS */}
                    {activeTab === 'terms' && (
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                Terms & Conditions
                            </h3>
                            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8">
                                <div>
                                    <h4 className="text-base font-bold text-slate-800 mb-3 uppercase tracking-wider">Booking & Payment</h4>
                                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                                        <li>Pemesanan dianggap valid setelah melakukan Down Payment (DP) minimal 50% dari total harga.</li>
                                        <li>Pelunasan wajib dibayarkan maksimal H-7 sebelum tanggal keberangkatan trip.</li>
                                        <li>Bukti transfer harap dikirimkan ke WhatsApp admin kami.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-800 mb-3 uppercase tracking-wider">Cancellation & Refund Policy</h4>
                                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                                        <li>Pembatalan H-30 atau lebih: DP dikembalikan 100%.</li>
                                        <li>Pembatalan H-14 hingga H-30: DP hangus.</li>
                                        <li>Pembatalan di bawah H-14: Dikenakan full charge (100% dari total harga).</li>
                                        <li>Reschedule diperbolehkan maksimal 1 kali jika diinfokan minimal H-30 (tergantung ketersediaan).</li>
                                        <li>Pembatalan akibat Force Majeure (cuaca buruk ekstrem, larangan berlayar, bencana alam), trip dapat dijadwalkan ulang.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-800 mb-3 uppercase tracking-wider">What to Bring</h4>
                                    <ul className="flex flex-wrap gap-2 text-sm mt-3">
                                        {['Pakaian renang', 'Sunblock', 'Kacamata hitam', 'Topi pantai', 'Sandal trekking', 'Obat pribadi', 'Powerbank', 'Uang cash'].map((item, idx) => (
                                            <li key={idx} className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-medium">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* WhatsApp Call-to-action Footer */}
                <div className="bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-between sm:justify-end gap-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] z-20">
                    <span className="hidden sm:inline-block text-slate-500 font-medium text-sm">Have more questions?</span>
                    <a 
                        href={`https://wa.me/628994113741?text=${encodeURIComponent(`Halo TripBajo.id, saya mau tanya tentang Open Trip Labuan Bajo`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Contact Admin
                    </a>
                </div>
            </div>
        </div>
    );
}
