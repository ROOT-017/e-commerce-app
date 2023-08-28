import React from "react";
import Filter from "./Filter";

const FilterSection = () => {
  return (
    <div className="flex py-4 px-2 justify-between items-center">
      <div className="flex ">
        <Filter />
      </div>
      <div>Sort</div>
    </div>
  );
};

export default FilterSection;
