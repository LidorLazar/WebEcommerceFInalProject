import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers'
import axios from 'axios'
import Review from '../model/review'
import {SERVER} from '../server'



export function SendReview(detalis:any) {
  const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
    let config = {
        headers: {
          'Authorization': 'Bearer ' + tokenAccess
        }
      }
    return new Promise<{ data: any}>((resolve) => 
    axios.post(SERVER+"/api/products/sreview/", {description: detalis.description, rating: detalis.rating, user: config.headers, id: detalis.id}, config).then(res => resolve({ data: res.data })))
  }




  export function GetAllReview() {
    return new Promise<{ data: Review[] }>((resolve) =>
    axios.get(SERVER+"/api/products/getallreview/").then(res => resolve({data:res.data}))
    
    );
  }
  

  export function GetReview(id:number) {
    return new Promise<{ data: Review[]  }>((resolve) =>
    axios.get(SERVER+"/api/products/greview/"+id).then(res => resolve({data: res.data}))
  );
  
  }


  export function CheckProdReview() {
    const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
      let config = {
          headers: {
            'Authorization': 'Bearer ' + tokenAccess
          }
        }
      return new Promise<{ data: any}>((resolve) => 
      axios.get(SERVER+"/api/users/orders/product/", config).then(res => resolve({ data: res.data })))
    }
  