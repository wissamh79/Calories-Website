import React from "react";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";

const Calories = () => {
  const {
    state: { bmr, basicNeeds, dailyCalories, activitiesExplain },
    dispatch,
    handleActivitiesChange,

    getBasicNeeds,

    getDailyCalories,
  } = useCalories();

  return (
    <div className="h-[470] w-[420px] ">
      <form className="border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly md:my-5  py-3">
        <div>
          <div className="flex border border-secondary  items-center justify-center rounded-2xl shadow-xl bg-primary font-semibold my-3 py-2 space-x-3">
            <label className="font-bold">Activities :</label>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                value="1.2"
                id="1.2"
                onChange={(e) => handleActivitiesChange(e)}
                defaultChecked
              />
              <label htmlFor="1.2" className="cursor-pointer">
                1.2
              </label>
            </div>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                value="1.375"
                id="1.3"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.3" className="cursor-pointer">
                1.3
              </label>
            </div>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                value="1.55"
                id="1.5"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.5" className="cursor-pointer">
                1.5
              </label>
            </div>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                value="1.725"
                id="1.7"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.7" className="cursor-pointer">
                1.7
              </label>
            </div>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="gender"
                value="1.9"
                id="1.9"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.9" className="cursor-pointer">
                1.9
              </label>
            </div>
          </div>

          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary ">
            <p className="text-1xl w-[395px] h-[50px] text-center items-center justify-center ">
              {activitiesExplain}
            </p>
          </div>

          <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-4 py-1 my-2 space-x-2">
            <button
              onClick={(e) => {
                getBasicNeeds(e);
              }}
              className=" my-2  p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold w-[135px] hover:shadow-2xl"
            >
              Basic Needs
            </button>
            <input
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { basicNeedsInput: e.target.value },
                })
              }
              className="bg-primary border border-input rounded-2xl shadow-xl w-[225px]  px-4 py-2 text-center"
              type="number"
              placeholder={bmr ? bmr : "Your BMR is ?"}
            />
          </div>
          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary ">
            <p className="text-1xl h-[30px] font-bold">{basicNeeds}</p>
          </div>
        </div>
      </form>
      <form className=" border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly md:my-5 font-bold my-3 py-3 px-2">
        <div>
          <div className="flex border border-secondary items-center justify-center rounded-2xl shadow-xl bg-primary py-1 space-x-3">
            <label>Goal :</label>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="goal"
                value="loseWeight"
                id="loseWeight"
                onChange={(e) =>
                  dispatch({
                    type: actions.init,
                    data: { goal: e.target.value },
                  })
                }
                defaultChecked
              />
              <label
                htmlFor="loseWeight"
                className="font-semibold cursor-pointer"
              >
                Lose Weight
              </label>
            </div>
            <div className=" space-x-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="goal"
                value="gainWeight"
                id="gainWeight"
                onChange={(e) =>
                  dispatch({
                    type: actions.init,
                    data: { goal: e.target.value },
                  })
                }
              />
              <label
                htmlFor="gainWeight"
                className="font-semibold cursor-pointer"
              >
                Gain Weight
              </label>
            </div>
          </div>
          <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-4 py-1 my-2 space-x-2">
            <button
              onClick={(e) => {
                getDailyCalories(e);
              }}
              className=" my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl w-[135px] hover:shadow-2xl"
            >
              Daily Calories
            </button>
            <input
              className="bg-primary border border-input rounded-2xl shadow-xl w-[225px] font-semibold text=center px-4 py-2"
              type="number"
              placeholder={"Number 100-500"}
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { dailyCaloriesInput: e.target.value },
                })
              }
            />
          </div>

          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary ">
            <p className="text-1xl h-[30px] ">{dailyCalories}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calories;
