import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Image, ListGroup, Button, Card, Row, Form } from "react-bootstrap";
import { GetOneProductAsync, selectOneProduct, GetAllProducttAsync } from "../Product/ProductSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Rating from "../Product/Rating";
import { addToCard} from '../Cart/CartSlice'
import Reviews from "./Reviews";
import { selectMumReview } from '../reviews/ReviewSlice'



const OneProduct = () => {

  const SERVER = "http://127.0.0.1:8000"
  const [CorrectImage, setCorrectImage] = useState("");
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const OneProd = useAppSelector(selectOneProduct)
  
  const review = useAppSelector(selectMumReview)
  useEffect(() => {
    dispatch(GetAllProducttAsync())
    dispatch(GetOneProductAsync(Number(id)))
  }, [id])
  
 
  useEffect(() => {
    
    if(OneProd[0]) {
      setCorrectImage(OneProd[0].image)}
  }, [OneProd]);

  return (
    <div>
      <Link to="/" className="badge rounded-pill bg-dark">Go back</Link>
      {OneProd.map((prod, index) => (
        <div key={index}>
          <Row>
            <Col md={6}>
              <Image src={SERVER+CorrectImage} style={{ width: "500px", height: "500px" }}/>
            </Col>
            <Col md={3} style={{ marginTop: "30px" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{prod.product_name}</h3>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <Rating />
                  <br />
                  {review} <strong>Reviews</strong>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <h3> Price: ${prod.price}</h3>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  Description : {prod.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3} style={{ marginTop: "30px" }}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>${prod.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status: </Col>
                      <Col>{prod.count_in_stock > 0 ? 'IN STOCK' : 'Out of stock'} </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                {prod.count_in_stock > 0 && (
                   <ListGroup>
                   <ListGroup.Item >
                       <Row>QTY :
                       <Col xs='auto' className="my-1">
                       <Form.Control as="select" onChange={e => setQty(+e.target.value)} value={qty}>
                        {[...Array(prod.count_in_stock)].map((order_count, i) => <option key={i} value={i+1}>{i +1}</option>)}
                       </Form.Control>
                       </Col>
                     </Row>
                   </ListGroup.Item>
                 </ListGroup>
                )}
                {/* Check if the stock bigger 1 so display add to cart button else dispaly out of the stock  */}
                {prod.count_in_stock > 0 ? (
                  <Button
                  onClick={() => {dispatch(addToCard({"id": prod.id, "qty": qty, "price":  prod.price, "image":prod.image, "product_name":prod.product_name}))}}
                    type="button"
                    className="btn btn-outline-success"
                    style={{ margin: "20px" }}
                  >
                    Add to cart
                  </Button>
                ) : (
                  <button  disabled={prod.count_in_stock === 0}>
                    Out of the stock{" "}
                  </button>
                )}
              </Card>
            </Col>
          </Row>
          <Col md={5} style={{ marginTop: "30px" }}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Image
                      onClick={() => {
                        setCorrectImage(prod.image);
                      }}
                      src={SERVER + prod.image}
                      style={{ width: "120px" }}
                    />
                    <Image
                      onClick={() => {
                        setCorrectImage(prod.image2);
                      }}
                      src={SERVER + prod.image2}
                      style={{ width: "120px" }}
                    />
                    <Image
                      onClick={() => {
                        setCorrectImage(prod.image3);
                      }}
                      src={SERVER + prod.image3}
                      style={{ width: "120px" }}
                    />
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </div>
      ))}
      <br/>
      {review === 0 ? <h3>No review</h3> : null}
      <Reviews/>
    </div>
  );
};

export default OneProduct;
