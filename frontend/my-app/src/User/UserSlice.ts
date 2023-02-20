import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import User from '../model/user';
import { GetUserPofile, UpdateDataUserProfile, GetUserOrder } from './UserAPI'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Order from '../model/order';

export interface UsertState {
  status:number
  name:string
  email:string
  is_superuser:boolean
  username:string
  image:string
  address:string
  city: string
  phoneNumber:string
  orderData: Order[]
  data: User[]


}
const initialState: UsertState = {
  status:200,
  name: '',
  email: '',
  is_superuser: false,
  username: '',
  image: '',
  data: [],
  address: '',
  city: '',
  phoneNumber: '',
  orderData: []
};

export const GetUserPofileAsync = createAsyncThunk(
  'user/GetUserPofile',
  async () => {
    const response = await GetUserPofile();
    // The value we return becomes the `fulfilled` action payload
    return response
  }
);

export const UpdateDataUserProfileAsync = createAsyncThunk(
  'user/UpdateDataUserProfile',
  async (data:any) => {
    const response = await UpdateDataUserProfile(data);
    return response
  }
);


export const GetUserOrderAsync = createAsyncThunk(
  'user/GetUserOrder',
  async () => {
    const response = await GetUserOrder();
    // The value we return becomes the `fulfilled` action payload
    return response
  }
);



export const UserSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },

  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(GetUserPofileAsync.fulfilled, (state, action) => {
    state.name = action.payload.data.name
    state.email = action.payload.data.email
    state.username = action.payload.data.username
    state.is_superuser = action.payload.data.is_superuser
    state.image = action.payload.data.image
    state.address = action.payload.data.address
    state.city = action.payload.data.city
    state.phoneNumber = action.payload.data.phone_number
  }).addCase(UpdateDataUserProfileAsync.fulfilled, (state, action) => {
    const success = state.status === action.payload.status
    if(success){
      toast.success(`Info update success ${""}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }else{
      toast.error(`You need put all ${""}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }).addCase(GetUserOrderAsync.fulfilled, (state, action) => {
    state.orderData = action.payload.data
  }).addCase(UpdateDataUserProfileAsync.rejected, (state, action) => {
    if(!action.meta.rejectedWithValue){
    toast.error(`You need put all ${""}`, {
      position: toast.POSITION.TOP_CENTER,
    });}
  })
}});

export const {  } = UserSlice.actions;
export const SelectDataProfile = (state:RootState)=> state.user.data
export const SelectImage = (state:RootState)=> state.user.image
export const SelectOrderData = (state:RootState)=> state.user.orderData
export const SelectAddress = (state:RootState)=> state.user.address
export const SelectCity = (state:RootState)=> state.user.city

export default UserSlice.reducer;