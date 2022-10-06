import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="border border-secondary rounded-2xl shadow-xl bg-primary  md:max-w-[1140px] w-[360px] sm:w-full flex items-center mx-4   my-3">
      <div className="flex justify-start  w-[49%] ">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center font-semibold px-2 py-4 ">
          <span className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2 mx-2">
            Calories
          </span>
          Calculator
        </p>
      </div>
      <div className="flex justify-center md:justify-start w-[51%] ">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
