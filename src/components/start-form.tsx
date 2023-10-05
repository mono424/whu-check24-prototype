import React from "react";
import CustomInput from "./custom-input";
import AIPrompt from "./ai-prompt";

type StartFormProps = {};

const aiPlaceholders = [
    "Ich möchte Urlaub am Strand, mit Pool und All-Inclusive ...",
    "Ich möchte Urlaub in den Bergen, mit Wellness und Halbpension ...",
    "Ich möchte Urlaub in der Stadt, mit Fitnessstudio und Frühstück ...",
    "Ich möchte Urlaub in der Natur, mit Sauna und Vollpension ...",
];

export default function StartForm({}: StartFormProps) {
    return <div className="px-2 py-4">
        <div className="w-full bg-[#ffbb1b] p-1.5 rounded">
            <div className="flex gap-1 mb-1">
                <CustomInput title="Zeitraum" type="date"/>
                <CustomInput title="Reisedauer" value="1 Woche" />
            </div>
            <CustomInput title="Abflughafen" value="Köln-Bonn (CGN)" />
            <div className="flex gap-1 mt-1 bg-white rounded">
                <CustomInput title="Erwachsene" value="2" />
                <CustomInput title="Kinder" value="0" />
            </div>
            <div className="flex gap-1 mt-1 bg-white rounded">
                <AIPrompt placeholders={aiPlaceholders} />
            </div>
            <button
                className="w-full mt-2 bg-[#0470c2] text-white rounded py-4 text-xl shadow-lg"
            >Überarsch mich!</button>
        </div>
    </div>;
}
