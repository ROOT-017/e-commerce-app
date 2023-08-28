import React from "react";
import heroImg from "../components/assets/heroImage.png";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="flex w-full pl-4 bg-burnt_sienna-900 lg:pl-32 font-poppins">
      <div className="lg:w-1/2 m-auto">
        <p className="text-[0.875rem] leading-[1.25rem] lg:leading-normal  lg:text-[3em]   font-[600] text-cambridge_blue-200">
          Grab Upto 50% Off On
        </p>
        <p className="text-[0.875rem] leading-[1.25rem] lg:leading-normal  lg:text-[3em]  font-[600] text-cambridge_blue-200">
          Selected Headphone
        </p>
        <div className="pt-4 lg:pt-6 ">
          <button className="text-white lg:text-lg bold bg-cambridge_blue-200 lg:px-12 px-6 py-2 lg:py-4  rounded-full">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-1/2 flex h-fit items-end ">
        <img
          className={classes.img}
          src={heroImg}
          alt="girl-wearing-headset"
          unselectable={`on`}
        />
      </div>
    </div>
  );
};

export default Hero;
