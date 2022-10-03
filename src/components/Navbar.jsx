import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="border border-secondary rounded-2xl shadow-xl bg-primary  max-w-[1140px] w-full mx-auto flex items-center  my-3">
      <div className="flex justify-start  w-[49%] font-bold">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center px-2 py-4 ">
          <span className="bg-button text-btnText rounded-2xl shadow-xl px-4 p-2 mx-2">
            Calories
          </span>
          Calculator
        </p>
      </div>
      <div className="flex justify-end md:justify-start w-[51%] ">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
