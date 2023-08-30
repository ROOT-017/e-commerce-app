import React from "react";
interface propsType {
  text: string;
  styles?: string;
  fill?: boolean;
  width?: string;
}

const Button = ({ text, styles, fill, width }: propsType) => {
  const buttonFill = fill ? "  " : null;

  return (
    <button
      className={
        `lg:px-4 py-1 px-2 text-sm lg:text-lg transition-colors  ease-in-out duration-300 border hover:bg-cambridge_blue-400 rounded-full hover:text-white font-poppins` +
        styles +
        buttonFill +
        width
      }
    >
      {text}
    </button>
  );
};

export default Button;
