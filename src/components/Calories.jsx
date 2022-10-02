import React from "react";
import useCalories from "../context/caloriesContext/useCalories";

const Calories = () => {
  const {
    state: { bmr, basicNeeds, dailyCalories, activitiesExplain },
    handleActivitiesChange,
    handleBasicNeedsInputChange,
    getBasicNeeds,
    handleGoalChange,
    handleDailyCaloriesInputChange,
    getDailyCalories,
  } = useCalories();

  const handleBasicNeedsSubmit = (e) => {
    e.preventDefault();

    getBasicNeeds();
  };
  const handleGetDailyCaloriesSubmit = (e) => {
    e.preventDefault();

    getDailyCalories();
  };
  return (
    <div className="h-[470]">
      <form className="border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly md:my-5 font-bold py-3">
        <div>
          <div className="flex border border-secondary  items-center justify-center rounded-2xl shadow-xl bg-primary my-3 py-2 space-x-3">
            <label>Activities :</label>
            <div className=" space-x-1">
              <input
                type="radio"
                name="gender"
                value="1.2"
                id="1.2"
                onChange={(e) => handleActivitiesChange(e)}
                defaultChecked
              />
              <label htmlFor="1.2">1.2</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                name="gender"
                value="1.3"
                id="1.3"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.3">1.3</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                name="gender"
                value="1.5"
                id="1.5"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.5">1.5</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                name="gender"
                value="1.7"
                id="1.7"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.7">1.7</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                name="gender"
                value="1.9"
                id="1.9"
                onChange={(e) => handleActivitiesChange(e)}
              />
              <label htmlFor="1.9">1.9</label>
            </div>
          </div>

          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary ">
            <p className="text-1xl max-w-[400px] h-[50px] text-center items-center justify-center ">
              {activitiesExplain}
            </p>
          </div>

          <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-4 py-1 my-2 space-x-2">
            <button
              onClick={handleBasicNeedsSubmit}
              className=" my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl"
            >
              Basic Needs
            </button>
            <input
              onChange={(e) => handleBasicNeedsInputChange(e)}
              className="bg-primary border border-input rounded-2xl shadow-xl px-4 py-2 text-center"
              type="number"
              placeholder={bmr ? bmr : "Your BMR is ?"}
            />
          </div>
          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary ">
            <p className="text-1xl h-[30px]">{basicNeeds}</p>
          </div>
        </div>
      </form>
      <form className=" border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly md:my-5 font-bold my-3 py-3 px-2">
        <div>
          <div className="flex border border-secondary items-center justify-center rounded-2xl shadow-xl bg-primary py-1 space-x-3">
            <label>Goal :</label>
            <div className=" space-x-1">
              <input
                type="radio"
                name="goal"
                value="loseWeight"
                id="loseWeight"
                onChange={(e) => handleGoalChange(e)}
                defaultChecked
              />
              <label htmlFor="loseWeight">Lose Weight</label>
            </div>
            <div className=" space-x-1">
              <input
                type="radio"
                name="goal"
                value="gainWeight"
                id="gainWeight"
                onChange={(e) => handleGoalChange(e)}
              />
              <label htmlFor="gainWeight">Gain Weight</label>
            </div>
          </div>
          <div className="border border-secondary rounded-2xl shadow-xl bg-primary px-4 py-1 my-2 space-x-2">
            <button
              onClick={handleGetDailyCaloriesSubmit}
              className=" my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl"
            >
              Daily Calories
            </button>
            <input
              className="bg-primary border border-input rounded-2xl shadow-xl px-4 py-2"
              type="number"
              id="age"
              onChange={(e) => handleDailyCaloriesInputChange(e)}
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
