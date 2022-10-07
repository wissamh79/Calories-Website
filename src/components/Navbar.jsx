import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";
import i18next from "i18next";
import cookie from "js-cookie";
// import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const {
    state: { languages },
    dispatch,
  } = useCalories();
  const changeDir = () => {
    const currentLanguageCode = cookie.get("i18next") || "en";

    currentLanguageCode === "ar"
      ? dispatch({
          type: actions.init,
          data: { dir: "rtl" },
        })
      : dispatch({
          type: actions.init,
          data: { dir: "ltr" },
        });
  };

  useEffect(() => {
    /* eslint-disable-next-line*/ changeDir();
  }, [languages]);
  return (
    <div className="border border-secondary rounded-2xl shadow-xl bg-primary  md:max-w-[1140px] w-[360px] sm:w-full flex items-center mx-4   my-3">
      <div className="flex justify-start  w-[49%] ">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center font-semibold px-2 py-4 ">
          <span className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2 mx-2">
            Calories
          </span>
          Calculator
        </p>
      </div>
      <div className="flex justify-between w-[51%] ">
        <ThemeToggle />

        <button
          className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2 mx-4"
          onClick={() => {
            i18next.changeLanguage(languages === false ? "en" : "ar");

            dispatch({
              type: actions.init,
              data: { languages: languages === false ? true : false },
            });
          }}
        >
          {languages === false ? "En" : "Ar"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
