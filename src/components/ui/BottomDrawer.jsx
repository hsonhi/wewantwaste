import React from "react";
import { icons } from "../../assets/data";

export default function BottomDrawer({ selectedItem }) {
  if (!selectedItem) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#2a292c] px-3 py-6 border-t border-[#444] z-40 max-h-[40vh] transform transition-transform duration-300 ease-in-out slide-in">
      <p className="max-w-[1280px] mb-6 mx-auto text-[#ccc] text-[14px]">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>
      <div className="max-w-[1280px] mx-auto flex sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="text-[24px] text-white">{selectedItem.price}</div>
          <div>
            <h2 className="text-[15px]">{selectedItem.name}</h2>
            <p className="text-[12px] text-[#999999]">
              {selectedItem.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 text-[14px] flex items-center gap-2 bg-[#343437] text-[#FBF8FB] rounded-[8px]">
              <img src={icons.chevronLeft} alt="" />
              <span>Back</span>
            </button>
            <button className="px-4 py-2 text-[14px] flex items-center gap-2 bg-[#DDDDDD] text-[#000] rounded-[8px]">
              <span>Continue</span>
              <img src={icons.chevronRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
