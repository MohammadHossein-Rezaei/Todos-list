import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search tasks..."
        className="w-full p-3 pl-10 rounded-lg border border-[#1d7874]/30 focus:border-[#f4c095] outline-none transition-all bg-white/50 backdrop-blur-sm"
      />
      <div className="absolute left-3 top-3.5 text-[#1d7874]/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};
