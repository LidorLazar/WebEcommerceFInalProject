import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { logOutAsync } from '../Login/LoginSlicer'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { SelectImage } from '../User/UserSlice'
import { GetUserPofileAsync } from '../User/UserSlice'

const User = () => {
    const [username, setUserName] = useState('')
    const [getToken, setGetToken] = useState('')
    const [admin, setAdmin] = useState(false)
    const AvatarImage = useAppSelector(SelectImage)

    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(GetUserPofileAsync())
        if(!getToken){
          const tok = localStorage.getItem("token")
          setGetToken(JSON.parse(String(tok)))
          const userInlocalStorge = localStorage.getItem("username")
          setUserName(JSON.parse(String(userInlocalStorge)))
          const isAdmin = localStorage.getItem("admin")
          setAdmin(JSON.parse(String(isAdmin)))

        }
      }, [])


  return (
    <div>
      <ToastContainer transition={Slide}/>
      <Stack direction="row" spacing={2}>
      <Avatar alt={username} src={`http://127.0.0.1:8000${AvatarImage}`} />
      <NavDropdown title={username} id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to="profile/">Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/orders/">Orders</NavDropdown.Item>
        {admin &&  <NavDropdown.Item href="http://localhost:8000/admin/">Admin panel</NavDropdown.Item>}
        <NavDropdown.Item  onClick={()=> {dispatch(logOutAsync());  toast.error("LogOut", {
          position: toast.POSITION.TOP_CENTER,
        });; }}>LogOut</NavDropdown.Item>
      </NavDropdown>
      </Stack>


    </div>
  );
};

export default User;
