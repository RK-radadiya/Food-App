
import { createSlice } from "@reduxjs/toolkit";

const item = localStorage.getItem('cartItem') !== null ? JSON.parse(localStorage.getItem('cartItem')) : []
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0


const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("cartItem" , JSON.stringify(item))
    localStorage.setItem("totalAmount" , JSON.stringify(totalAmount))
    localStorage.setItem("totalQuantity" , JSON.stringify(totalQuantity))
}

const initialState = {
    cartItems : item,
    totalQuantity : totalQuantity,
    totalAmount : totalAmount
}

const CartSlice = createSlice({
    name : "cart",
    initialState : initialState,

    reducers : {
        addProduct(state, action){
            const NewItem = action.payload;

            const existingItem = state.cartItems.find(item => item.id === NewItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: NewItem.id,
                    title: NewItem.title,
                    image01: NewItem.image01,
                    quantity: 1,
                    price: NewItem.price,
                    totalprice: NewItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalprice = Number(existingItem.totalprice) + Number(NewItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            setItemFunc(state.cartItems.map(item => item),
                state.totalAmount,
                state.totalQuantity
            )

            // console.log("CartItem", current(state.cartItems));
        },
        removeProduct(state,action){
            const id = action.payload;

            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalprice = Number(existingItem.totalprice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            setItemFunc(state.cartItems.map(item => item),
                state.totalAmount,
                state.totalQuantity
            )
        },
        deleteItem(state,action){
            const id = action.payload;

            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0)

            setItemFunc(state.cartItems.map(item => item),
                state.totalAmount,
                state.totalQuantity
            )
        }
    }
})

export const cartAction = CartSlice.actions
export default CartSlice;