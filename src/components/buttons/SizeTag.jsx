import React from "react";

const SizeTag = ({ data }) => {
  return (
    <span className="py-[6px] px-3 bg-[rgba(94,143,220,0.08)] text-[#5E8FDC] rounded-[32px] text-[12px]">
      {data}
    </span>
  );
};

export default SizeTag;
