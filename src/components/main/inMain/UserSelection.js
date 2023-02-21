import React, { useState } from "react";
import userSelection from "../../../Datas/userSelection";
import {FiMoreHorizontal} from 'react-icons/fi'
export default function UserSelection() {
  const [selection, setSelection] = useState(userSelection);
  return (
    <div className="flex flex-wrap  w-screen justify-around md:px-20">
      {selection.map((select) => (
        <div className=" w-1/4 md:w-fit">
          <img
            src={select.src}
            className="mx-auto "
            height="52"
            width="52"
            alt={select.title}
          />
          <p className="text-center text-xs">{select.title}</p>
        </div>
      ))}
      <a href="#" className=" w-1/4 md:w-fit ">
        <FiMoreHorizontal className=" mx-auto p-3 bg-gray-200 rounded-full text-gray-400 w-14 h-14"/>
        <p className="text-center text-xs">بیشتر</p>
      </a>
    </div>
  );
}
