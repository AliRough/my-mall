import React, { useRef, useState } from "react";
import slider2 from "../../../Datas/slider2";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
// import "swiper/css/hash-navigation";

// import required modules
import { Navigation } from "swiper";
import NextButton from "./NextButton";
import PervButton from "./PervButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import addClasses from "swiper/core/classes/addClasses";    ///     what the fuck

export default function Slider2() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [sliderData, setSliderData] = useState(slider2);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="Swiper2 mySwiper bg-red-600 mx-4 rounded-2xl p-2 "
      >
        <SwiperSlide>
          <div className=" w-40 mx-1 h-48 p-1  text-center">
            <img
              src="images/slider2/Amazings.svg"
              alt=""
              className=" h-[35%] mx-auto"
            />
            <img
              src="images/slider2/box.png"
              alt=""
              className="h-[55%] mx-auto"
            />
            <a
              href="#"
              className="text-white flex mt-2 items-center justify-center"
            >
              مشاهده همه
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  points="9 6 15 12 9 18"
                  transform="matrix(-1 0 0 1 24 0)"
                ></polyline>
              </svg>
            </a>
          </div>
        </SwiperSlide>
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="rounded-t-md overflow-hidden">
            <div className="bg-white text-center w-40 mx-1 rounded-md overflow-hidden cursor-pointer">
              <img src={slide.src} className="m-0 flex" />
              <div>
                <div className="flex justify-between items-center">
                  <span className="bg-red-600 rounded-full text-white text-xs mx-1 p-1 ">
                    {Math.round(100 - (slide.sale * 100) / slide.price)} %
                  </span>
                  <span className="flex mx-2">
                    <span>{numberWithCommas(slide.sale)}</span>
                    <div className="text-sm">
                      تومان
                    </div>
                  </span>
                </div>
                <p className="text-gray-400  line-through">
                  {numberWithCommas(slide.price)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="flex flex-col bg-white w-40 mx-1 h-[13.3rem] p-1  text-center justify-center rounded-md">
            <span className=" mx-auto border border-blue-400 text-blue-400 rounded-full w-2/6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  points="9 6 15 12 9 18"
                  transform="matrix(-1 0 0 1 24 0)"
                ></polyline>
              </svg>
            </span>
            <p>مشاهده همه</p>
          </div>
        </SwiperSlide>

        <NextButton className="absolute z-10 top-[45%] right-5 md:block hidden bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormNextLink className=" md:text-2xl" />
        </NextButton>
        <PervButton className="absolute z-10 top-[45%] left-5 md:block hidden bg-white mx-1 p-2 rounded-full shadow-lg  border border-gray-400">
          <GrFormPreviousLink className=" md:text-2xl" />
        </PervButton>
      </Swiper>
    </>
  );
}
