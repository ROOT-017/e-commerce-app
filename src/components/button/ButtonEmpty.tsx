import React from "react";
interface propsType {
  text: string;
  styles?: string;
  fill?: boolean;
  width?: string;
}

const ButtonEmpty = ({ text }: propsType) => {
  return (
    <button
      className={`py-2 px-4 transition-colors lg:w-[10em] lg:text-lg hover:border-cambridge_blue-300 border-2 text-cambridge_blue-400 hover:bg-cambridge_blue-400 rounded-full hover:text-white font-poppins border-cambridge_blue-300`}
    >
      {text}
    </button>
  );
};

export default ButtonEmpty;
