import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Cart from "../model/cart";

export interface CartState {
  status: "idle" | "loading" | "failed";
  cart: Cart[];
}
const initialState: CartState = {
  status: "idle",
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CorrectCart: (state) => {if(localStorage.getItem("cart")){ state.cart = JSON.parse(String(localStorage.getItem("cart")))}
  },
  SaveAddressShipping: (state) =>{

  },
addToCard: (state, action) => {
      let CorrectCart = false;
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].id === action.payload.id) {
          state.cart[index] = action.payload;
          CorrectCart = true;
        }
      }
      if (!CorrectCart) {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deletFromCart: (state, action) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].id === action.payload) {
          state.cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    addOneQty: (state, action) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].id === action.payload) {
          state.cart[index].qty += 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    removeOneOty: (state, action) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].id === action.payload) {
          state.cart[index].qty -= 1;
          if (state.cart[index].qty === 0) {
            state.cart.splice(index, 1);
          }
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
  },
});

export const { addToCard, deletFromCart, addOneQty, removeOneOty, CorrectCart } =
  CartSlice.actions;
export const selectCart = (state: RootState) => state.cart.cart;
export default CartSlice.reducer;
