import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from 'axios';
import "slick-carousel/slick/slick-theme.css";
// import list from "../../public/list.json"
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBooks() {
      const[book , setBook]=useState([])
  useEffect(()=>{
    const getBook =async()=>{
      try{
      const res= await axios.get("https://bookstore01.onrender.com/book");
      const data=res.data.filter((data) => data.category === "Free")
      console.log(data)
      setBook(data)
      } catch (error)
      {
          console.log(error);
      }
    };
    getBook();
  },[]);

    // const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container my-3 mx-auto md:px-20 px-4' >
                <div>
                    <h1 className='text-2xl font-extrabold'>
                        Free Book Category
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni earum corporis natus quia, ea praesentium reprehenderit tempore sit in.</p>
                </div>
           

<div className='text-black my-5 mt-4 px-1 sm:px-2' >
            <Slider {...settings}>
              {book.map((item)=>(
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
</div>
 </div>
        </>
    )
}

export default FreeBooks
