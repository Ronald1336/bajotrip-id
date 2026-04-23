import React from 'react';

export default function TermsConditions() {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-ocean uppercase tracking-widest mb-2">Important Information</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">Terms & Conditions</h3>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Please read our trip policies before making your booking.
                    </p>
                </div>

                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-10">
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
                                <li key={idx} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-medium shadow-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
