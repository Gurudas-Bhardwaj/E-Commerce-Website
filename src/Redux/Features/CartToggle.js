import { createSlice } from "@reduxjs/toolkit";


const CartToggleSlice=createSlice({
    name:"CartToggle",
    initialState:{
        value:true
    },
    reducers: {
        toggleFalse:state=>{
            state.value=false;
        },
        toggleTrue:state=>{
            state.value=true;
        }
    }
})

export const { toggleFalse,toggleTrue } = CartToggleSlice.actions;
export default CartToggleSlice.reducer;