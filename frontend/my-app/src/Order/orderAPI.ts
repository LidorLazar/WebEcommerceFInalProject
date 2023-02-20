import axios from "axios";
import Cart from "../model/cart";
import { OrderData } from "../model/orderData";

export function createNewOrder(orderData: OrderData, orderDetails: Cart[]) {
  const accessToken = JSON.parse(String(localStorage.getItem("token")));
  let config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  return new Promise<{ data: any }>((resolve) =>
    axios
      .post(
        "http://127.0.0.1:8000/api/users/checkout/",
        { orderData, orderDetails },
        config
      )
      .then((res) => resolve({ data: res.data }))
  );
}
