"use client";
import React, {useState, useEffect} from "react";

type AIPromptProps = {
    value: string,
    onChange: (value: string) => void,
    placeholders: string[]
};

const cooldownNumber = 50;

export default function AIPrompt({ value, onChange, placeholders }: AIPromptProps) {
    const [placeholder, setPlaceholder] = useState("")
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    useEffect(() => {
        let interval: NodeJS.Timeout|null = null;
        if (!focused) {
            let cooldown = 0;
            let placeholderIndex = 0;
            let i = 0;

            interval = setInterval(() => {
                if (cooldown > 0) {
                    cooldown--;
                    return;
                }
                let text = placeholders[placeholderIndex];
                setPlaceholder(text.substring(0, i));
                i++;
                if (i > text.length) {
                    i = 0;
                    cooldown = cooldownNumber;
                    placeholderIndex = (placeholderIndex + 1) % placeholders.length;
                }
            }, 50);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
                setPlaceholder("");
            }
        };
    }, [focused]);
    

    return <div className="p-2 bg-white rounded w-full text-black">
        <textarea value={value} onChange={(e) => onChange(e.currentTarget.value)} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} className="w-full text-xl outline-none" />
    </div>;
}
