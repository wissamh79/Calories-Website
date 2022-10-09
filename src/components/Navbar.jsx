import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import useCalories from "../context/caloriesContext/useCalories";
import { actions } from "../context/caloriesContext/state";
import i18next from "i18next";

// import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const {
    state: { languages },
    dispatch,
  } = useCalories();
  const changeDir = () => {
    languages === "en"
      ? dispatch({
          type: actions.init,
          data: { dir: "ltr" },
        })
      : dispatch({
          type: actions.init,
          data: { dir: "rtl" },
        });
  };

  useEffect(() => {
    /* eslint-disable-next-line*/ changeDir();
  }, [languages]);
  return (
    <div className="border border-secondary rounded-2xl shadow-xl bg-primary  md:max-w-[1140px] w-[360px] sm:w-full flex items-center mx-4   my-3 space-x-2">
      <div className="flex justify-start w-[60%] md:w-[49%] ">
        <p className="border border-secondary rounded-2xl shadow-xl bg-primary text-center font-semibold px-2 py-4 ">
          <span className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2 mx-2">
            Calories
          </span>
          Calculator
        </p>
      </div>
      <div className="flex justify-between w-[40%] md:w-[51%] px-2">
        <ThemeToggle />

        <button
          className="bg-button text-btnText rounded-2xl shadow-xl font-bold px-4 p-2 mx-2"
          onClick={() => {
            i18next.changeLanguage(languages === "en" ? "ar" : "en");

            dispatch({
              type: actions.init,
              data: { languages: languages === "en" ? "ar" : "en" },
            });
          }}
        >
          {languages === "en" ? "En" : "Ar"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
