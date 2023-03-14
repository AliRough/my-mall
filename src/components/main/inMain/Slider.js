import React from "react";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NextButton from "./NextButton";
import PervButton from "./PervButton";
import {GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
export default function Slider(props) {
  const swiper = useSwiper();
  
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative"
    >
      {props.children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      <div className="absolute bottom-5 right-16 md:block hidden z-10">

      <NextButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400" ><GrFormNextLink className=" md:text-2xl"/></NextButton>
      <PervButton className=" bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400" ><GrFormPreviousLink className=" md:text-2xl"/></PervButton>
     
      </div>
    </Swiper>
  );
}
