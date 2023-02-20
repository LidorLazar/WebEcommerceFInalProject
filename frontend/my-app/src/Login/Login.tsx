import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { selectLogged, loginAsync, selecFailLogin} from "./LoginSlicer";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Form, Button } from 'react-bootstrap'



const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  let logged = useAppSelector(selectLogged);
  let FailLogin = useAppSelector(selecFailLogin);

  useEffect(() => {
    if (logged) {
      toast.success(`Welcome ${""}${user}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(function () {
        window.location.replace("/")
      },2000)
    }
}, [logged])


return (
    <div>

  <ToastContainer/>
      <h1>Login</h1>
      <Form >
      <Form.Group>
                    <Form.Label>usename</Form.Label>
                    <Form.Control
                        type='user'
                        placeholder='Enter username'
                        value={user}
                        onChange={(e) => setUser(e.target.value)} 
                    >
                      
                    </Form.Control>
                </Form.Group>

       <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                       </Form.Group>
      <br/>
      { FailLogin && <h3 style={{color:'red'}}>Password or Username is wrong</h3>}
      <h5>For registar <a href="/registar">click here</a></h5>
      <br/>
      <Button className="btn btn-outline-success" style={{margin: '20px'}} onClick={() => dispatch(loginAsync({user, password})) } >Login</Button>
      </Form>
    </div>
  );
};
export default Login;
