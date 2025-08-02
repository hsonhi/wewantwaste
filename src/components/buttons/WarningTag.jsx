import React from "react";
import { icons } from "../../assets/data";

export default function WarningBadge() {
  return (
    <button className="flex items-center gap-1 px-3 py-[6px] text-[12px] text-[#F8B61D] bg-[rgba(248,182,29,0.08)] rounded-[32px]">
      <img src={icons.warning} alt="" />
      <span>Not allowed on the road</span>
    </button>
  );
}
