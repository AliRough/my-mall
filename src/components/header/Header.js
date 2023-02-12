import React ,{useState} from 'react'
import UpHeader from './in head/UpHeader'
import Nav from './in head/Nav'
import SearchBox from './in head/SearchBox'
import {AiFillHome, AiFillQuestionCircle,AiOutlineLaptop,AiOutlineTool} from 'react-icons/ai'
import {SlLayers } from 'react-icons/sl'
import {FaShoppingBasket, FaBaby} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {TbShirt} from 'react-icons/tb'
import {GiShoppingCart} from 'react-icons/gi'
import {MdLocalFlorist} from 'react-icons/md'


export default function Header() {
const [listMenu,setListMenu]=useState([
 { title:'دسته بندی ',
  icon:<SlLayers/>,
  hasChild:true,
  children:[
    {
      title:"موبایل",
      icon:<BsPhone/>,
      children:[

        {
          title:'برند های مختلف گوشی',
          children:[" گوشی اپل",' گوشی سامسونگ',' گوشی شیائومی',' گوشی نوکیا',' گوشی هواوی',' گوشی آنر',' گوشی موتورولا',' گوشی جی پلاس',' گوشی وان پلاس',' گوشی جی ال ایکس',' گوشی بلو',' گوشی کاترپیلار', ' گوشی ویوو']
          
        },
        {
          title:'برند های مختلف گوشی',
          children:['گوشی اپل','گوشی سامسونگ','گوشی هواوی','گوشی هواوی','گوشی هواوی','گوشی هواوی','گوشی هواوی']
          
        },
        {
          title:'برند های مختلف گوشی',
          children:['گوشی اپل','گوشی سامسونگ','گوشی هواوی','گوشی هواوی','گوشی هواوی','گوشی هواوی','گوشی هواوی']
          
        },
       
      ],

    },
    {
      title:"کالای دیجیتال",
      icon:<AiOutlineLaptop/>,
      children:[],

    },
    {
      title:"خودرو ،ابزار و تجهیزات صنعتی",
      icon:<AiOutlineTool/>,
      children:[],

    },
    {
      title:"مد و پوشاک",
      icon:<TbShirt/>,
      children:[],

    },
    {
      title:"کالاهای سوپر مارکتی",
      icon:<GiShoppingCart/>,
      children:[],

    },
    {
      title:"محصولات بومی محلی",
      icon:<MdLocalFlorist/>,
      children:[],

    },
    {
      title:"اسباب بازی کودک و نوزاد",
      icon:<FaBaby/>,
      children:[],

    },
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
    <Nav nav={isNavOpen}   {...listMenu}/>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
    <div className=' h-96'>fgngopkf</div>
   </>
  )
}
