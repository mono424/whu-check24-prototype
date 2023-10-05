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
                <CustomInput title="Zeitraum" />
                <CustomInput title="Reisedauer" />
            </div>
            <CustomInput title="Abflughafen" />
            <div className="flex gap-1 mt-1 bg-white rounded">
                <CustomInput title="Erwachsene" />
                <CustomInput title="Kinder" />
            </div>
            <div className="flex gap-1 mt-1 bg-white rounded">
                <AIPrompt placeholders={aiPlaceholders} />
            </div>
        </div>
    </div>;
}
