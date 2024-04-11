import {createSlice} from '@reduxjs/toolkit';

const locState={
    loc:[]
}
const locSlice=createSlice({
    name:'loc',
    initialState:locState,
    reducers:{
        setLoc(state,action){
            state.loc=action.payload;
            //console.log("me->",state);
        }   
    }

})

export default locSlice.reducer;
export const mylocAction =locSlice.actions