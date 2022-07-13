// import from library
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import from file
import Brand from "../components/Brand";

const Footer = () => {
  return (
    <div className="bg-white w-full mt-8 flex px-4 py-8 cursor-pointer relative">
      <div className="w-1/4 flex flex-col items-center justify-center px-4">
        <Brand />
        <p className="text-textColor text-base pt-4">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </p>
        <div className="flex justify-start w-full">
          <FontAwesomeIcon
            className="py-4 px-[17px] mt-2 mr-2 bg-slate-100 hover:bg-slate-200 hover:text-2xl"
            style={{ borderRadius: "50%" }}
            icon={faLinkedinIn}
          />
          <FontAwesomeIcon
            className="p-4 mt-2 mr-2 bg-slate-100 hover:bg-slate-200 hover:text-2xl"
            style={{ borderRadius: "50%" }}
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="py-4 px-[19px] mt-2 mr-2 bg-slate-100 hover:bg-slate-200 hover:text-2xl"
            style={{ borderRadius: "50%" }}
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            className="py-4 px-[17px] mr-2 mt-2 bg-slate-100 hover:bg-slate-200 hover:text-2xl"
            style={{ borderRadius: "50%" }}
            icon={faInstagram}
          />
        </div>
      </div>
      <div className="w-1/4 p-4">
        <h1 className="font-bold text-xl text-black">Product</h1>
        <ul>
          <li className="hover:text-mainColor1 my-1">Theme Design</li>
          <li className="hover:text-mainColor1 my-1">Plugin Design</li>
          <li className="hover:text-mainColor1 my-1">Wordpress</li>
          <li className="hover:text-mainColor1 my-1">Joomla Template</li>
          <li className="hover:text-mainColor1 my-1">HTML Template</li>
        </ul>
      </div>
      <div className="w-1/4 p-4">
        <h1 className="font-bold text-xl text-black">Useful Link</h1>
        <ul>
          <li className="hover:text-mainColor1 my-1">Blog</li>
          <li className="hover:text-mainColor1 my-1">Pricing</li>
          <li className="hover:text-mainColor1 my-1">Sales</li>
          <li className="hover:text-mainColor1 my-1">Certifications</li>
          <li className="hover:text-mainColor1 my-1">Customer Service</li>
        </ul>
      </div>
      <div className="w-1/4 p-4">
        <h1 className="font-bold text-xl text-black">Address</h1>
        <ul>
          <li className="hover:text-mainColor1 my-1">123 ABCDEFGH</li>
          <li className="hover:text-mainColor1 my-1">XYZ!@#$%</li>
          <li className="hover:text-mainColor1 my-1">!!!!!!!!</li>
        </ul>
      </div>
      <div className="absolute top-[220px] p-4 rounded-lg right-[30px] bg-slate-200 text-black">
        21/2/2021 05AM:15
      </div>
    </div>
  );
};

export default Footer;
