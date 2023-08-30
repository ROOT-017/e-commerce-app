// import { link } from "fs";
import React from "react";
import { TbSlash } from "react-icons/tb";

interface propsTypes {
  path: string[];
  productName: string;
  category: string;
}
const Pagnation = (props: propsTypes) => {
  const { path, productName } = props;
  return (
    <ul className="flex text-xs pl-2 lg:pl-0 md:text-lg font-poppins py-2 text-slate-400">
      {path.map((el, index) => (
        <li key={el} className="flex capitalize justify-center items-center">
          {el}
          <span className="px-2 ">
            <TbSlash />
          </span>
        </li>
      ))}
      <span className="font-bold text-cambridge_blue-400">{productName}</span>
    </ul>
  );
};

export default Pagnation;
