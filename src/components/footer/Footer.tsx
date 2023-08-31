import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { BsInstagram, BsGithub, BsGlobe } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../components/assets/logo.png";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="bg-hero-pattern bg-center mt-4 lg:m-0 text-white flex lg:block flex-col   ">
        <div className="lg:h-[15em] h-[10em] bg-[#0000005c] flex justify-center items-center font-poppins">
          <p className="lg:text-[3em] text-2xl">Let's Shop Beyond Boundries</p>
        </div>
        <div className="lg:h-[15em] flex-col lg:flex-row bg-[#000000de] flex w-full px-2 pt-12  font-poppins">
          <div className="md:w-1/3  gap-2 flex   flex-col justify-between pb-4 h-full">
            <div>
              <p>
                <img src={logo} alt="logo" />
              </p>
              <p className="lg:text-2xl text-xl ">Let's Shop Beyond Boundries</p>
            </div>
            <div className="pt-4">
              <ul className="flex gap-4 h-full ">
                <li>
                  <a
                    href={"https://www.twitter.com/RootMultivate"}
                    target="_blank"
                  >
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://www.instagram.com/jeezyway_terence"}
                    target="_blank"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://www.linkedin.com/in/terence-ngwen-238aa5231/"
                    }
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href={"https://www.github.com/ROOT-017"} target="_blank">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://nkwetacha-terence-root-017.vercel.app/"
                    target="_blank"
                  >
                    <BsGlobe />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/3 lg:flex lg:flex-row justify-between h-full">
            <ul>
              <li className="py-2 text-2xl text-gray-500 pb-2">BeliBeli</li>
              <li className="py-2">About BeliBeli</li>
              <li className="py-2">Career</li>
              <li className="py-2">Mitra Blog</li>
              <li className="py-2">B2B Digital</li>
            </ul>
            <ul>
              <li className="py-2 text-2xl text-gray-500 pb-2">Buy</li>
              <li className="py-2">Bill & Top</li>
              <li className="py-2">BeliBeli COD</li>
              <li className="py-2">Mitra Blog</li>
              <li className="py-2">Promo</li>
            </ul>
            <ul>
              <li className="py-2 text-2xl text-gray-500 pb-2">Sell</li>
              <li className="py-2">Seller Education Center</li>
              <li className="py-2">Brand Index</li>
              <li className="py-2">Mitra Blog</li>
              <li className="py-2">Reister Official Store</li>
            </ul>
            <ul>
              <li className="py-2 text-2xl text-gray-500 pb-2">
                Guide and Help
              </li>
              <li className="py-2">BeliBeli Care</li>
              <li className="py-2">Terms and Condition</li>
              <li className="py-2">Privacy</li>
              <li className="py-2">Mitra</li>
            </ul>
          </div>
        </div>
        <div className="h-[4em] bg-[#000000de]"></div>
        <div className="h-[4em] bg-[#000000de] gap-4 text-sm flex justify-center items-center p-4">
          &copy;2001-{new Date().getFullYear()}{" "}
          <span className="font-poppins ">
            Made with &#9829; &#x2665; from Cameroon
          </span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;