import { createSlice } from "@reduxjs/toolkit"

const pgsState = {
    pgs:null
}
 const pgsSlice = createSlice({
    name:"pgs",
    initialState:pgsState,
    reducers:{
        setPgs:(state,action)=>{
            state.pgs = action.payload
        }
    }
})
export default pgsSlice.reducer
export const pgsAction = pgsSlice.actions