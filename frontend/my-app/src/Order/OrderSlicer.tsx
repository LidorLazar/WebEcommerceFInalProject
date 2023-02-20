import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cart from "../model/cart";
import { createNewOrder } from "./OrderApi";
import { RootState, store } from "../app/store";

export interface OrderState {
  address: string;
  city: string;
  country: string;
  zip_code: string;
}

const initialState: OrderState = {
  address: "",
  city: "",
  country: "",
  zip_code: "",
};

export const createNewOrderAsync = createAsyncThunk(
  "order/newOrder",
  async (data: { orderDetails: Cart[] }) => {
    // SHOE X 2 (5$)
// BRAIN X 1 (20$)
// LADYBOY X5 (200$)
//10 + 20 = 30 + 1000 = 1030;
    const total = data.orderDetails.reduce(
      (accumulate, item) => accumulate + item.price * item.qty,
      0
    );
    const quantity = data.orderDetails.reduce(
      (accumulate, item) => accumulate + item.qty,
      0
    );
    const orderDataWithTotalAndQuantity = {
      ...store.getState().order,
      total,
      quantity,
 
      
    };

    const response = await createNewOrder(
      orderDataWithTotalAndQuantity,
      data.orderDetails
    );
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    NewAddress: (state, action) => {
      state.address = action.payload;
    },
    NewCity: (state, action) => {
      state.city = action.payload;
    },
    NewCountry: (state, action) => {
      state.country = action.payload;
    },
    NewPostalCode: (state, action) => {
      state.zip_code = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(createNewOrderAsync.fulfilled, (state, action) => {
     
    // });
  },
});

export const { NewAddress, NewCity, NewCountry, NewPostalCode } =
  orderSlice.actions;
export const SelectNewAddress = (state: RootState) => state.order.address;
export const SelectNewCity = (state: RootState) => state.order.city;
export const SelectCountry = (state: RootState) => state.order.country;
export const SelectPostalCaode = (state: RootState) => state.order.zip_code;

export default orderSlice.reducer;


