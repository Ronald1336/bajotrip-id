import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function GlobalInfoSection() {
    const [activeTab, setActiveTab] = useState('itinerary');

    const renderTabButton = (id, label) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`whitespace-nowrap px-6 py-4 font-bold text-sm sm:text-base transition-all duration-300 border-b-4 ${
                activeTab === id 
                    ? 'border-ocean text-ocean bg-white' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
        >
            {label}
        </button>
    );

    return (
        <section id="info-section" className="py-20 bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Trip Information</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about your unforgettable journey in Labuan Bajo.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    
                    {/* Tab Navigation */}
                    <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 scrollbar-hide">
                        {renderTabButton('itinerary', 'Itinerary')}
                        {renderTabButton('include', 'Include & Exclude')}
                        {renderTabButton('terms', 'Terms & Condition')}
                        {renderTabButton('gallery', 'Gallery')}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-10 bg-white">
                        
                        {/* TAB: ITINERARY */}
                        {activeTab === 'itinerary' && (
                            <div className="max-w-3xl mx-auto space-y-16 animate-fade-in-up">
                                {/* 3D2N Section */}
                                <div>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-4">
                                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                            Itinerary 3 Days 2 Nights
                                        </h3>
                                        <span className="text-slate-500 font-medium text-sm mt-2 sm:mt-0 bg-slate-100 px-4 py-1.5 rounded-full">Start Trip: 11:00 | End Trip: 12:00</span>
                                    </div>
                                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                        {/* Day 1 */}
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                                D1
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                                <ul className="text-slate-700 space-y-2">
                                                    <li><span className="font-bold text-ocean-dark">Pick up</span> at Hotel/Airport</li>
                                                    <li>Lunch Time</li>
                                                    <li>Sailing to <span className="font-bold text-ocean-dark">Kelor Island</span></li>
                                                    <li>Tracking at <span className="font-bold text-ocean-dark">Rinca Island</span></li>
                                                    <li>Sunset at <span className="font-bold text-ocean-dark">Kalong Island</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Day 2 */}
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                                D2
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                                <ul className="text-slate-700 space-y-2">
                                                    <li>Sunrise at <span className="font-bold text-ocean-dark">Padar Island</span></li>
                                                    <li>Breakfast Time</li>
                                                    <li>Beach Activity at <span className="font-bold text-ocean-dark">Pink Beach</span></li>
                                                    <li>Lunch Time</li>
                                                    <li>Snorkling at <span className="font-bold text-ocean-dark">Taka Makassar</span></li>
                                                    <li>Snorkling at <span className="font-bold text-ocean-dark">Manta point</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Day 3 */}
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                                D3
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                                <ul className="text-slate-700 space-y-2">
                                                    <li>Breakfast Time</li>
                                                    <li>Snorkling at <span className="font-bold text-ocean-dark">Siaba/Sebayur Island</span></li>
                                                    <li>Sailing back to <span className="font-bold text-ocean-dark">Labuan Bajo</span></li>
                                                    <li><span className="font-bold text-ocean-dark">Drop off</span> to Hotel/Airport</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2D1N Section */}
                                <div>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-4">
                                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                            Itinerary 2 Days 1 Night
                                        </h3>
                                        <span className="text-slate-500 font-medium text-sm mt-2 sm:mt-0 bg-slate-100 px-4 py-1.5 rounded-full">Start Trip: 11:00 | End Trip: 17:30</span>
                                    </div>
                                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                        {/* Day 1 */}
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                                D1
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                                <ul className="text-slate-700 space-y-2">
                                                    <li><span className="font-bold text-ocean-dark">Pick up</span> at Hotel/Airport</li>
                                                    <li>Lunch Time</li>
                                                    <li>Sailing to <span className="font-bold text-ocean-dark">Kelor Island</span></li>
                                                    <li>Tracking at <span className="font-bold text-ocean-dark">Rinca Island</span></li>
                                                    <li>Sunset at <span className="font-bold text-ocean-dark">Kalong Island</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Day 2 */}
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                                                D2
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                                <ul className="text-slate-700 space-y-2">
                                                    <li>Sunrise at <span className="font-bold text-ocean-dark">Padar Island</span></li>
                                                    <li>Breakfast Time</li>
                                                    <li>Beach Activity at <span className="font-bold text-ocean-dark">Pink Beach</span></li>
                                                    <li>Lunch Time</li>
                                                    <li>Snorkling at <span className="font-bold text-ocean-dark">Taka Makassar</span></li>
                                                    <li>Snorkling at <span className="font-bold text-ocean-dark">Manta point</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-slate-400 mt-6 text-center italic">*Itinerary dapat berubah sewaktu-waktu menyesuaikan kondisi cuaca dan arus laut.</p>
                            </div>
                        )}

                        {/* TAB: INCLUDE & EXCLUDE */}
                        {activeTab === 'include' && (
                            <div className="max-w-4xl mx-auto animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                    Include & Exclude
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Include */}
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                                        <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                            <FaCheckCircle className="text-green-500 text-2xl" />
                                            Paket Termasuk
                                        </h4>
                                        <ul className="space-y-4">
                                            {[
                                                <><span className="font-bold">Airport / Hotel Transfer 2x</span> (Pick up before trip & Drop off after trip)</>,
                                                <><span className="font-bold">Food</span> during the trip</>,
                                                <><span className="font-bold">snacks, tea, coffee, and drinks</span> (milk, juice, and minerals)</>,
                                                <><span className="font-bold">Full Documentation</span> (Mirrorless, Drone, Gopro)</>,
                                                <span className="font-bold">Tour Guide</span>,
                                                <span className="font-bold">Snorkeling Gears</span>
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-700">
                                                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Exclude */}
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                                        <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                            <FaTimesCircle className="text-red-500 text-2xl" />
                                            Tidak Termasuk
                                        </h4>
                                        <ul className="space-y-4">
                                            {[
                                                <span className="font-bold">Flight ticket</span>,
                                                <><span className="font-bold">Hotels</span> before and after trip</>,
                                                <span className="font-bold">Tips Guide</span>,
                                                <><span className="font-bold">Entrance fee</span> (Komodo National Park)</>,
                                                <><span className="font-bold ml-4 text-slate-500">Foreigner :</span> <span className="text-slate-500">650k</span></>,
                                                <><span className="font-bold ml-4 text-slate-500">Locals :</span> <span className="text-slate-500">350k</span></>
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-700">
                                                    {idx < 4 ? <FaTimesCircle className="text-red-400 mt-1 mr-3 flex-shrink-0" /> : <div className="w-4 mr-3 flex-shrink-0"></div>}
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
                            <div className="max-w-3xl mx-auto animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                    Terms & Conditions
                                </h3>
                                <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-10">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ocean"></span>General Terms</h4>
                                        <ul className="space-y-4">
                                            {[
                                                'Every participant responsibles to their own stuff',
                                                'We just keep your seat until you have paid the DP (down payment)',
                                                'If the participant late from the specific time for any reason, we can not give back your money because we have already paid to the provider facilities',
                                                'If in an emergency/forced/not resolved due to natural conditions, riots, and other bad weather, the itinerary can be changed without prior notice, this is for your safety. In this case there are no refunds',
                                                'We will give you snorkel equipment, If you lose it you have to pay the extra charge',
                                                'If you take this trip you are supposed to understand and agree'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start text-slate-700">
                                                    <div className="w-2 h-2 mt-2 mr-4 bg-ocean rotate-45 flex-shrink-0"></div>
                                                    <span className="leading-relaxed">{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="h-px bg-slate-200 w-full"></div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ocean"></span>What to Bring</h4>
                                        <ul className="flex flex-wrap gap-3 mt-4">
                                            {['Pakaian renang', 'Sunblock', 'Kacamata hitam', 'Topi pantai', 'Sandal trekking', 'Obat pribadi', 'Powerbank', 'Uang cash', 'Dry bag'].map((item, idx) => (
                                                <li key={idx} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-medium shadow-sm">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB: GALLERY */}
                        {activeTab === 'gallery' && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                    Labuan Bajo Highlights
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {[
                                        { name: 'Pulau Padar', url: 'https://images.unsplash.com/photo-1518314115160-c4e1f7ec8ee7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                        { name: 'Pink Beach', url: 'https://images.unsplash.com/photo-1544527232-c8738c82300b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                        { name: 'Komodo Dragon', url: 'https://images.unsplash.com/photo-1620023608240-5e6080de71bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                        { name: 'Manta Point', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                        { name: 'Pulau Kelor', url: 'https://images.unsplash.com/photo-1596701582239-0fc4fb12b50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                        { name: 'Sunset Trip', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                                    ].map((img, idx) => (
                                        <div key={idx} className="relative h-64 sm:h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
                                            <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                                <span className="text-white text-lg font-bold tracking-wide">{img.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
