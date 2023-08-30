import React from "react";
import { HiPlus,HiMinus } from "react-icons/hi";
interface propsTypes {
  value: number;
  handleAdd: () => void;
  handleSubstarct: () => void;
}
const AmountSelector = (props: propsTypes) => {
  return (
    <div className="flex bg-background px-3 py-1 gap-4 justify-around lg:w-[8em] rounded-full items-center">
      <button onClick={props.handleSubstarct} className="text-xl">
        <HiMinus/>
      </button>
      <span className="text-cambridge_blue-400 font-bold">{props.value}</span>
      <button onClick={props.handleAdd}>
        <HiPlus />{" "}
      </button>
    </div>
  );
};

export default AmountSelector;
