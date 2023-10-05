import { Category } from '@/constants';
import React from 'react';

type ResultCardProps = {
    category: Category,
};

const ResultCard = ({ category }: ResultCardProps) => {
    return (
        <div className="border bg-white border-gray-300 rounded-lg mx-2 my-4 overflow-hidden relative">
            <div className="bg-[#f07c00] absolute top-0 right-0 left-0 py-2 text-sm text-center text-white font-bold">
                Individuelles Angebot
            </div>
            <div className="flex justify-between px-4 mt-14">
                <img src={category.details.image} alt="profile" className="w-40 h-40 rounded-lg mr-2.5" />
                <div className="grow">
                    <div className="text-lg font-bold">{category.details.title}</div>
                    <div className="text-sm text-gray-500">{category.details.destination}</div>
                </div>
            </div>
            <div className="">
                <div className="px-6 my-2">
                   <h3 className="font-bold mt-4">Dein Flug</h3>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abflug</div>
                        <div className="text-sm">Köln-Bonn (CGN)</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Ankunft</div>
                        <div className="text-sm">{category.details.airport}</div>
                    </div>
                </div>
                <div className="px-6 my-2">
                   <h3 className="font-bold mt-4">Dein Hotel</h3>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Hotel</div>
                        <div className="text-sm">{category.details.hotel}</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Zimmer</div>
                        <div className="text-sm">{category.details.room}</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Verpflegung</div>
                        <div className="text-sm">{category.details.catering}</div>
                    </div>
                </div>
                <div className="px-6 my-2">
                   <h3 className="font-bold mt-4">Dein Mietwagen</h3>
                     <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Kategorie</div>
                        <div className="text-sm">{category.details.carCategorie}</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abholung</div>
                        <div className="text-sm">{category.details.pickup}</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div className="text-sm text-gray-500">Abgabe</div>
                        <div className="text-sm">{category.details.dropoff}</div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="flex justify-between px-2 py-1">
                    <div className="text-sm text-gray-500">Preis</div>
                    <div className="text-sm">{category.details.price}</div>
                </div>
                <div className="flex justify-between px-2 py-1">
                    <div className="text-sm text-gray-500">CO2</div>
                    <div className="text-sm">{category.details.co2}</div>
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
