import { createSlice } from "@reduxjs/toolkit";

const CartSliceUI = createSlice({

    name:"cartUi",
    initialState:{cartIsVisible:false},

    reducers : {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }

})

export const cartUiAction = CartSliceUI.actions
export default CartSliceUI
