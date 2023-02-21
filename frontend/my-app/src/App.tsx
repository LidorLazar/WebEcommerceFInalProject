import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "react-bootstrap";
import { selectProduct, GetAllProducttAsync } from "./Product/ProductSlice";
import { addToCard } from './Cart/CartSlice'
import { selectLogged } from './Login/LoginSlicer'
import { selectMumReview, selectRating } from './reviews/ReviewSlice'
import Carusel from "./Screen/Carusla";
import {SERVER} from './server'



const App = () => {
  const product = useAppSelector(selectProduct);
  const logged = useAppSelector(selectLogged);
  const MumReview = useAppSelector(selectMumReview);
  const rating = useAppSelector(selectRating);
  const dispatch = useAppDispatch();
  useEffect(() => { 
    dispatch(GetAllProducttAsync())

  }
    , [logged])

  // Home screen/page , Run in map loop all the product and display in home page
  return (

    <div>
      
      <Carusel/>
      <h1>Top sale</h1>
      <Row style={{margin:'20px'}}>
        {product.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <div>
              <Card className="py-3 p-3 mb-5">
                <Link to={`/product/${product.id}`}>
                  <Card.Img src={SERVER+product.image} />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product.id}`}>
                    <Card.Title as="div">
                      <strong>{product.product_name}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <div className="my-3">
                    </div>
                  </Card.Text>
                  <Card.Text as="h3">${[product.price]}</Card.Text>
                  <Button className="btn btn-outline-success" onClick={()=> dispatch(addToCard({"id": product.id, "qty": 1, "price": 1 * product.price, "image":product.image, "product_name":product.product_name}))}>Buy</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
