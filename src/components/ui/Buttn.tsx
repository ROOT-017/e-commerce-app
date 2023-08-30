import React from "react";
interface propsType {
  text: string;
  styles?: string;
  fill?: boolean;
  width?: string;
}

const Buttn = ({ text, styles, fill, width }: propsType) => {
  return (
    <button
      className={`py-2 px-4 border-2 transition-colors  lg:w-[10em] lg:text-lg text-white  hover:bg-cambridge_blue-400 bg-cambridge_blue-200 rounded-full hover:text-white font-poppins`}
    >
      {text}
    </button>
  );
};

export default Buttn;
