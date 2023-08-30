import React, { useState } from "react";
import "./AvailableColors.module.css";

interface AvailableColorsPropsTypes {
  colors?: string[];
  isActive: boolean;
  isColor: string;
  handleColor: (color: string) => void;
}

const AvailableColors = ({
  colors,
  handleColor,
  isColor,
}: AvailableColorsPropsTypes) => {
  const [isActive, setIsActive] = useState("");
  //   useEffect(() => {
  // if(isColor === c)
  //   }, [isColor]);
  const setColor = (color: string) => {
    handleColor(color);
    // const elt = document.getElementById("active-color");
    setIsActive(color);
  };
  return (
    <ul className="flex w-full lg:py-4 pt-2 gap-4">
      {colors!.length > 0 ? (
        colors?.map((color) => (
          <li
            key={color}
            id={color === isActive ? "active" : undefined}
            // id={color === isActive ? "active" : undefined}
            style={{
              backgroundColor: color,
              border: `${isActive === color ? "5px solid #ff0" : undefined}`,
            }}
            className={
              color === isActive
                ? `lg:h-8 h-6 lg:w-8 w-6 rounded-full ring-4 ring-cambridge_blue-600 border-5 active`
                : "lg:h-8 h-6 lg:w-8 w-6 rounded-full ring-4 ring-cambridge_blue-600 "
            }
            onClick={() => {
              setColor(color);
            }}
          ></li>
        ))
      ) : (
        <li className="h-8 w-8 bg-red-500 rounded-full ring-4 ring-cambridge_blue-600"></li>
      )}{" "}
    </ul>
  );
};

export default AvailableColors;
