import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CartSlice from '../Cart/CartSlice';
import ProductSlice from '../Product/ProductSlice';
import LoginSlicer from '../Login/LoginSlicer';
import UserSlice from '../User/UserSlice';
import ReviewSlice from '../reviews/ReviewSlice';
import OrderSlicer from '../Order/OrderSlicer';



export const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: CartSlice,
    login: LoginSlicer,
    user: UserSlice,
    review: ReviewSlice,
    order: OrderSlicer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
