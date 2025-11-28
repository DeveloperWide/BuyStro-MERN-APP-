import React from "react";

const SearchInput = () => {
  return (
    <label className="input outline-offset-1 outline-[#ff9648] focus:outline shadow-[#414d5e] shadow-xl/30 w-[70%] pr-[10px] md:pr-0 md:w-[50%]">
      <svg
        className="h-[1.7em] "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search" required placeholder="Search buystro.com" />
    </label>
  );
};

export default SearchInput;
