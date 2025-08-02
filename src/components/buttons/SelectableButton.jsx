import React from "react";

const SelectableButton = ({ isSelected, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`w-36 h-10 text-[14px] py-2 px-4 rounded-[8px] transition-colors
        ${
          isSelected
            ? "bg-orange-500 text-white"
            : "bg-[#DDDDDD] text-[#343437]"
        }
      `}
      aria-pressed={isSelected}
    >
      {isSelected ? "Selected" : label}
    </button>
  );
};

export default SelectableButton;
