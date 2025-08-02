import React from "react";
import SizeTag from "../buttons/SizeTag";
import WarningTag from "../buttons/WarningTag";
import SelectableButton from "../buttons/SelectableButton";

export default function SkipCard({ item, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item.id)}
      className={`
        mt-3 relative border flex items-center justify-between p-[10px] rounded-[10px] cursor-pointer transition-all
        ${
          isSelected
            ? "border-[#FD710D]"
            : "border-[#343437] hover:bg-[#3d3d41]"
        }
      `}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-[#FD710D] opacity-15 rounded-[10px] pointer-events-none z-0" />
      )}
      <div className="flex items-center gap-[30px] z-10">
        <img src={item.image} alt={item.name} className="w-20 h-auto" />
        <div className="flex flex-col gap-1">
          <p className="text-[16px] text-[#FBF8FB] font-medium">{item.name}</p>
          <p className="text-[14px] text-[#999999] font-normal">
            {item.description}
          </p>
        </div>
        <p className="text-[20px] text-[#FBF8FB] font-medium">{item.price}</p>
        <SizeTag data={item.size} />
        {item.notAllowedOnTheRoad && (
          <div className="mt-2">
            <WarningTag />
          </div>
        )}
      </div>
      <div className="pr-[10px] z-10">
        <SelectableButton
          isSelected={isSelected}
          onClick={() => onSelect(item.id)}
          label="Select this skip"
        />
      </div>
    </div>
  );
}
