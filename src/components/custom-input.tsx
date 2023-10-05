import React from "react";

type CustomInputProps = {
    title: string;
};

export default function CustomInput({ title }: CustomInputProps) {
    return <div className="p-2 bg-white rounded w-full">
        <input placeholder={title} className="w-full text-xl outline-none" />
    </div>;
}
