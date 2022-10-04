import { useReducer } from "react";
import { reducer, actions, initialState } from "./state";
import CaloriesContext from "./CaloriesContext";

import React from "react";

const CaloriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleWeightChange = (e) => {
    const weight = e.target.value;
    dispatch({
      type: actions.init,
      data: { weight },
    });
  };
  const handleHeightChange = (e) => {
    const height = e.target.value;
    dispatch({
      type: actions.init,
      data: { height },
    });
  };
  const handleAgeChange = (e) => {
    const age = e.target.value;
    dispatch({
      type: actions.init,
      data: { age },
    });
  };
  const handleGenderChange = (e) => {
    const gender = e.target.value;
    dispatch({
      type: actions.init,
      data: { gender },
    });
  };

  const getBMR = () => {
    try {
      if (state.weight == null && state.height == null && state.age == null) {
        dispatch({
          type: actions.init,
          data: { bmr: 0 },
        });
      } else {
        if (state.gender === "male") {
          const bmr =
            13.8 * state.weight + 5 * state.height - 6.8 * state.age + 66;
          dispatch({
            type: actions.init,
            data: { bmr },
          });
        } else if (state.gender === "female") {
          const bmr =
            9.6 * state.weight + 1.8 * state.height - 4.7 * state.age + 655;
          dispatch({
            type: actions.init,
            data: { bmr },
          });
        }
      }
    } catch (e) {
      console.log(e.massage);
    }
  };
  const handleActivitiesChange = (e) => {
    const activities = e.target.value;
    dispatch({
      type: actions.init,
      data: { activities },
    });
    switch (activities) {
      case "1.2":
        dispatch({
          type: actions.init,
          data: {
            activitiesExplain: "Inactive don't exercise light office activity",
          },
        });
        break;

      case "1.3":
        dispatch({
          type: actions.init,
          data: {
            activitiesExplain: "Light sport from 1 to 3 days",
          },
        });
        break;
      case "1.5":
        dispatch({
          type: actions.init,
          data: {
            activitiesExplain: "Medium sport from 3 to 5 days",
          },
        });
        break;
      case "1.7":
        dispatch({
          type: actions.init,
          data: {
            activitiesExplain: "High intensity sport from 6 to 7 days",
          },
        });
        break;
      case "1.9":
        dispatch({
          type: actions.init,
          data: {
            activitiesExplain:
              "Professional player daily aerobic activities and resistance",
          },
        });
        break;

      default:
        break;
    }

    console.log(state.activitiesExplain);
  };
  const handleBasicNeedsInputChange = (e) => {
    const basicNeedsInput = e.target.value;
    dispatch({
      type: actions.init,
      data: { basicNeedsInput },
    });
  };
  const getBasicNeeds = () => {
    if (state.basicNeedsInput) {
      const basicNeeds = (state.basicNeedsInput * state.activities).toFixed(2);
      dispatch({
        type: actions.init,
        data: { basicNeeds },
      });
    } else if (state.bmr) {
      const basicNeeds = (state.bmr * state.activities).toFixed(2);
      dispatch({
        type: actions.init,
        data: { basicNeeds },
      });
    }
  };
  const handleGoalChange = (e) => {
    const goal = e.target.value;
    dispatch({
      type: actions.init,
      data: { goal },
    });
  };
  const handleDailyCaloriesInputChange = (e) => {
    const dailyCaloriesInput = e.target.value;
    dispatch({
      type: actions.init,
      data: { dailyCaloriesInput },
    });
  };
  const getDailyCalories = () => {
    if (state.dailyCaloriesInput) {
      if (state.goal === "loseWeight") {
        const dailyCalories =
          parseInt(state.basicNeeds) - parseInt(state.dailyCaloriesInput);
        dispatch({
          type: actions.init,
          data: { dailyCalories },
        });
      } else if (state.goal === "gainWeight") {
        const dailyCalories =
          parseInt(state.basicNeeds) + parseInt(state.dailyCaloriesInput);

        dispatch({
          type: actions.init,
          data: { dailyCalories },
        });
      } else {
        return;
      }
    }
  };

  return (
    <CaloriesContext.Provider
      value={{
        state,
        dispatch,
        handleWeightChange,
        handleHeightChange,
        handleAgeChange,
        handleGenderChange,
        getBMR,
        handleActivitiesChange,
        handleBasicNeedsInputChange,
        getBasicNeeds,
        handleGoalChange,
        handleDailyCaloriesInputChange,
        getDailyCalories,
      }}
    >
      {children}
    </CaloriesContext.Provider>
  );
};

export default CaloriesProvider;
