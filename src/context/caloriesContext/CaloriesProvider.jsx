import { useReducer } from "react";
import { reducer, actions, initialState } from "./state";
import CaloriesContext from "./CaloriesContext";

import React from "react";

const CaloriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBMR = (e) => {
    e.preventDefault();
    try {
      if (state.weight === 0 || state.height === 0 || state.age === 0) {
        dispatch({
          type: actions.init,
          data: { bmr: 0 },
        });
      } else {
        switch (state.gender) {
          case "male":
            dispatch({
              type: actions.init,
              data: {
                bmr:
                  13.8 * state.weight + 5 * state.height - 6.8 * state.age + 66,
              },
            });

            break;
          case "female":
            dispatch({
              type: actions.init,
              data: {
                bmr:
                  9.6 * state.weight +
                  1.8 * state.height -
                  4.7 * state.age +
                  655,
              },
            });
            break;

          default:
            break;
        }
        console.log(state.weight);
      }
    } catch (e) {
      console.log(e.massage);
    }
  };
  const handleActivitiesChange = (e) => {
    try {
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
              activitiesExplain:
                "Inactive don't exercise light office activity",
            },
          });
          break;

        case "1.375":
          dispatch({
            type: actions.init,
            data: {
              activitiesExplain: "Light sport from 1 to 3 days",
            },
          });
          break;
        case "1.55":
          dispatch({
            type: actions.init,
            data: {
              activitiesExplain: "Medium sport from 3 to 5 days",
            },
          });
          break;
        case "1.725":
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
    } catch (e) {
      console.log(e.massage);
    }
  };

  const getBasicNeeds = (e) => {
    try {
      e.preventDefault();
      if (state.basicNeedsInput) {
        const basicNeeds = (state.basicNeedsInput * state.activities).toFixed(
          2
        );
        dispatch({
          type: actions.init,
          data: { basicNeeds },
        });
      } else {
        const basicNeeds = (state.bmr * state.activities).toFixed(2);
        dispatch({
          type: actions.init,
          data: { basicNeeds },
        });
      }
    } catch (e) {
      console.log(e.massage);
    }
  };

  const getDailyCalories = (e) => {
    try {
      e.preventDefault();
      if (state.dailyCaloriesInput) {
        switch (state.goal) {
          case "loseWeight":
            dispatch({
              type: actions.init,
              data: {
                dailyCalories:
                  parseInt(state.basicNeeds) -
                  parseInt(state.dailyCaloriesInput),
              },
            });

            break;
          case "gainWeight":
            dispatch({
              type: actions.init,
              data: {
                dailyCalories:
                  parseInt(state.basicNeeds) +
                  parseInt(state.dailyCaloriesInput),
              },
            });
            break;

          default:
            break;
        }
      } else {
        return;
      }
    } catch (e) {
      console.log(e.massage);
    }
  };

  return (
    <CaloriesContext.Provider
      value={{
        state,
        dispatch,

        getBMR,
        handleActivitiesChange,

        getBasicNeeds,

        getDailyCalories,
      }}
    >
      {children}
    </CaloriesContext.Provider>
  );
};

export default CaloriesProvider;
