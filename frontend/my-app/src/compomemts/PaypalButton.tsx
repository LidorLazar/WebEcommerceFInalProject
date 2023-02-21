import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { selectCart } from "../Cart/CartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { createNewOrderAsync } from "../Order/OrderSlicer";
import {
  SelectNewAddress,
  SelectNewCity,
  SelectPostalCaode,
  SelectCountry,
} from "../Order/OrderSlicer";

const PaypalButton = () => {
  const cart = useAppSelector(selectCart);
  const newAddress = useAppSelector(SelectNewAddress);
  const newCity = useAppSelector(SelectNewCity);
  const newZipCode = useAppSelector(SelectPostalCaode);
  const newCountry = useAppSelector(SelectCountry);
  let totalPrice = 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    for (let index = 0; index < cart.length; index++) {
      totalPrice +=
        (Math.round(cart[index].price * cart[index].qty + Number.EPSILON) *100) / 100;
    }
  }, [cart]);

  const handleApprove = (data: any, actions: any) => {
    if (actions.order) {
      return actions.order
        .capture()
        .then((details: any) => {
          dispatch(createNewOrderAsync({ orderDetails: cart }));
          toast.success(
            "Payment completed. Thank you " +
              (details.payer.name?.given_name || ""),
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        },localStorage.removeItem("cart"), setTimeout(function () {
          window.location.replace("/")
        },3000))
        .catch((error: any) => {
          toast.error("Error capturing the payment", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
    return Promise.resolve();
  };

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AT_RMGrGtqhVq-71qKQiqGSgox1JmeVTRco64KeCMqaWOs7jRnSEI40iuG_jpyHsJnzbHNUf0ueCPtqi",
        }}
      >
        <PayPalButtons
          disabled={!newAddress || !newCity || !newCountry || !newZipCode}
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: totalPrice.toString() },
                },
              ],
            });
          }}
          onApprove={(data, action) => handleApprove(data, action)}
          onCancel={() => {
            toast.error("You cancelled the payment", {
              position: toast.POSITION.TOP_CENTER,
            });
          }}
          onError={() => {
            toast.error("There was an error with your payment, Try again", {
              position: toast.POSITION.TOP_CENTER,
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalButton;

// function newOrderAsync(arg0: {
//   orderData: { address: any; city: any; zip_code: any; country: any };
//   orderDetails: import("../model/cart").default[];
// }): any {
//   throw new Error("Function not implemented.");
// }
