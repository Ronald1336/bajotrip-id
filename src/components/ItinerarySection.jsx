import React from 'react';

export default function ItinerarySection() {
    return (
        <section id="itinerary" className="py-20 bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-ocean uppercase tracking-widest mb-2">The Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">Tour Programs</h3>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Choose the perfect duration for your Labuan Bajo adventure.
                    </p>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="max-w-3xl mx-auto space-y-16">
                        
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
                </div>
            </div>
        </section>
    );
}
