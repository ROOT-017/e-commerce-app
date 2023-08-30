import React from "react";
// import Filter from "./Filter";
import Dropdown from "./Dropdown";

const FilterSection = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="flex py-4  lg:py-12 px-2  justify-between items-center">
      <div className="flex gap-4 flex-wrap">
        {/* <Dropdown options={options} />
        <Dropdown options={options} />
        <Dropdown options={options} /> */}
      </div>
      <div className="hidden lg:block">
        <Dropdown
          options={options}
          initialOption={{
            label: "Sort by",
            value: "",
          }}
        />
      </div>
    </div>
  );
};

export default FilterSection;
