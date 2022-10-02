import React from "react";
import BMR from "./BMR";
import Calories from "./Calories";

const Home = () => {
  return (
    <div className="rounded-div flex flex-col  md:flex-row items-center justify-evenly  ">
      <BMR />
      <Calories />
    </div>
  );
};

export default Home;
