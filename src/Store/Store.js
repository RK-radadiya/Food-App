import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Shoopingcart/CartSlice";
import cartSliceUi from "./Shoopingcart/CartSliceUI";

const Store = configureStore({
reducer:{
        cart : cartSlice.reducer,
        cartUi: cartSliceUi.reducer,
    }
})

export default Store