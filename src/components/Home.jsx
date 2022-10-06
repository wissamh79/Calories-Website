import React from "react";
import BMR from "./BMR";
import Calories from "./Calories";

const Home = () => {
  return (
    <div className="rounded-div flex flex-col  md:flex-row items-center justify-evenly md:space-x-3 ">
      <BMR />
      <Calories />
    </div>
  );
};

export default Home;
