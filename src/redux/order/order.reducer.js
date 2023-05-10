import { createSlice } from "@reduxjs/toolkit";
import { REDUCER_ORDER } from "../../utils/constants/string.constants";
import OrderState from "./order.state";

export const orderSlice = createSlice({
    name: REDUCER_ORDER,
    initialState: OrderState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        addItemToAcceptedOrders: (state, action) => {
            state.acceptedOrders = [...state.acceptedOrders, action.payload];
        },
        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (product, index) => index !== action.payload
            );
        },
        removeItemFromAcceptedOrders: (state, action) => {
            state.acceptedOrders = state.acceptedOrders.filter(
                (product, index) => index !== action.payload
            );
        },
        clearCart: (state) => {
            state.cart = [];
        },
        clearAcceptedOrders: (state) => {
            state.acceptedOrders = [];
        }
    },
});

export const {
    addItemToCart,
    addItemToAcceptedOrders,
    removeItemFromAcceptedOrders,
    removeItemFromCart,
    clearCart,
    clearAcceptedOrders
} = orderSlice.actions;

export default orderSlice.reducer;
