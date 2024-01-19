


import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import LapiReducer from "./Lappi/LapiiReducer";
import MobReducer from "./Mob/Mobile/MobileReducer";
const rootReducer=combineReducers({mobile:MobReducer,laptop:LapiReducer })
const store=configureStore({reducer:rootReducer})
export default  store