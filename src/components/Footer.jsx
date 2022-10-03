import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row border border-secondary rounded-2xl shadow-xl bg-primary  max-w-[1140px] w-full mx-auto py-2 md:py-0  my-3 space-y-3 md:space-y-0 ">
      <div className="flex items-center justify-center md:justify-start text-accent md:w-[50%]  space-x-3 mx-5 ">
        <div className="  font-bold">
          <p className="">Contact :</p>
        </div>

        <div className=" flex space-x-5 ">
          <div className="">
            <a href="https://github.com/wissamh79" target="_blank">
              <FaGithub />
            </a>
          </div>
          {/* <div className="flex space-x-2 ">
            <FiMail />
            <p className="">wsamh797@gmail.com</p>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:w-[50%] font-bold ">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center px-2 py-4 ">
          Created by
          <span className="bg-button text-btnText rounded-2xl shadow-xl px-4 p-2  mx-2 ">
            Wissam Hassan
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
