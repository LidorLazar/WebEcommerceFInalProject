import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "react-bootstrap";
import { selectProduct, GetAllProducttAsync } from "../Product/ProductSlice";
import {SERVER} from '../server'


const HomeScreen = () => {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(GetAllProducttAsync()) }, [])

  // Home screen/page , Run in map loop all the product and display in home page
  return (
    <div>
      <h1>Top 10 sale</h1>
      <Row>
        {product.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <div>
              <Card className="py-3 p-3 mb-5">
                <Link to={`/product/${product.id}`}>
                  <Card.Img src={SERVER+'/'+product.image} />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product.id}`}>
                    <Card.Title as="div">
                      <strong>{product.product_name}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <div className="my-3">
                      {/* Check if rating bigger 1 so i get a star or helf star  */}
                      <samp>
                        <i className={product.rating >= 1 ? 'fas fa-star' : product.rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 2 so i get a star or helf star  */}
                      <samp>
                        <i className={product.rating >= 2 ? 'fas fa-star' : product.rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 3 so i get a star or helf star  */}
                      <samp>
                        <i className={product.rating >= 3 ? 'fas fa-star' : product.rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 4 so i get a star or helf star  */}
                      <samp>
                        <i className={product.rating >= 4 ? 'fas fa-star' : product.rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 5 so i get a star or helf star  */}
                      <samp>
                        <i className={product.rating >= 5 ? 'fas fa-star' : product.rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      <br/>
                      <span>
                      {product.num_reviews} Reviews
                      </span>
                    </div>
                  </Card.Text>
                  <Card.Text as="h3">${[product.price]}</Card.Text>
                  <Button className="btn btn-outline-success" >Buy</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
