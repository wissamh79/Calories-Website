const actions = {
  init: "INIT",
};

const initialState = {
  weight: null,
  height: null,
  age: null,
  gender: "male",
  bmr: 0,
  basicNeedsInput: null,
  basicNeeds: 0,
  activities: 1.2,
  activitiesExplain: "Inactive don't exercise light office activity",
  dailyCaloriesInput: 0,
  dailyCalories: 0,
  goal: "loseWeight",
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
