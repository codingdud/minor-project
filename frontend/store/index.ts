import { configureStore } from "@reduxjs/toolkit";
import locreducer from "./myloc.js";
import collegesReducer from "./colleges.js";
import pgsReducer from "./pgs.js";




const store = configureStore({
    reducer: {
        myLoc:locreducer,
        colleges:collegesReducer,
        pgs:pgsReducer,
    }
})
export default store;