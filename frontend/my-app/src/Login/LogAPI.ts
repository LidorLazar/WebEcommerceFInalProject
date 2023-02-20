import axios from 'axios'
import {SERVER} from '../server'



export function loginUser(details: any) {
  return new Promise<{ data: any, status: number }>((resolve, reject) => {
    axios.post(SERVER+"/api/users/login/", { username: details.user, password: details.password })
      .then((res) => resolve({ data: res.data, status: res.status }))
      .catch((error) => reject(error));
      
  });
}


  
    
  export function logOutUser() {
    return new Promise<{ data: any }>((resolve) => resolve({ data: false }));
  }
  
    
    
   