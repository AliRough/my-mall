import React ,{useState} from 'react'
import UpHeader from './in head/UpHeader'
import Nav from './in head/Nav'
import SearchBox from './in head/SearchBox'
import {AiFillHome, AiFillQuestionCircle} from 'react-icons/ai'
import {SlLayers } from 'react-icons/sl'
import {FaShoppingBasket} from 'react-icons/fa'


export default function Header() {
const [listMenu,setListMenu]=useState([
 { title:'دسته بندی ',
  icon:<SlLayers/>,
  hasChild:true,
  children:[
    {title:'آیتم 1',hasChild:true,children:[
      {title:'آیتم زیرین 1',hasChild:false},
      {title:'آیتم زیرین 2',hasChild:false}
    ]},
    {title:'آیتم 2',hasChild:false},
    {title:'آیتم 3',hasChild:false}
  ]
},
 { title:'صفحه اصلی ',
  icon:<AiFillHome/>,
  hasChild:false,
  
  
},
 { title:'محصولات ما ',
  icon:<FaShoppingBasket/>,
  hasChild:false,
  
},
 { title:'سوالی دارید ',
  icon:<AiFillQuestionCircle/>,
  hasChild:false,
  
},

])
const[isNavOpen,setIsNavOpen]=useState(false)

let openNavHandler=()=>{
  setIsNavOpen((val)=>{
    return !val
  })
}


  return (

   <>
    <UpHeader openNav={openNavHandler} {...listMenu}>
      <SearchBox  placeholder="نام کالا ، برند و  یا دسته مورد نظر خود را جستجو کنید ..." />
    </UpHeader>
    <Nav nav={isNavOpen} {...listMenu}/>
   </>
  )
}
