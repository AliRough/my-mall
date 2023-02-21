import React from "react";
import Slider from "./inMain/Slider";
import UserSelection from "./inMain/UserSelection";


export default function Main() {
  return (
    <>
      <Slider>
        <a href="#" className=" inline-block  h-[8rem] md:h-72 w-screen" >
          <div className="ay-slider  h-full bg-cover	bg-no-repeat bg-center  bg-[url(./../public/images/upSlider/myBaby.jpg)]">
            
          </div>
        </a>
        <a href="#" className=" inline-block  w-screen h-[8rem] md:h-72" >
          <div className="ay-slider2 w-full h-full  bg-cover	bg-no-repeat bg-center bg-[url(./../public/images/upSlider/zelot.jpg)]">
            
          </div>
        </a>
      </Slider>
      <UserSelection/>
    </>
  );
}
