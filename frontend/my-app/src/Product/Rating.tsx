import React from 'react'
import { selectOneProduct } from '../Product/ProductSlice'
import { useAppSelector } from "../app/hooks";
import { selectRating } from '../reviews/ReviewSlice'
 
 

const Rating = ( ) => {
    const OneProd = useAppSelector(selectOneProduct);
    const rating = useAppSelector(selectRating)


    // This component check the rating product and reurnd star accordingly
  return (
    
    <div>
    {OneProd.map((item, index) => <div key={index} className='rating'>
        {/* Check if rating bigger 1 so i get a star or helf star  */}
        <samp>
            <i className={rating >= 1? 'fas fa-star': rating >= 0.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 2 so i get a star or helf star  */}
        <samp>
            <i className={rating >= 2? 'fas fa-star': rating >= 1.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 3 so i get a star or helf star  */}
        <samp>
            <i className={rating >= 3? 'fas fa-star': rating >= 2.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 4 so i get a star or helf star  */}
        <samp>
            <i className={rating >= 4? 'fas fa-star': rating >= 4.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 5 so i get a star or helf star  */}
        <samp>
            <i className={rating >= 5? 'fas fa-star': rating >= 4.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
    <span>
        {rating && rating} / 5 
    </span></div>)}
    </div>
    
  )
}

export default Rating