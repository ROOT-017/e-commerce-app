import React from "react";
interface propsType {
  text: string;
  styles?: string;
  fill?: boolean;
  width?: string;
  handleClick?: () => void;
}

const ButtonEmpty = ({ text, handleClick }: propsType) => {
  return (
    <button
      className={`lg:py-2 lg:px-4 px-2  py-1 transition-colors lg:w-[10em] lg:text-lg hover:border-cambridge_blue-400  border-2 text-cambridge_blue-400 hover:bg-cambridge_blue-400 rounded-full hover:text-white font-poppins border-cambridge_blue-300`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonEmpty;
