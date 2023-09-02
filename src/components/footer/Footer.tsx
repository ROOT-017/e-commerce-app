import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { BsInstagram, BsGithub, BsGlobe } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../components/assets/logo.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="bg-hero-pattern bg-center mt-4 text-white flex lg:block flex-col   ">
        <div className="lg:h-[15em] h-[10em] bg-[#0000005c] flex justify-center items-center font-poppins">
          <p className="lg:text-[3em] flex gap-4 items-center text-lg lg:text-2xl">
          <ImQuotesLeft />
            <span className="">
              {" "}
              Let's Shop Beyond Boundries
            </span>{" "}
            <ImQuotesRight />
          </p>
        </div>
        <div className="lg:h-[15em] flex-col lg:flex-row bg-[#000000de] flex w-full px-2 pt-12  font-poppins">
          <div className="md:w-1/3  gap-2 flex   flex-col justify-between pb-4 h-full">
            <div className="pt-4 lg:pt-0">
              <p className="text-center">
                <img src={logo} alt="logo" className="lg:w-[10em]" />
              </p>
              <p className="lg:text-2xl text-xl text-center lg:text-left">
                Let's Shop Beyond Boundries
              </p>
            </div>
            <div className="pt-4">
              <ul className="flex gap-4 h-full justify-center lg:justify-normal">
                <li>
                  <a href={"https://www.twitter.com/RootMultivate"}>
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a href={"https://www.instagram.com/jeezyway_terence"}>
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://www.linkedin.com/in/terence-ngwen-238aa5231/"
                    }
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href={"https://www.github.com/ROOT-017"}>
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="https://nkwetacha-terence-root-017.vercel.app/">
                    <BsGlobe />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/3 lg:flex lg:flex-row justify-between h-full ">
            <div className="pt-4 lg:pt-0">
              <p className="py-2 text-center lg:text-left text-2xl text-gray-500 pb-2">
                BeliBeli
              </p>
              <ul className="flex justify-between  g-1 lg:block">
                <li className="py-2">About BeliBeli</li>
                <li className="py-2">Career</li>
                <li className="py-2">Mitra Blog</li>
                <li className="py-2">B2B Digital</li>
              </ul>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="py-2 text-center lg:text-left text-2xl text-gray-500 pb-2">
                Buy
              </p>
              <ul className="flex justify-between  g-1 lg:block">
                <li className="py-2">Bill & Top</li>
                <li className="py-2">BeliBeli COD</li>
                <li className="py-2">Mitra Blog</li>
                <li className="py-2">Promo</li>
              </ul>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="py-2 text-center lg:text-left text-2xl text-gray-500 pb-2">
                Sell
              </p>
              <ul className="flex justify-between  g-1 lg:block">
                <li className="py-2">Seller Education Center</li>
                <li className="py-2">Brand Index</li>
                <li className="py-2">Mitra Blog</li>
                <li className="py-2">Reister Official Store</li>
              </ul>
            </div>
            <div className="pt-4 lg:pt-0">
              {" "}
              <p className="py-2 text-center lg:text-left text-2xl text-gray-500 pb-2">
                Guide and Help
              </p>
              <ul className="flex justify-between  g-1 lg:block">
                <li className="py-2">BeliBeli Care</li>
                <li className="py-2">Terms and Condition</li>
                <li className="py-2">Privacy</li>
                <li className="py-2">Mitra</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[4em] bg-[#000000de]"></div>
        <div className="h-[4em] bg-[#000000de] gap-4 text-sm flex justify-center items-center p-4">
          &copy;1997-{new Date().getFullYear()}
          <span className="font-poppins ">Made with &#9829; from Cameroon</span>
          <span className="text-sm text-gray-400">creator @terence</span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
