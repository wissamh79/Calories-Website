import React from "react";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";

const BMR = () => {
  const {
    state: { bmr },
    dispatch,

    getBMR,
  } = useCalories();

  return (
    <div className=" flex flex-col  border border-secondary items-center justify-center   rounded-2xl shadow-xl bg-primary  mx-2  h-[425px] md:h-[470px]  md:w-[420px] my-3  ">
      <form className="flex flex-col items-center justify-center  font-semibold w-full px-2  ">
        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary md:w-full mx-2 px-2 py-3  my-2 ">
          <label className="mx-3" htmlFor="weight">
            Weight
          </label>
          <input
            onChange={(e) =>
              dispatch({
                type: actions.init,
                data: { weight: e.target.value },
              })
            }
            className="bg-primary border border-input rounded-2xl shadow-xl text-center  py-2"
            type="number"
            id="weight"
          />
        </div>

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary md:w-full  px-2 py-3 my-2 ">
          <label className="mx-3" htmlFor="height">
            Height
          </label>
          <input
            onChange={(e) =>
              dispatch({
                type: actions.init,
                data: { height: e.target.value },
              })
            }
            className="bg-primary border border-input rounded-2xl shadow-xl text-center  py-2 "
            type="number"
            id="height"
          />
        </div>

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary md:w-full  px-2 py-3 my-2 space-x-6">
          <label className="pl-5" htmlFor="age">
            Age
          </label>
          <input
            onChange={(e) =>
              dispatch({
                type: actions.init,
                data: { age: e.target.value },
              })
            }
            className="bg-primary border border-input rounded-2xl text-center shadow-xl py-2"
            type="number"
            id="age"
          />
        </div>

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary md:w-full p-3 space-x-4 my-2 ">
          <label className="font-bold">Gender :</label>
          <div className=" space-x-1">
            <input
              className="cursor-pointer"
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { gender: e.target.value },
                })
              }
              defaultChecked
            />
            <label htmlFor="male" className="cursor-pointer">
              Male
            </label>
          </div>
          <div className=" space-x-1 cursor-pointer">
            <input
              className=" cursor-pointer"
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { gender: e.target.value },
                })
              }
            />
            <label htmlFor="female" className="cursor-pointer">
              Female
            </label>
          </div>
        </div>

        <div className="border border-secondary  justify-evenly rounded-2xl shadow-xl bg-primary  flex md:w-full  my-2 ">
          <button
            onClick={(e) => {
              getBMR(e);
            }}
            className=" w-[150px] my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold hover:shadow-2xl"
          >
            BMR
          </button>
          <div className="border border-secondary items-center justify-center text-center rounded-2xl shadow-xl bg-primary w-[100px] my-3 py-2 ">
            <p className=" text-1xl text-center font-bold  ">{bmr}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BMR;
