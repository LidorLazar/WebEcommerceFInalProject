import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectLogged } from "../Login/LoginSlicer";
import {
  selectReview,
  GetRivewAsync,
  SendReviewAsync,
  CheckProdReviewwAsync,
  selectProdReview,
} from "../reviews/ReviewSlice";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  let logged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const rev = useAppSelector(selectReview);
  const listProduct = useAppSelector(selectProdReview);
  const [reviewButton, setReviewButton] = useState(false);

  useEffect(() => {
    dispatch(CheckProdReviewwAsync());
    dispatch(GetRivewAsync(Number(id)))
    if (listProduct.includes(Number(id))) {
      setReviewButton(true)
  }
}, [id])




  return (
    <div>
      <th colSpan={2}>Review</th>
      {rev.map((item, index) => (
        <div key={index}>
          <Table striped bordered hover>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>review</td>
                <td>
                  <ul>{item.text_comment}</ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
      <Stack spacing={1}>
        <Rating
          value={rating}
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          onChange={(e) => setRating(+(e.target as HTMLInputElement).value)}
        />
      </Stack>
      Comment:{" "}
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      {reviewButton && (
        <Button
         onClick={() => {
  dispatch(SendReviewAsync({ rating, description, id }));
  window.location.reload();
}}
        >
          send
        </Button>
        
      )}
    </div>
  );
};

export default Reviews;
