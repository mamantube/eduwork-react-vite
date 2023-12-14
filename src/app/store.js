import { combineReducers, createStore } from "redux";
import CounterReducer from "./features/counter/reducer";


let rootReducers = combineReducers({
    counter: CounterReducer
});



let store = createStore(rootReducers);
export default store;