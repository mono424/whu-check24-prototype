"use client";
import React from "react";
import CustomInput from "./custom-input";
import AIPrompt from "./ai-prompt";
import CustomSelect from "./custom-select";
import CustomCheckbox from "./custom-checkbox";
import CustomChips from "./custom-chips";

type StartFormProps = {};

const aiPlaceholders = [
    "Ich möchte Urlaub am Strand, mit Pool und All-Inclusive ...",
    "Ich möchte Urlaub in den Bergen, mit Wellness und Halbpension ...",
    "Ich möchte Urlaub in der Stadt, mit Fitnessstudio und Frühstück ...",
    "Ich möchte Urlaub in der Natur, mit Sauna und Vollpension ...",
];

export default function StartForm({}: StartFormProps) {
    const [startDate, setStartDate] = React.useState(new Date().toLocaleDateString('en-CA'));
    const [selectedItems, setSelectedItems] = React.useState(["Flug", "Unterkunft"]);
    const [adultCount, setAdultCount] = React.useState(2);
    const [childrenCount, setChildrenCount] = React.useState(0);

    return <div className="px-2 py-4">
        <div className="w-full bg-[#ffbb1b] p-1.5 rounded">
            <div className="flex gap-1 mb-1 bg-white rounded">
                <CustomChips selectedItems={selectedItems} onChange={setSelectedItems} items={["Flug", "Unterkunft", "Mietwagen"]}/>
            </div>
            <div className="flex gap-1 mb-1">
                <CustomInput title="Zeitraum" type="date" value={startDate} onChange={setStartDate} />
                <CustomSelect title="Reisedauer" items={[
                    { label: "3 Tage", value: "3T" },
                    { label: "4 Tage", value: "4T" },
                    { label: "5 Tage", value: "5T" },
                    { label: "6 Tage", value: "6T" },
                    { label: "1 Woche", value: "1W" },
                    { label: "2 Wochen", value: "2W" },
                    { label: "3 Wochen", value: "3W" },
                    { label: "4 Wochen", value: "4W" },
                    { label: "5 Wochen", value: "5W" },
                    { label: "6 Wochen", value: "6W" },
                    { label: "7 Wochen", value: "7W" },
                    { label: "8 Wochen", value: "8W" },
                    { label: "9 Wochen", value: "9W" },
                ]} />
            </div>
            <CustomInput title="Abflughafen" value="Köln-Bonn (CGN)" />
            <div className="flex gap-1 mt-1 bg-white rounded">
                <CustomInput type="number" title="Erwachsene" value={adultCount.toString()} onChange={(e) => setAdultCount(parseInt(e))} />
                <CustomInput type="number" title="Kinder" value={childrenCount.toString()} onChange={(e) => setChildrenCount(parseInt(e))}  />
            </div>
            <div className="flex gap-1 mt-1 bg-white rounded">
                <CustomSelect title="Budget" items={[
                    { label: "100€ - 300€", value: "100-300" },
                    { label: "200€ - 500€", value: "200-500" },
                    { label: "500€ - 1000€", value: "500-1000" },
                    { label: "1000€ - 2000€", value: "1000-2000" },
                    { label: "2000€ - 5000€", value: "2000-5000" },
                ]} />
            </div>
            <div className="gap-1 mt-3 bg-[#0470c2] text-white rounded">
                <h3 className="pt-1 px-2">Prompte jetzt deinen perfekten Urlaub!</h3>
                <AIPrompt placeholders={aiPlaceholders} />
            </div>
            <div className="mt-1">
                <CustomCheckbox title="CO2-freundlichen Urlaub bevorzugen" />
            </div>
            <button className="w-full mt-2 bg-[#0470c2] text-white rounded py-4 text-xl shadow-lg">
                Überrasch mich!
            </button>
        </div>
    </div>;
}
