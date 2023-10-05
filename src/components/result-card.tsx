import React from 'react';

type ResultCardProps = {
    imageUrl: string;
    title: string;
    location: string;
    price: string;
};

const ResultCard = ({ imageUrl, title, location, price }: ResultCardProps) => {
    return (
        <div className="border bg-white border-gray-300 rounded-lg mx-2 my-4 overflow-hidden relative">
            <div className="bg-[#f07c00] absolute top-0 right-0 left-0 py-2 text-center text-white font-bold">
                Individuelles Angebot
            </div>
            <div className="flex justify-between px-4 mt-14">
                <img src={imageUrl} alt="profile" className="w-40 h-40 rounded-lg mr-2.5" />
                <div className="grow">
                    <div className="text-lg">{title}</div>
                    <div className="text-sm text-gray-500">{location}</div>
                </div>
            </div>
            <div className="">
                <div className="px-6 my-2">
                   <h3>Dein Flug</h3>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abflug</div>
                        <div className="text-sm">Köln-Bonn (CGN)</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Ankunft</div>
                        <div className="text-sm">Palma de Mallorca (PMI)</div>
                    </div>
                </div>
                <div className="px-6 my-2">
                   <h3>Dein Hotel</h3>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Hotel</div>
                        <div className="text-sm">Hotel Riu Concordia</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Zimmer</div>
                        <div className="text-sm">Doppelzimmer</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Verpflegung</div>
                        <div className="text-sm">All Inclusive</div>
                    </div>
                </div>
                <div className="px-6 my-2">
                   <h3>Dein Mietwagen</h3>
                     <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Kategorie</div>
                        <div className="text-sm">Kleinwagen</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abholung</div>
                        <div className="text-sm">Flughafen</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abgabe</div>
                        <div className="text-sm">Flughafen</div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex justify-between px-2 py-1">
                    <div className="text-sm text-gray-500">Preis</div>
                    <div className="text-sm">{price} €</div>
                </div>
                <div className="flex justify-between px-2 py-1">
                    <div className="text-sm text-gray-500">CO2</div>
                    <div className="text-sm">0.5 t</div>
                </div>
            </div>
            <div className="px-4 pb-4">
                <button className="w-full mt-2 bg-[#0470c2] text-white rounded py-3 text-xl shadow-lg">
                    Angebot annehmen
                </button>
            </div>
        </div>
    );
};

export default ResultCard;
