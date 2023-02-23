import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducers from "./REDUCER";

const store = legacy_createStore(rootReducers);

export default store;