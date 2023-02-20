import React, { useState } from "react";
import { Form, FormControl, Button, Card, ListGroup, ToastContainer } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UpdateDataUserProfileAsync } from '../User/UserSlice'

const UpdateProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState<any>();
  const dispatch = useAppDispatch()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : undefined);

};

const handelSubmit= (e:any) =>{
    e.preventDefault()
    const formData = new FormData()
    if(image){
      formData.append('image', image)
    }
    formData.append('phone', phone)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('email', email)
    formData.append('username', username)

    dispatch(UpdateDataUserProfileAsync(formData))}



  return (
    <div>
    <ToastContainer/>
    <Card>
      <Card.Header>
        <h4>User Profile</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form onSubmit={handelSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <FormControl
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <FormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <FormControl
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <FormControl
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <FormControl
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <FormControl
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

    
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file"  onChange={handleImageChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Update</Button>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    </div>
  );
};

export default UpdateProfile;

