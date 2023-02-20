import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Image, ListGroup, Button, Card, Row, Form } from "react-bootstrap";
import { GetAllProductInCategoryOneAsync, selectProductCategory } from "../Product/ProductSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Rating from "../Product/Rating";
import { addToCard, selectCart } from '../Cart/CartSlice'
import { selectMumReview, selectRating } from '../reviews/ReviewSlice'




const OneProduct = () => {

  const SERVER = "http://127.0.0.1:8000"
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProductCategory)
  const MumReview = useAppSelector(selectMumReview);
  const rating = useAppSelector(selectRating);
  const [CorrectImage, setCorrectImage] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    {dispatch(GetAllProductInCategoryOneAsync(Number(id)))}
    if(product[0]) {
      setCorrectImage(product[0].image)}
  }, [id]);


  return (
    <div>
      <Link to="/" className="badge rounded-pill bg-dark">Go back</Link>
      <Row style={{margin:'20px'}}>
        {product.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
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
                      {/* Check if rating bigger 1 so i get a star or helf star  */}
                      <samp>
                        <i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 2 so i get a star or helf star  */}
                      <samp>
                        <i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 3 so i get a star or helf star  */}
                      <samp>
                        <i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 4 so i get a star or helf star  */}
                      <samp>
                        <i className={rating >= 4 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      {/* Check if rating bigger 5 so i get a star or helf star  */}
                      <samp>
                        <i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} style={{ color: "gold" }}> </i>
                      </samp>
                      <br/>
                      <span>
                      {MumReview} Reviews
                      </span>
                    </div>
                  </Card.Text>
                  <Card.Text as="h3">${[product.price]}</Card.Text>
                  <Button className="btn btn-outline-success"  onClick={() => {dispatch(addToCard({"id": product.id, "qty": qty, "price": qty * product.price, "image":product.image, "product_name":product.product_name}))}}
>Buy</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OneProduct;
