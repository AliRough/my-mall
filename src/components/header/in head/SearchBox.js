import React from 'react'

export default function SearchBox(props) {
  return (
    
<form className={props.className}>
    <div className="flex">
       
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-gray-100 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  outline-0 " placeholder={props.placeholder} required/>
            <button type="submit" className="absolute top-0 left-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-l-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

  )
}
