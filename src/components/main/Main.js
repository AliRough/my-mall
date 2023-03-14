import React from "react";
import Slider from "./inMain/Slider";
import Slider2 from "./inMain/Slider2";
import UserSelection from "./inMain/UserSelection";

export default function Main() {
  return (
    <>
      <Slider>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96  "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/myBaby.jpg"
              alt=""
            />
          </span>
        </a>
        <a href="#">
          <img
            className="w-[99vw] relative md:h-96   "
            src="./images/placeholder.webp"
            alt=""
          />
          <span className="absolute  overflow-hidden top-0  h-full   ">
            <img
              className=" md:h-auto max-w-none md:w-full h-full"
              src="./images/upslider/zelot.jpg"
              alt=""
            />
          </span>
        </a>
      </Slider>
      <UserSelection />
      <Slider2></Slider2>
    </>
  );
}
