import React from "react";

type Feature = {
    key: string;
    children: React.ReactNode;
}

type EyecatcherProps = {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    features: Feature[];
};

export default function Eyecatcher({ title, subtitle, features }: EyecatcherProps) {
    return <div className="bg-[#004b94] w-full text-white">
        <div className="flex px-4 pt-8 gap-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="bg-[#e30813] rounded text-sm text-center flex justify-center items-center">
                {subtitle}
            </div>
        </div>
        <ul className="px-4 pt-6 pb-4 flex flex-col gap-3">
            {
                features.map(({key, children}) => <li key={key}>
                    <div className="font-bold">
                        <b className="text-green-500 mr-2">✔</b>
                        {key}
                    </div>
                    <div className="pl-5">
                        {children}
                    </div>
                </li>)
            }
        </ul>
    </div>;
}
