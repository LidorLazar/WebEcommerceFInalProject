import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {GetUserOrderAsync, SelectOrderData } from '../User/UserSlice'


const Order = () => {
  const orderData = useAppSelector(SelectOrderData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(GetUserOrderAsync())

}, [])


  return (
    <div>
    {orderData.length > 0?
    orderData.map((item, index) => <div key={index}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Order Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Order ID</td>
          <td>{item.id}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>
            {item.price}$
          </td>
        </tr>
        <tr>
          <td>date</td>
          <td>{item.order_date}</td>
        </tr>
      </tbody>
    </Table>
    </div>) : <h2 className='d-flex justify-content-center'> NO ORDER </h2> }
    </div>
  );
};

export default Order;
