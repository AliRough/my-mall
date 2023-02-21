import React from 'react'

export default function SearchBox(props) {
  return (
    
<form className={props.className}>
  <div className="flex">
    <div className="relative w-full">
        <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-gray-100 rounded-lg    outline-0  overflow-hidden" placeholder={props.placeholder} required/>
        <span  className="absolute top-0 left-0 p-2.5 text-sm font-medium ">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
    </div>
  </div>
</form>

  )
}
