import React from "react";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

const BMR = () => {
  const {
    state: { bmr },
    dispatch,

    getBMR,
  } = useCalories();
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";

  return (
    <div className=" flex flex-col  border border-secondary items-center justify-center   rounded-2xl shadow-xl bg-primary  mx-2  h-[425px] md:h-[470px] w-[350px] md:w-[420px] my-3  ">
      <form className="flex flex-col items-center justify-center  font-semibold w-full  md:px-2 ">
        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary w-[300px] md:w-full mx-2 px-2 py-3  my-2 ">
          <label
            className={currentLanguageCode === "en" ? "mx-3" : " mx-4"}
            htmlFor="weight"
          >
            {t("Weight")}
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

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary w-[300px] md:w-full  px-2 py-3 my-2 ">
          <label className="mx-3" htmlFor="height">
            {t("Height")}
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

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary w-[300px] md:w-full  px-2 py-3 my-2 space-x-6">
          <label
            className={currentLanguageCode === "en" ? "pl-5" : "pr-5 mx-4"}
            htmlFor="age"
          >
            {t("Age")}
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

        <div className="flex items-center justify-center border border-secondary rounded-2xl shadow-xl bg-primary w-[300px] md:w-full p-3 space-x-4 my-2 ">
          <label className="font-bold mx-1">{t("Gender")} : </label>
          <div className={" space-x-1"}>
            <input
              className="cursor-pointer mx-1"
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
              {t("Male")}
            </label>
          </div>
          <div className=" space-x-1 cursor-default md:cursor-pointer">
            <input
              className=" cursor-pointer mx-1"
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
              {t("Female")}
            </label>
          </div>
        </div>

        <div className="border border-secondary  justify-evenly rounded-2xl shadow-xl bg-primary  flex w-[300px] md:w-full  my-2 ">
          <button
            onClick={(e) => {
              getBMR(e);
            }}
            className=" w-[150px] my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold cursor-pointer hover:shadow-2xl"
          >
            {t("BMR")}
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
