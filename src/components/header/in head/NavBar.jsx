import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import SubLi from "./SubLi";

export default function NavBar(props) {
  const [mainSubItem, setMainSubItem] = useState(props[0].children[0]); //defult sub item
  let changeItemHandler = (sub) => {
    setMainSubItem(sub);
  };
  let showLiHandler = (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("active");
    } else if (e.target.parentElement.tagName === "LI") {
      e.target.parentElement.classList.toggle("active");
    } else if (e.target.parentElement.parentElement.tagName === "LI") {
      e.target.parentElement.parentElement.classList.toggle("active");
    }
  };
  return (
    <nav className="bg-white border-gray-200 ">
      <div
        className={`flex container  flex-wrap items-center justify-between mx-auto  border-y md:border-0`}
      >
        <SearchBox
          className="order-2 md:hidden  w-3/5 justify-end my-1"
          placeholder="جستجو ..."
        />
        {/*start socalBox*/}
        <div className="order-2 md:hidden flex  lg:order-2  justify-end w-1/5">
          <a
            href="#"
            className="flex text-gray-800 md:border   font-medium rounded-lg text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-6 focus:outline-none"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="hidden md:block">ورود به حساب کاربری</p>
          </a>
          <a
            href="#"
            className=" md:border-r text-gray bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
          >
            <AiOutlineShoppingCart className="text-2xl " />
          </a>
        </div>
        {/*end socalBox*/}

        {/*start sideBar*/}
        <div
          className={`${
            !props.nav && "hidden"
          } z-50 md:hidden flex fixed top-0 left-0  w-screen h-screen bg-[rgba(0,0,0,.5)] `}
        >
          <button
            id="ay-navBtn"
            onClick={props.closeSideBar}
            type="button"
            className="order-2 w-2/5 "
          ></button>
          <div className=" w-3/5 max-h-max bg-white overflow-scroll">
            <div className="flex  justify-center py-4">
              <a href="#">
                <img src="images/logo.svg" alt="Logo" />
              </a>
            </div>
            <div className="mx-3 h-screen">
              <ul className=" border-y">
                {Object.entries(props).map((list) => {
                  if (list[0] !== "0") {
                    return (
                      <li className="transition-transform">
                        <a href="#" className="flex items-center my-2 ">
                          <span className="ml-2">{list[1].icon}</span>
                          <span>{list[1].title}</span>
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
              <ul className="">
                <h3 className="font-bold mt-2">{props[0].title}</h3>
                {Object.entries(props[0].children).map((sub) => {
                  return (
                    <li className="my-4 ">
                      <div
                        className="flex justify-between hover:text-red-600"
                        onClick={(e) => showLiHandler(e)}
                      >
                        <span>{sub[1].title}</span>
                        <svg
                          className=""
                          width="20px"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <ul className=" hidden bg-gray-50 rounded px-2 ">
                        <a
                          href="#"
                          className=" text-sm text-gray-500 font-semibold "
                        >
                          <li className="my-3 pt-3">همه موارد این دسته</li>
                        </a>
                        {Object.entries(sub[1].children).map((subSub) => {
                          return (
                            <li>
                              <div
                                className="flex justify-between hover:text-red-600 my-2"
                                onClick={(e) => showLiHandler(e)}
                              >
                                <span>{subSub[1].title}</span>
                                <svg
                                  className=""
                                  width="20px"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <ul className="hidden bg-gray-200 rounded px-2 ">
                                <a
                                  href="#"
                                  className=" text-sm text-gray-500 font-semibold "
                                >
                                  <li className="my-3 pt-3">همه موارد این دسته</li>
                                </a>
                                {subSub[1].children.map((liItem) => {
                                  return (
                                    <li>
                                      <div className="flex justify-between hover:text-red-600">
                                        <span className="my-2 text-sm font-semibold">
                                          {liItem}
                                        </span>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/*end sideBar*/}
        {/*start navbar*/}
        <div
          className={` hidden items-center justify-between md:flex w-full `}
        >
          <ul className="flex  py-3   text-sm rounded-lg font-medium bg-white z-50">
            {Object.entries(props).map((list) => {
              return (
                <li className="transition-transform  ease-in ">
                  <a className="flex items-left font-medium text-gray-500 hover:text-red-700 p-0 border-b-2 border-b-transparent hover:border-b-red-700 ml-4 duration-500 ">
                    <div className="flex items-center">
                      {list[1].icon}
                      <p className="mx-3  order-1">{list[1].title}</p>
                    </div>
                    {list[1].hasChild && (
                      <svg
                        className="w-5 h-5 ml-1 order-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </a>
                  {/* <!-- Dropdown menu --> */}
                  {list[1].hasChild && (
                    <>
                      <div
                        id="dropdownNavbar"
                        className="hidden md:absolute w-11/12 relative max-h-[80vh]  font-normal bg-white  shadow overflow-y-auto    "
                      >
                        <ul
                          dir="rtl"
                          className=" py-2 text-sm text-gray-700 md:w-48  mr-5 md:mr-0 h-full"
                        >
                          {Object.entries(list[1].children).map((sub) => {
                            return (
                              <SubLi onChengeSub={changeItemHandler} {...sub} />
                            );
                          })}
                        </ul>
                        <div className="flex flex-col max-h-[90vh]">
                          <a href="#" className=" my-5 text-xl  ">
                            {" "}
                            تمامی محصولات {mainSubItem.title}
                          </a>
                          <div className="flex">
                            <div className=" flex flex-col flex-wrap max-h-[60vh] ">
                              {mainSubItem.children.map((item) => {
                                return (
                                  <>
                                    <h3 className="mb-6 text-xs font-semibold mx-3 px-2 border-r-2 border-red-600 hover:text-red-700  ">
                                      {item.title}{" "}
                                    </h3>

                                    {item.children.map((des) => {
                                      return (
                                        <li className="mb-4 mx-3 hover:text-red-700 ">
                                          <a
                                            href="https://github.com/themesberg/flowbite"
                                            className=" "
                                          >
                                            {des}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <a href="#" className=" flex">
            <GoLocation />
            <span className="mr-4 text-sm">لطفا شهر خود را انتخاب کنید</span>
          </a>
        </div>
        {/*end navbar*/}
      </div>
    </nav>
  );
}
