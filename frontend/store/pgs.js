import { createSlice } from "@reduxjs/toolkit"

const pgsState = {
    pgs:null,
    selectedPg:null,
}
 const pgsSlice = createSlice({
    name:"pgs",
    initialState:pgsState,
    reducers:{
        setPgs(state,action){
            state.pgs = action.payload
        },
        setSelectedPg(state, action){
            state.selectedPg = action.payload
        }
    }
})
export default pgsSlice.reducer
export const pgsAction = pgsSlice.actions