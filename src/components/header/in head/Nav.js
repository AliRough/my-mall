import React, { useState } from 'react'
import { AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchBox from './SearchBox'


export default function Nav(props) {
  const [mainSubItem,setMainSubItem]=useState(props[0].children[0].children)
  const [mainItem,setMainItem]=useState(props[0].children[0].title)
  let changeItemHandler=(sub)=>{
    setMainItem(sub.title)
    setMainSubItem(sub.children)
  }
  return (
<nav className="px-2 bg-white border-gray-200">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    
    <SearchBox className='order-2 md:hidden  w-3/5 justify-end mr-3' placeholder="جستجو ...">

    </SearchBox>
    <div className="order-2 md:hidden flex  lg:order-2  justify-end w-1/5">
        <a href="#" className= "flex text-gray-800 md:border   font-medium rounded-lg text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-6 focus:outline-none">
            <AiOutlineUser className='text-2xl'/>
            <p className='hidden md:block'>ورود به حساب کاربری</p>
        </a>
        <a href="#" className=" md:border-r text-gray bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">
            <AiOutlineShoppingCart className='text-2xl '/>
        </a>
        
    </div>
    <div className={`${!props.nav&&'hidden'} order-1 w-full md:block md:w-auto`} id="navbar-dropdown">
      
      <ul className="flex flex-col p-4 m-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        {
          
          Object.entries(props).map(list=>{
            
            return(
              <li>
              <a id="dropdownNavbarLink"
                className="flex items-left justify-between w-full   font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto ml-4">
                  <div className='flex items-center'>{list[1].icon}
                  <p className='mx-3  order-1'>{list[1].title}</p> </div>
                  {
                    list[1].hasChild&& (
                    <svg className="w-5 h-5 ml-1 order-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    )
                  }
                </a>
                {/* <!-- Dropdown menu --> */}
                
                {
                    list[1].hasChild&& (
                      <>
                      <div id="dropdownNavbar" 
                      className="hidden md:absolute w-11/12 relative max-h-[80vh]  font-normal bg-white  shadow  overflow-hidden   ">
                         
                        <ul dir='rtl' className=" py-2 text-sm text-gray-700 md:w-48  mr-5 md:mr-0 h-full" >
                          {
                            Object.entries(list[1].children).map(sub=>{
                              return(
                                    <li className=' relative' onMouseEnter={()=>changeItemHandler(sub[1])} >
                                      <a href="#" className="flex px-4 py-4 hover:bg-gray-100 items-center  space-x-2">
                                        <p className='order-2'>{sub[1].title}</p>
                                        <span className='order-1'> {
                                          sub[1].icon
                                        }</span>
                                      </a>
                                    </li>
                                    
                                      
                              )
                            })
                          } 
                        </ul>
                        <div className="flex flex-col max-h-[80vh]">
                         
                          <a href="#" className=' my-5 text-xl  '> تمامی محصولات {mainItem}</a>
                          <div className="flex">
                            <div className=' flex flex-col flex-wrap max-h-[80vh] '>
                            {
                              mainSubItem.map(item=>{
                                return(
                                <>
                                    <h3 class="mb-6 text-xs font-semibold mx-3  ">{item.title} </h3>
                                    
                                      {
                                        item.children.map(des=>{
                                          return(
                                            <li class="mb-4 mx-3 ">
                                              <a href="https://github.com/themesberg/flowbite" class="hover:underline ">{des}</a>
                                            </li>
                                          )
                                          })
                                      }
                                      
                                      
                                      
                              </> 
                                )
                              })
                            }
                            </div>
                          </div>
                        </div>
                            
                    </div> 
                            
                      </>
                  )
                  }
                  
              </li>
            )
          })
        }
      </ul>
      
    </div>
  </div>
</nav>

  )
}

