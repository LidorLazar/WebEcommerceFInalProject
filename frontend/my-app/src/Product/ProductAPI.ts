import axios from 'axios'
import Product from '../model/product';
import {SERVER} from '../server'


export function GetAllProduct() {
  return new Promise<{ data: Product[] }>((resolve) =>
  axios.get(SERVER+"/api/products/").then(res => resolve({data:res.data}))
  
  );
}


export function GetOneProduct(id:number) {
  return new Promise<{ data: number  }>((resolve) =>
  axios.get(SERVER+"/api/products/"+id).then(res => resolve({data: id}))
  );
}



export function GetAllProductInCategoryOne(id:number) {
  return new Promise<{ data: any}>((resolve) =>
  axios.get(SERVER+"/api/category/"+id).then(res => resolve({data: res.data}))

  );
}