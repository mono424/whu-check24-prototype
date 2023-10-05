import React, { useState } from 'react';

type CustomChipsProps = {
  items: string[];
  selectedItems: string[];
  onChange: (selectedItems: string[]) => void;
};

export default function CustomChips({ items, selectedItems, onChange }: CustomChipsProps) {
  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      const newSelectedItems = selectedItems.filter(i => i !== item);
      onChange(newSelectedItems);
    } else {
      const newSelectedItems = [...selectedItems, item];
      onChange(newSelectedItems);
    }
  };

  return (
    <div className="flex px-2 items-center">
      {items.map(item => {
        const isSelected = selectedItems.includes(item);
        return (
         <div 
            key={item}
            className={"rounded-full bg-white px-2 py-3 text-lg mr-1 flex " + (isSelected ? "text-[#0470c2]" : "text-black/60")}
            onClick={() => toggleItem(item)}
          >  
            {isSelected ? <div>✔</div> : <div>✘</div>}
            <div className="ml-1">{item}</div>
          </div>
        );
      })}
    </div>
  );
};
