import { useContext } from "react";
import CaloriesContext from "./CaloriesContext";

const useCalories = () => useContext(CaloriesContext);

export default useCalories;
