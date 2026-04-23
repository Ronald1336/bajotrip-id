import React from 'react';
import BoatCard from './BoatCard';

const baseInclude = [
    <><span className="font-bold">Airport / Hotel Transfer 2x</span> (Pick up before trip & Drop off after trip)</>,
    <><span className="font-bold">Food</span> during the trip</>,
    <><span className="font-bold">snacks, tea, coffee, and drinks</span> (milk, juice, and minerals)</>,
    <><span className="font-bold">Full Documentation</span> (Mirrorless, Drone, Gopro)</>,
    <span className="font-bold">Tour Guide</span>,
    <span className="font-bold">Snorkeling Gears</span>
];

const baseExclude = [
    <span className="font-bold">Flight ticket</span>,
    <><span className="font-bold">Hotels</span> before and after trip</>,
    <span className="font-bold">Tips Guide</span>,
    <><span className="font-bold">Entrance fee</span> (Komodo National Park)</>,
    <><span className="font-bold ml-4 text-slate-500">Foreigner :</span> <span className="text-slate-500">650k</span></>,
    <><span className="font-bold ml-4 text-slate-500">Locals :</span> <span className="text-slate-500">350k</span></>
];

const boats = [
    {
        id: 1,
        name: 'BLACKBEARD',
        type: 'Deluxe Phinisi',
        image: '/boats/blackbeard-hero.jpg',
        description: 'Fasilitas: 6 Private Rooms, 1 Sharing Room, Private Bathrooms, Chill Area, Equipments, Paddle board. Kamar: Royal Suite (6.050k), Panoramic (5.750k), Deluxe (4.250k), Sharing (3.550k).',
        capacity: 16,
        cabins: 7,
        speed: 10,
        price: '3.550.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Royal Suite Balcony', price: 'Rp 6.050.000', url: '/boats/blackbeard-royal-suite.jpg' },
            { name: 'Panoramic Suite Balcony', price: 'Rp 5.750.000', url: '/boats/blackbeard-panoramic-room.jpg' },
            { name: 'Deluxe Room', price: 'Rp 4.250.000', url: '/boats/blackbeard-deluxe-room.jpg' },
            { name: 'Sharing Room', price: 'Rp 3.550.000', url: '/boats/blackbeard-sharing-room.jpg' }
        ],
        facilitiesList: [
            '6 Private Rooms',
            '1 Sharing Room',
            'Private Bathrooms',
            'Dining Room',
            'Chill Area',
            'Snorkeling Equipments',
            'Paddle board'
        ],
        facilityImages: [
            { name: 'Dining Room', url: '/boats/blackbeard-dinning-room.jpg' },
            { name: 'Chill Area', url: '/boats/blackbeard-chill-area.jpg' },
            { name: 'Chill Area 2', url: '/boats/blackbeard-chill-area-2.jpg' }
        ],
        roomPrices: [
            { type: 'Royal Suite Balcony', price: 'Rp 6.050.000' },
            { type: 'Panoramic Suite Balcony', price: 'Rp 5.750.000' },
            { type: 'Deluxe Room', price: 'Rp 4.250.000' },
            { type: 'Sharing Room', price: 'Rp 3.550.000' }
        ]
    },
    {
        id: 2,
        name: 'Vhalé',
        type: 'Luxury Phinisi',
        image: '/boats/vhale-hero.jpg',
        description: 'Kamar: Atlantic (8.5jt), Oceanic (7jt), Pacific (5.75jt), Azure (4.75jt), Coral (5.25jt & 4jt).',
        capacity: 36,
        cabins: 12,
        speed: 10,
        price: '4.000.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Atlantic Room', price: 'Rp 8.500.000', url: '/boats/atlantic.jpg' },
            { name: 'Oceanic Room', price: 'Rp 7.000.000', url: '/boats/oceanic.jpg' },
            { name: 'Pacific Room', price: 'Rp 5.750.000', url: '/boats/pasific.jpg' },
            { name: 'Azure Room', price: 'Rp 4.750.000', url: '/boats/azure.jpg' },
            { name: 'Coral Room', price: 'Rp 5.250.000 - Rp 4.000.000', url: '/boats/coral.jpg' }
        ],
        facilitiesList: ['Premium Cabins', 'Ensuite Bathrooms', 'Spacious Sun Deck', 'Dining Area', 'Water Activities'],
        facilityImages: [
            { name: 'Resto / Dining Area', url: '/boats/resto.jpg' },
            { name: 'Chill Area', url: '/boats/chill-area.jpg' }
        ],
        roomPrices: [
            { type: 'Atlantic', price: 'Rp 8.500.000' },
            { type: 'Oceanic', price: 'Rp 7.000.000' },
            { type: 'Pacific', price: 'Rp 5.750.000' },
            { type: 'Coral (VIP)', price: 'Rp 5.250.000' },
            { type: 'Azure', price: 'Rp 4.750.000' },
            { type: 'Coral', price: 'Rp 4.000.000' }
        ]
    },
    {
        id: 3,
        name: 'Senada',
        type: 'Standard Phinisi',
        image: '/boats/senada-hero.jpg',
        description: 'Fasilitas: 6 Private Rooms, Private Bathrooms, Chill Area. Kamar: Panoramic Suite, Deluxe Ocean, Superior Suite.',
        capacity: 18,
        cabins: 6,
        speed: 9,
        price: '3.550.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Panoramic Suite Upper Deck', url: '/boats/panoramic-suites-upper-deck.jpg' },
            { name: 'Panoramic Suite Main Deck', url: '/boats/panoramic-suites-main-deck.jpg' },
            { name: 'Deluxe Ocean Room', url: '/boats/deluxe-ocean-room.jpg' },
            { name: 'Superior Lower Deck', url: '/boats/superior-lower-deck.jpg' }
        ],
        facilitiesList: [
            '6 Private Rooms',
            'Private Bathrooms',
            'Chill Area',
            'Snorkeling Gears'
        ],
        facilityImages: [
            { name: 'Indoor Area', url: '/boats/indoor-area.jpg' },
            { name: 'Outdoor Chill Area 1', url: '/boats/outdoor-chill-1.jpg' },
            { name: 'Outdoor Chill Area 2', url: '/boats/outdoor-chill-2.jpg' },
            { name: 'Ensuite Bathroom', url: '/boats/insuit-bathroom.jpg' }
        ],
        roomPrices: [
            { type: 'Panoramic Suite Balcony', price: '2D1N (5.250k) | 3D2N (7.000k)' },
            { type: 'Deluxe Ocean Suite', price: '2D1N (4.750k) | 3D2N (6.250k)' },
            { type: 'Superior Suite', price: '2D1N (3.550k) | 3D2N (4.850k)' }
        ]
    },
    {
        id: 4,
        name: 'North Blue',
        type: 'Standard Phinisi',
        image: '/boats/northblue-hero.jpg',
        description: 'Kamar: Master Room (3.85jt), Sharing 4P (2.85jt), Sharing 6P (2.65jt). Fasilitas: Dining Area, Sun Deck, Karaoke.',
        capacity: 18,
        cabins: 5,
        speed: 10,
        price: '2.650.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Master Room', price: 'Rp 3.850.000', url: '/boats/northblue-master-room.jpg' },
            { name: 'Sharing Room 1 (Private Bathroom)', price: 'Mulai Rp 2.650.000', url: '/boats/northblue-sharing-room.jpg' },
            { name: 'Sharing Room 2 (Sharing Bathroom)', price: 'Mulai Rp 2.650.000', url: '/boats/northblue-sharing-room-2.jpg' }
        ],
        facilitiesList: ['Master Room', 'Sharing Rooms', 'Dining Area', 'Sun Deck', 'Karaoke'],
        facilityImages: [
            { name: 'Dining Room', url: '/boats/northblue-dinning-room.jpg' },
            { name: 'Chill Area 1', url: '/boats/northblue-chill-area-4.jpg' },
            { name: 'Chill Area 2', url: '/boats/northblue-chill-area-5.jpg' }
        ],
        roomPrices: [
            { type: 'Master Room', price: 'Rp 3.850.000' },
            { type: 'Sharing 4P (Private Bathroom)', price: 'Rp 2.850.000' },
            { type: 'Sharing 6P (Sharing Bathroom)', price: 'Rp 2.650.000' }
        ]
    },
    {
        id: 5,
        name: 'Diara La Oceano',
        type: 'Standard Phinisi',
        image: '/boats/diara-hero.jpg',
        description: 'Fasilitas: 4 Private Rooms, 1 Sharing Room, Chill Area, Equipments, Private Bathrooms.',
        capacity: 12,
        cabins: 5,
        speed: 9,
        price: '3.000.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Deluxe Room Ocean View 1', price: 'Rp 4.000.000', url: '/boats/deluxe-room-1.jpg' },
            { name: 'Deluxe Room Ocean View 2', price: 'Rp 4.000.000', url: '/boats/deluxe-room-2.jpg' },
            { name: 'Sharing Room Ocean View', price: 'Rp 3.000.000', url: '/boats/sharing-room.jpg' }
        ],
        facilitiesList: [
            '4 Private Rooms',
            '1 Sharing Room',
            'Chill Area',
            'Equipments',
            'Private Bathrooms'
        ],
        facilityImages: [
            { name: 'Dining Room', url: '/boats/dining-room.jpg' }
        ],
        roomPrices: [
            { type: 'Deluxe Ocean View', price: 'Rp 4.000.000' },
            { type: 'Sharing Ocean View', price: 'Rp 3.000.000' }
        ]
    },
    {
        id: 6,
        name: 'Raja Bintang 01',
        type: 'Luxury Phinisi',
        image: '/boats/raja-bintang-hero.jpg',
        description: 'Kamar: Phoenix (7.5jt), Earth (6.25jt), Lynx (5.25jt), Athena (3.7jt).',
        capacity: 19,
        cabins: 4,
        speed: 11,
        price: '3.700.000',
        include: baseInclude,
        exclude: baseExclude,
        gallery: [
            { name: 'Phoenix Room (VVIP)', price: 'Rp 7.500.000', url: '/boats/rajabintang-phoenix-room.jpg' },
            { name: 'Earth Room', price: 'Rp 6.250.000', url: '/boats/rajabintang-earth-room.jpg' },
            { name: 'Lynx Room', price: 'Rp 5.250.000', url: '/boats/rajabintang-lynx-room.jpg' },
            { name: 'Athena Room', price: 'Rp 3.700.000', url: '/boats/rajabintang-athena-room.jpg' }
        ],
        facilitiesList: [
            'Premium Suites',
            'Ensuite Bathrooms',
            'Fine Dining',
            'Water Activities'
        ],
        facilityImages: [
            { name: 'Dining Room', url: '/boats/rajabintang-dining-room.jpg' }
        ],
        roomPrices: [
            { type: 'Phoenix', price: 'Rp 7.500.000' },
            { type: 'Earth', price: 'Rp 6.250.000' },
            { type: 'Lynx', price: 'Rp 5.250.000' },
            { type: 'Athena', price: 'Rp 3.700.000' }
        ]
    }
];

export default function Catalog() {
    return (
        <section id="catalog" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-ocean uppercase tracking-widest mb-2">Our Fleet</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">Choose Your Vessel</h3>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        From luxurious traditional Phinisi boats to agile speedboats, we have the perfect watercraft for your next amazing adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {boats.map(boat => (
                        <BoatCard key={boat.id} boat={boat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
