import { combineReducers } from "redux";
import moviesReducer from "./Movies/reducer";

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;
