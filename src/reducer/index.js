import Counter from "./counter";
import { combineReducers } from "redux";

const reducers = combineReducers({
    counter : Counter
});

export default reducers;