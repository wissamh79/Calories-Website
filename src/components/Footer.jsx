import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row border border-secondary rounded-2xl shadow-xl bg-primary  md:max-w-[1140px] mx-4 w-[360px] sm:w-full sm:mx-2  py-2 md:py-0  my-3 space-y-3 md:space-y-0 ">
      <div className="flex items-center justify-center md:justify-start text-accent md:w-[50%]  space-x-3 md:mx-5 ">
        <div className="  font-semibold">
          <p className="">Contact :</p>
        </div>

        <div className=" flex space-x-5 ">
          <div className="">
            <a
              href="https://github.com/wissamh79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="">
            <a
              href="https://twitter.com/Wisamh79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:w-[50%]  ">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center font-semibold px-2 py-4 ">
          Created by
          <span className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2  mx-2 ">
            Wissam Hassan
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
