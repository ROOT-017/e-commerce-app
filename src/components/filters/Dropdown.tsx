import React, { useState } from "react";

interface DropdownProps {
  options: { label: string; value: string }[];
  initialOption?: { label: string; value: string };
  border?: false;
}

const initialState = {
  label: "Select an option",
  value: "",
};
const Dropdown = ({ options, initialOption, border }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialOption || initialState
  );

  const toggleDropdown = () => {
    // console.log("is closed");
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const isBorder = border ? "border" : null;
  //ensure that dropdown closes click outside
  // useEffect(() => {
  //   if (isOpen) {
  //     document.addEventListener("click", closeDropdown);
  //   }
  //   // document.addEventListener("click", closeDropdown);

  //   return () => {
  //     document.removeEventListener("click", closeDropdown);
  //   };
  // }, [isOpen]);

  return (
    <div className="relative min-w-[8em] inline-block text-left">
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          type="button"
          className={
            `inline-flex w-full border justify-between rounded-full  border-gray-300 shadow-sm px-2 py-1 bg-white text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cambridge_blue-400 ` +
            isBorder
          }
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption ? selectedOption.label : "Select an option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
