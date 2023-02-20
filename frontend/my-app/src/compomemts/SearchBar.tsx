import React, { useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GetAllProducttAsync, GetOneProductAsync, selectProduct } from "../Product/ProductSlice";
import { Link, useParams } from "react-router-dom";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const products = useAppSelector(selectProduct);
  const filterProducts = products.filter((product) =>product.product_name.toLowerCase().includes(query))


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      /> 
      {query.length > 0 && filterProducts.map(prod => <Card key={prod.id}><Link to={`/product/${prod.id}`}>{prod.product_name}</Link></Card>)}
         
    </div>
  );
};

export default SearchBar;
