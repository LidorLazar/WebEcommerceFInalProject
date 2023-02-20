import axios from 'axios'
import Product from '../model/product';



export function GetAllProduct() {
  return new Promise<{ data: Product[] }>((resolve) =>
  axios.get("http://127.0.0.1:8000/api/products/").then(res => resolve({data:res.data}))
  
  );
}


export function GetOneProduct(id:number) {
  return new Promise<{ data: number  }>((resolve) =>
  axios.get("http://127.0.0.1:8000/api/products/"+id).then(res => resolve({data: id}))
  );
}



export function GetAllProductInCategoryOne(id:number) {
  return new Promise<{ data: any}>((resolve) =>
  axios.get("http://127.0.0.1:8000/api/category/"+id).then(res => resolve({data: res.data}))

  );
}