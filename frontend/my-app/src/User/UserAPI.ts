import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers'
import axios from 'axios'
import Order from '../model/order'
import User from '../model/user'
import {SERVER} from '../server'



export function GetUserPofile() {
const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
  let config = {
      headers: {
        'Authorization': 'Bearer ' + tokenAccess
      }
    }
  return new Promise<{ data: User }>((resolve) => 
  axios.get(SERVER+"/api/users/profile/", config).then(res => resolve({ data: res.data }))
  )
}

export function UpdateDataUserProfile(data: any) {
  const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
    let config = {
        headers: {
          'Authorization': 'Bearer ' + tokenAccess,
          'content-type': 'multipart/form-data'
        }
      }
    return new Promise<{data:any, status: number}>((resolve, reject) => 
    axios.put(SERVER+"/api/users/profile/update/",data, config).then(res => resolve({ data: res.data, status: res.status})).catch((error) => reject(error))
    )
  }


  export function GetUserOrder() {
    const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
      let config = {
          headers: {
            'Authorization': 'Bearer ' + tokenAccess
          }
        }
      return new Promise<{ data: Order[] }>((resolve) => 
      axios.get(SERVER+"/api/users/orders/", config).then(res => resolve({ data: res.data }))
      )}


    