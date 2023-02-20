import React, { useState, useEffect } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { selectCart } from '../Cart/CartSlice'
import { NewAddress, SelectNewAddress, SelectNewCity, NewCity, NewCountry, SelectCountry, NewPostalCode, SelectPostalCaode } from '../Order/OrderSlicer'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import PaypalButton from './PaypalButton';

function ProceedToCheckout(props:any) {
  const [show, setShow] = useState(false);
  const cart = useAppSelector(selectCart)
  const address = useAppSelector(SelectNewAddress)
  const city = useAppSelector(SelectNewCity)
  const country = useAppSelector(SelectCountry)
  const zip_code = useAppSelector(SelectPostalCaode)
  const dispatch = useAppDispatch()
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  let totalPrice = 0;


  useEffect(() => {
    for (let index = 0; index < cart.length; index++) {
      totalPrice += Math.round(cart[index].price * cart[index].qty + Number.EPSILON) *100/100;
    }
  }, [cart]);

  return (
    <div>
      <Button onClick={toggleShow}>
        Proceed To Checkout
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shipping Information</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Address'
              value={address ? address : ''}
              onChange={(e) => dispatch(NewAddress(e.target.value))}
            >
            </Form.Control>
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter City'
              value={city ? city : ''}
              onChange={(e) => dispatch(NewCity(e.target.value))}
            >
            </Form.Control>
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Country'
              value={country ? country : ''}
              onChange={(e) => dispatch(NewCountry(e.target.value))}
            >
            </Form.Control>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Postal Code'
              value={zip_code ? zip_code : ''}
              onChange={(e) => dispatch(NewPostalCode(e.target.value))}
            >
            </Form.Control>
            <br />
          </Form.Group>
        </Offcanvas.Body>

        <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
              <div className="animate__animated animate__bounce animate__delay-2s">

              <i  className="d-flex justify-content-center fa-sharp fa-solid fa-arrow-down" style={{margin:'20px'}}></i>
              </div>
        <PaypalButton/>
      </Offcanvas>
    </div>);
}

export default ProceedToCheckout;
