import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import  {logOutUser, loginUser}  from "./LogAPI";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import {SERVER} from '../server'

import axios from 'axios'


export interface LoginState {
  logged: boolean;
  token: String
  username: string,
  status: Number
  is_superuser: boolean
  FailLogin:boolean


}

const initialState: LoginState = {
  logged: false,
  token: '',
  username: '',
  status: 200,
  is_superuser: false,
  FailLogin: false
};


export const registerAsync = createAsyncThunk(
  "login/RegisterUser",
  async (detalis: any, thunkApi) => {
    try {
      const response = await axios.post(SERVER+"/api/users/register/", { email: detalis.email , password: detalis.password, name: detalis.username, address: detalis.address, city: detalis.city  });
      return response.data;
    } catch (error:any) {
      return thunkApi.rejectWithValue(error.response.data.error);
    }
  }
);



export const logOutAsync = createAsyncThunk(
  "login/logOutUser",
   async () => {
   const response = await logOutUser();
   return response;
 });

 export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async (detalis:any) => {
    const response = await loginUser(detalis);
    return response;
  }
);


export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    CurrectLogged: (state) => {if(localStorage.getItem("token")){ state.logged = true}},
    IsAdmin: (state) => {if(localStorage.getItem("admin") === 'true'){ state.is_superuser = true}},
    CorrectToken: (state) => {if(localStorage.getItem("token")){ state.token = JSON.parse(String(localStorage.getItem("token")))}}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        interface JwtPayload {
          exp: number;
          iat: number;
          jti: string;
          token_type: string;
          user_id: number;
          username: string;
          is_superuser: boolean;
        }  
        const decoded = jwt_decode(action.payload.data.access) as JwtPayload;
        state.token = action.payload.data['access']
        state.username =decoded.username
        state.is_superuser = decoded.is_superuser
        localStorage.setItem('token', JSON.stringify(state.token))
        localStorage.setItem('username', JSON.stringify(state.username))
        localStorage.setItem('admin', JSON.stringify(state.is_superuser))
        state.logged = true;
    }).addCase(registerAsync.fulfilled, (state, action) => {

            toast.success(`Registar success ${""}`, {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(function () {
              window.location.replace("/")
            },2000)

      }).addCase(registerAsync.rejected, (state, action) => {
        toast.error(` ${action.payload}`, {
          position: toast.POSITION.TOP_CENTER,
        });
    
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        localStorage.clear()
        setTimeout(function() {
          window.location.replace("/");
        }, 1000);
        state.logged = false;
      }).addCase(loginAsync.rejected, (state, action) => {
        state.FailLogin = true
      })
  },
});

export const { CurrectLogged, IsAdmin, CorrectToken } = loginSlice.actions;
export const selectLogged = (state: RootState) => state.login.logged;
export const selectToken = (state: RootState) => state.login.token;
export const selectUser = (state: RootState) => state.login.username;
export const selectAdmin = (state: RootState) => state.login.is_superuser;
export const selecStatus = (state: RootState) => state.login.status;
export const selecFailLogin = (state: RootState) => state.login.FailLogin;
export default loginSlice.reducer;