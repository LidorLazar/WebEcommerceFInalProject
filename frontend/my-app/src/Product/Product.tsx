import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectProduct, GetAllProducttAsync } from "./ProductSlice";





export function Product() {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(GetAllProducttAsync()) }, [])
  return (
    <div>
     {product.length}
    </div>
  );
}
