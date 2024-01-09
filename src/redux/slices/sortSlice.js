import { createSlice } from "@reduxjs/toolkit";

const sortSlice=createSlice({
    name:"sort",
    initialState:{
        array:[],
        order:null
    },
    reducers:{
        setSortingInput:(state,action)=>{
            state.array=action.payload.arrayInput;
            state.order=action.payload.order;
        }
    }
})

export const {setSortingInput}=sortSlice.actions;
export default sortSlice.reducer;