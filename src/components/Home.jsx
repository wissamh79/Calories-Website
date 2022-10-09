import React from "react";
import BMR from "./BMR";
import Calories from "./Calories";
import useCalories from "../context/caloriesContext/useCalories";

const Home = () => {
  const {
    state: { dir },
  } = useCalories();
  return (
    <div
      className="  rounded-div flex flex-col  md:flex-row items-center justify-evenly md:space-x-3 "
      dir={dir}
    >
      <BMR />
      <Calories />
    </div>
  );
};

export default Home;
