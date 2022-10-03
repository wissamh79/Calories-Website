import React from "react";
import useCalories from "../context/caloriesContext/useCalories";

const BMR = () => {
  const {
    state: { bmr },

    handleWeightChange,
    handleHeightChange,
    handleAgeChange,
    handleGenderChange,
    getBMR,
  } = useCalories();

  const handleBMRSubmit = (e) => {
    e.preventDefault();

    getBMR();
  };

  return (
    <div className=" grid border border-secondary items-center justify-center content-center  rounded-2xl shadow-xl bg-primary px-2 h-[470px] w-[420px] my-3 ">
      <form className="flex flex-col items-center justify-evenly font-bold ">
        <div className="border border-secondary rounded-2xl shadow-xl bg-primary h-full px-2 py-3 my-2 space-x-2">
          <label htmlFor="weight">Weight</label>
          <input
            onChange={(e) => handleWeightChange(e)}
            className="bg-primary border border-input rounded-2xl shadow-xl px-4 py-2"
            type="number"
            id="weight"
          />
        </div>

        <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-2 py-3 my-2 space-x-2">
          <label htmlFor="height">Height</label>
          <input
            onChange={(e) => handleHeightChange(e)}
            className="bg-primary border border-input rounded-2xl shadow-xl px-4 py-2 "
            type="number"
            id="height"
          />
        </div>

        <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-4 py-3 my-2 space-x-2">
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => handleAgeChange(e)}
            className="bg-primary border border-input rounded-2xl shadow-xl px-4 py-2"
            type="number"
            id="age"
          />
        </div>

        <div className="flex border border-secondary rounded-2xl shadow-xl bg-primary p-3 space-x-3 my-2">
          <label>Gender:</label>
          <div className=" space-x-1">
            <input
              className="cursor-pointer"
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={(e) => handleGenderChange(e)}
              defaultChecked
            />
            <label htmlFor="male" className="cursor-pointer">
              Male
            </label>
          </div>
          <div className=" space-x-1 cursor-pointer">
            <input
              className="cursor-pointer"
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={(e) => handleGenderChange(e)}
            />
            <label htmlFor="female" className="cursor-pointer">
              Female
            </label>
          </div>
        </div>

        <div className="border border-secondary  justify-evenly rounded-2xl shadow-xl bg-primary w-full flex   my-2 ">
          <button
            onClick={handleBMRSubmit}
            className=" w-[150px] my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:shadow-2xl"
          >
            BMR
          </button>
          <div className="border border-secondary items-center justify-center text-center rounded-2xl shadow-xl bg-primary w-[100px] my-3 py-2 ">
            <p className=" text-1xl text-center  ">{bmr}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BMR;
