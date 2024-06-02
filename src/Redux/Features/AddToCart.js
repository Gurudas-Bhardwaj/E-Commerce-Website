import { createSlice } from "@reduxjs/toolkit";


export const AddToCart=createSlice({
    name:'AddToCart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
    },
})

export const {add}=AddToCart.actions;
export default AddToCart.reducer