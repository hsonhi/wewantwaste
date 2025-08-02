import React, { useState } from "react";
import { data } from "./assets/data";
import SkipCard from "./components/ui/SkipCard";
import BottomDrawer from "./components/ui/BottomDrawer";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = data.find((item) => item.id === selectedId);

  const handleSelect = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="py-24 px-4">
      <p className="text-center">[CHECKOUT COMPONENT HERE]</p>

      <main className="max-w-[1280px] my-14 mx-auto p-5 bg-[#222124] flex flex-col gap-9 rounded-[10px]">
        <div>
          <h1 className="text-[24px] text-[#FBF8FB] font-medium">
            Choose Your Skip Size
          </h1>
          <p className="text-[16px] text-[#999999] font-normal mt-1">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td colSpan={6}>
                    <SkipCard
                      item={item}
                      isSelected={selectedId === item.id}
                      onSelect={handleSelect}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <BottomDrawer selectedItem={selectedItem} />
    </div>
  );
}
