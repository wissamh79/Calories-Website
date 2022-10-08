import cookie from "js-cookie";
const currentLanguageCode = cookie.get("i18next") || "en";

const actions = {
  init: "INIT",
};

const initialState = {
  weight: 0,
  height: 0,
  age: 0,
  gender: "male",
  bmr: 0,
  basicNeedsInput: 0,
  basicNeeds: 0,
  activities: 1.2,
  activitiesExplain:
    currentLanguageCode === "ar"
      ? "غير نشط لا تتمرن نشاط مكتبي خفيف"
      : "Inactive don't exercise light office activity",
  dailyCaloriesInput: 0,
  dailyCalories: 0,
  goal: "loseWeight",
  languages: "en",
  dir: "ltr",
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
