import React from "react";

type SelectItem = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    title: string;
    items?: SelectItem[];
    value?: string;
    onChange?: (value: string) => void;
};

export default function CustomSelect({ title, items, value, onChange }: CustomSelectProps) {
    const onChangeHandler = onChange ? (e: any) => onChange(e.target.value) : undefined;

    return <div className="p-2 bg-white rounded w-full relative">
        <span className="top-0 text-black/40 text-sm bg-white">{title}</span>
        <select value={value} onChange={onChangeHandler} className="w-full text-xl outline-none">
            {(items || []).map((item, i) => <option key={i} value={item.value}>{item.label}</option>)}
        </select>
    </div>;
}
