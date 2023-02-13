import React from 'react'

export default function SubLi(props) {
  return (
    <li className=' relative' onMouseEnter={()=>props.onChengeSub(props[1])} >
        <a href="#" className="flex px-4 py-4 hover:bg-gray-100 items-center  space-x-2">
        <p className='order-2'>{props[1].title}</p>
        <span className='order-1 text-lg'> {
            props[1].icon
        }</span>
        </a>
    </li>
  )
}
