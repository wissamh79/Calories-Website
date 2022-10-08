import React from "react";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

const Calories = () => {
  const {
    state: { bmr, basicNeeds, dailyCalories, activitiesExplain, dir },
    dispatch,
    handleActivitiesChange,

    getBasicNeeds,

    getDailyCalories,
  } = useCalories();
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";

  return (
    <div
      className="  flex flex-col items-center justify-center md:h-[470px]     md:w-[420px] mx-2  "
      dir={dir}
    >
      <form className="border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly sm:w-full my-3 md:my-1   px-2  py-3">
        <div>
          <div className=" flex flex-col md:flex-row border border-secondary  items-center justify-center rounded-2xl shadow-xl bg-primary font-semibold   my-2 py-2 space-y-1 md:space-x-3">
            <label className="font-bold ">{t("Activities")} : </label>
            <div className="flex space-x-4">
              <div className=" space-x-1 mx-1">
                <input
                  className="cursor-pointer mx-1"
                  type="radio"
                  name="gender"
                  value="1.2"
                  id="1.2"
                  onChange={(e) => handleActivitiesChange(e)}
                  defaultChecked
                />
                <label htmlFor="1.2" className="cursor-pointer mx-1">
                  1.2
                </label>
              </div>
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-1"
                  type="radio"
                  name="gender"
                  value="1.375"
                  id="1.3"
                  onChange={(e) => handleActivitiesChange(e)}
                />
                <label htmlFor="1.3" className="cursor-pointer mx-1">
                  1.3
                </label>
              </div>
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-1"
                  type="radio"
                  name="gender"
                  value="1.55"
                  id="1.5"
                  onChange={(e) => handleActivitiesChange(e)}
                />
                <label htmlFor="1.5" className="cursor-pointer mx-1">
                  1.5
                </label>
              </div>
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-1"
                  type="radio"
                  name="gender"
                  value="1.725"
                  id="1.7"
                  onChange={(e) => handleActivitiesChange(e)}
                />
                <label htmlFor="1.7" className="cursor- mx-1">
                  1.7
                </label>
              </div>
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-1"
                  type="radio"
                  name="gender"
                  value="1.9"
                  id="1.9"
                  onChange={(e) => handleActivitiesChange(e)}
                />
                <label htmlFor="1.9" className="cursor-pointer ">
                  1.9
                </label>
              </div>
            </div>
          </div>

          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary    ">
            <p className="text-1xl md:w-[395px] h-[50px] text-center items-center justify-center px-2  ">
              {activitiesExplain}
            </p>
          </div>

          <div className="flex flex-col-reverse items-center justify-center md:flex-row border border-secondary rounded-2xl shadow-xl bg-primary  py-1 my-2   md:space-x-2">
            <button
              onClick={(e) => {
                getBasicNeeds(e);
              }}
              className=" my-2 mx-3   p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold h-[50px] w-[250px] md:w-[135px] hover:shadow-2xl"
            >
              {t("Basic Need")}
            </button>
            <input
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { basicNeedsInput: e.target.value },
                })
              }
              className=" my-2  bg-primary border border-input rounded-2xl shadow-xl h-[50px] w-[250px] md:w-[200px]   py-2 text-center"
              type="number"
              placeholder={bmr ? bmr : t("Your BMR is ?")}
            />
          </div>
          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary my-1   ">
            <p className="text-1xl h-[30px] font-bold">{basicNeeds}</p>
          </div>
        </div>
      </form>
      <div className=" border border-secondary rounded-2xl shadow-xl bg-primary flex flex-col items-center justify-evenly sm:w-full mb-5 mt-3  md:my-1 mb-   font-bold px-2 py-3   ">
        <form>
          <div className="flex flex-col md:flex-row border border-secondary items-center justify-center rounded-2xl shadow-xl bg-primary my-1 py-1  space-y-1 md:space-x-3">
            <label>{t("Goal")} :</label>
            <div className="flex items-center justify-center  space-x-4 ">
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-2"
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
                  className="font-semibold cursor-pointer "
                >
                  {t("Lose Weight")}
                </label>
              </div>
              <div className=" space-x-1">
                <input
                  className="cursor-pointer mx-2 "
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
                  {t("Gain Weight")}
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row border border-secondary rounded-2xl shadow-xl bg-primary px-6 md:px-4 py-1  my-2 md:space-x-2">
            <button
              onClick={(e) => {
                getDailyCalories(e);
              }}
              className=" my-2 mx-3 p-3 bg-button text-btnText rounded-2xl shadow-xl h-[50px]   w-[250px] md:w-[135px] hover:shadow-2xl"
            >
              {t("Daily Calories")}
            </button>
            <input
              className=" my-2 bg-primary border border-input rounded-2xl shadow-xl h-[50px]  w-[250px] md:w-[200px] font-semibold text-center px-2  py-2"
              type="number"
              placeholder={`${t("Number")} 100-500`}
              onChange={(e) =>
                dispatch({
                  type: actions.init,
                  data: { dailyCaloriesInput: e.target.value },
                })
              }
            />
          </div>

          <div className="border border-secondary text-center rounded-2xl shadow-xl bg-primary my-1 ">
            <p className="text-1xl h-[30px] ">{dailyCalories}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calories;
