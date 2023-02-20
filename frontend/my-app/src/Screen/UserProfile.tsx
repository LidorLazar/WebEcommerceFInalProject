
import React, {useEffect} from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {GetUserPofileAsync } from '../User/UserSlice'



const UserProfile = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {dispatch(GetUserPofileAsync())}, []);
  
  const {name, is_superuser, email, address, city, phoneNumber, image}= useAppSelector((state)=> state.user)



  return (
    <div>
    <Card>
      <Card.Header as="h2">Profile Information</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name: <strong>{name}</strong> </ListGroup.Item>
        <ListGroup.Item>Email: <strong>{email}</strong></ListGroup.Item>
        <ListGroup.Item>admin: <strong>{String(is_superuser)}</strong></ListGroup.Item>
        <ListGroup.Item>address: <strong>{address}</strong></ListGroup.Item>
        <ListGroup.Item>city: <strong>{city}</strong></ListGroup.Item>
        <ListGroup.Item>phone_number: <strong>{phoneNumber}</strong></ListGroup.Item>
        <ListGroup.Item>image profile: <img style={{width: "90px", height: "90px"}} src={`http://127.0.0.1:8000${image}`}/></ListGroup.Item>

      </ListGroup>
    </Card>
    <br/>
    <br/>
    <br/>
    <br/>
    <Link to={'/profile/update'}>
      <Button variant="primary" type="submit" className='btn btn-light'>Click Here to Update Information</Button>
    </Link>
    </div>
  );
};

export default UserProfile;

