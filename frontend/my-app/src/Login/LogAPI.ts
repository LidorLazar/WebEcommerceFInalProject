import axios from 'axios'




export function loginUser(details: any) {
  return new Promise<{ data: any, status: number }>((resolve, reject) => {
    axios.post("http://127.0.0.1:8000/api/users/login/", { username: details.user, password: details.password })
      .then((res) => resolve({ data: res.data, status: res.status }))
      .catch((error) => reject(error));
      
  });
}





//   export function RegisterUser(detalis:any) {;
//   return new Promise<{ data: any, status:number }>((resolve) =>
//   axios.post("http://127.0.0.1:8000/api/users/register/", { email: detalis.email , password: detalis.password, name: detalis.username, address: detalis.address, city: detalis.city  }).then((res) => resolve({ data: res.data, status:res.status})));
// ;}
  
    
  export function logOutUser() {
    return new Promise<{ data: any }>((resolve) => resolve({ data: false }));
  }
  
    
    
   