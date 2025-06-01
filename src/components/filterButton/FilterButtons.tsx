import { useState } from "react";
import type { FilterType } from "../../types/Todo";

type FilterButtonsProps = {
  onChange: (filter: FilterType) => void;
};

export const FilterButtons = ({ onChange }: FilterButtonsProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    onChange(filter);
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => handleFilterChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeFilter === "all"
            ? "bg-[#1d7874] text-white"
            : "bg-[#f4c095]/20 text-[#1d7874] hover:bg-[#f4c095]/40"
        }`}
      >
        All Tasks
      </button>

      <button
        onClick={() => handleFilterChange("active")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeFilter === "active"
            ? "bg-[#1d7874] text-white"
            : "bg-[#f4c095]/20 text-[#1d7874] hover:bg-[#f4c095]/40"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => handleFilterChange("completed")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeFilter === "completed"
            ? "bg-[#1d7874] text-white"
            : "bg-[#f4c095]/20 text-[#1d7874] hover:bg-[#f4c095]/40"
        }`}
      >
        Completed
      </button>
    </div>
  );
};
