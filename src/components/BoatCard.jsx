import React, { useState } from 'react';
import { FaUserFriends, FaBed, FaShip, FaCheckCircle, FaTimes } from 'react-icons/fa';

export default function BoatCard({ boat }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    <img
                        src={boat.image}
                        alt={boat.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-ocean-dark font-bold text-sm shadow">
                        {boat.type}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 cursor-pointer hover:text-ocean transition-colors" onClick={() => setIsModalOpen(true)}>{boat.name}</h3>
                    <p className="text-slate-500 mb-6 text-sm line-clamp-2 flex-grow">{boat.description}</p>

                    <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col items-center">
                            <FaUserFriends className="text-ocean-light mb-1" size={20} />
                            <span className="text-xs text-slate-600 font-medium">{boat.capacity} Guests</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaBed className="text-ocean-light mb-1" size={20} />
                            <span className="text-xs text-slate-600 font-medium">{boat.cabins} Cabins</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaShip className="text-ocean-light mb-1" size={20} />
                            <span className="text-xs text-slate-600 font-medium">{boat.speed} Knots</span>
                        </div>
                    </div>

                    <div className="flex flex-col border-t border-slate-100 pt-4 gap-4 mt-auto">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Starting from</p>
                                <p className="text-xl font-bold text-ocean-dark">Rp {boat.price}<span className="text-sm font-normal text-slate-500"> / pax</span></p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold transition-colors duration-300 text-sm border border-slate-200"
                            >
                                View Details
                            </button>
                            <a 
                                href={`https://wa.me/628994113741?text=${encodeURIComponent(`Halo TripBajo.id, saya mau tanya kapal ${boat.name.toUpperCase()}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center bg-ocean hover:bg-ocean-dark text-white py-2.5 rounded-xl font-semibold transition-colors duration-300 text-sm"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    
                    {/* Modal Content */}
                    <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
                        
                        {/* Header */}
                        <div className="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-slate-800">{boat.name}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50">
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 sm:p-8 space-y-10">
                            
                            {/* Gallery Section */}
                            {boat.gallery && boat.gallery.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                        Gallery
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {boat.gallery.map((img, idx) => (
                                            <div key={idx} className="relative h-48 sm:h-40 rounded-xl overflow-hidden group">
                                                <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                                    <span className="text-white text-sm font-semibold">{img.name}</span>
                                                    {img.price && <span className="text-yellow-400 text-xs font-semibold mt-1">{img.price}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Facilities Section */}
                                {boat.facilitiesList && boat.facilitiesList.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                            Facilities
                                        </h3>
                                        <ul className="space-y-3 mb-6">
                                            {boat.facilitiesList.map((facility, idx) => (
                                                <li key={idx} className="flex items-center text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                                                    <span className="font-medium">{facility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {/* Facility Images */}
                                        {boat.facilityImages && boat.facilityImages.length > 0 && (
                                            <div className="grid grid-cols-2 gap-3 mt-4">
                                                {boat.facilityImages.map((img, idx) => (
                                                    <div key={idx} className="relative h-28 rounded-lg overflow-hidden group shadow-sm">
                                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                                                            <span className="text-white text-xs font-semibold">{img.name}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Pricing Table Section */}
                                {boat.roomPrices && boat.roomPrices.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-ocean rounded-full"></span>
                                            Room Pricing
                                        </h3>
                                        <div className="overflow-hidden rounded-xl border border-slate-200">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-slate-50 text-slate-600">
                                                    <tr>
                                                        <th className="px-4 py-3 font-semibold">Room Type</th>
                                                        <th className="px-4 py-3 font-semibold text-right">Price / Pax</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {boat.roomPrices.map((room, idx) => (
                                                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                                            <td className="px-4 py-4 text-slate-700 font-medium">{room.type}</td>
                                                            <td className="px-4 py-4 text-ocean-dark font-bold text-right">{room.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* WhatsApp Call-to-action */}
                            <div className="pt-4 text-center mt-8">
                                <a 
                                    href={`https://wa.me/628994113741?text=${encodeURIComponent(`Halo TripBajo.id, saya mau tanya kapal ${boat.name.toUpperCase()}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                                >
                                    Chat via WhatsApp
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

