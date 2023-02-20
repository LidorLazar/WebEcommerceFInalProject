import React, {useEffect, useState } from "react";
import Carousel  from 'react-bootstrap/Carousel';
import  {selectProduct, GetAllProducttAsync} from '../Product/ProductSlice'
import { useAppSelector, useAppDispatch } from "../app/hooks";



const Carusel = () => {
    const image = useAppSelector(selectProduct);
    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(GetAllProducttAsync()) }, [])
    const SERVER = "http://127.0.0.1:8000"
  
    const [imageCarusla, setImageCarusla] = useState('')
    const [imageCarusla2, setImageCarusla2] = useState('')
    const [imageCarusla3, setImageCarusla3] = useState('')
    useEffect(() => {
        if(image[0]){
            setImageCarusla(image[0].image)
            setImageCarusla2(image[1].image)
            setImageCarusla3(image[1].image3)
        }
    }, [])


return (
  <div style={{backgroundSize: 'cover', backgroundPosition:'center'}}>
    <Carousel variant="dark">
    <Carousel.Item interval={1000} >
      <img src= "" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={1000} >
      <img src= "" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
  </Carousel>

  </div>
  );
}
    


export default Carusel;