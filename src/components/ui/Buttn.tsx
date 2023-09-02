import React from "react";
interface propsType {
  text: string;
  styles?: string;
  fill?: boolean;
  width?: string;
  handleClick?: () => void;
}

const Buttn = ({ text, handleClick }: propsType) => {
  return (
    <button
      onClick={handleClick}
      className={`lg:py-2 lg:px-4 px-2  py-1 border-2 border-cambridge_blue-200 hover:border-cambridge_blue-400 transition-colors  lg:w-[10em] lg:text-lg text-white  hover:bg-cambridge_blue-400 bg-cambridge_blue-200 rounded-full hover:text-white font-poppins`}
    >
      {text}
    </button>
  );
};

export default Buttn;
