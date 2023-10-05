import React from "react";

type CustomInputProps = {
    title: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
};

export default function CustomInput({ title, placeholder, type, value, onChange }: CustomInputProps) {
    const onChangeHandler = onChange ? (e: any) => onChange(e.target.value) : undefined;

    return <div className="p-2 bg-white rounded w-full relative">
        <span className="top-0 text-black/40 text-sm">{title}</span>
        <input type={type} value={value} onChange={onChangeHandler} placeholder={placeholder} className="w-full text-xl outline-none" />
    </div>;
}
