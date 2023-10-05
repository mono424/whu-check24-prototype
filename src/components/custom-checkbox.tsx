import React from "react";

type CustomCheckboxProps = {
    title: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
};

export default function CustomCheckbox({ title, value, onChange }: CustomCheckboxProps) {
    const onChangeHandler = onChange ? (e: any) => onChange(e.target.value) : undefined;

    return <label className="p-2 rounded w-full relative flex items-center justify-center">
        <input type="checkbox" checked={value} onChange={onChangeHandler} className="text-xl outline-none w-6 h-6 rounded" />
        <div className="text-black/80 text-ml p-2 ml-2">{title}</div>
    </label>;
}
