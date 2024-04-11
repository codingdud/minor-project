import { createSlice } from "@reduxjs/toolkit";

type typecollege={
    colleges:Array<object>|null,
    selected:object|null
}

const collegeState:typecollege={
    colleges:null,
    selected:null
}
const collegeSlice=createSlice({
    name:"colleges",
    initialState:collegeState,
    reducers:{
        setColleges(state,action){
            state.colleges=action.payload
        },
        setSelected(state, action){
            state.selected=state.colleges.find(obj=>obj._id===action.payload)
        }   
    }
})

export default collegeSlice.reducer
export const collegeAction =collegeSlice.actions