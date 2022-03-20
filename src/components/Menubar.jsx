import React from 'react'
import { Link } from 'react-router-dom'

const listItem = [
    {
        id:'home',
        item:'Home',
        path:'home',
    },
    {
        id:'services',
        item:'Services',
        path:'services',
    },
    {
        id:'doctors',
        item:'Doctors',
        path:'doctors',
    },
    {
        id:'pathology',
        item:'Pathology',
        path:'pathology',
    },
    {
        id:'contact',
        item:'Contact',
        path:'contact',
    },
]
const Menubar = ({open,setOpen}) => {
  return (
      <div className={open ? 'absolute right-0 block top-5 transition-all duration-700 ease ' : 'absolute top-5 -right-1/2 sm:hidden transition-all duration-700 ease'}>


    <div className="bg-blue-900 text-white font-bold text-xl w-screen-1/2">
        <nav className="flex flex-col -mt-10 h-screen justify-evenly align-middle">
            {listItem.map(item=><Link to={item.path} key={item.id} setOpen={()=>setOpen(!open)} className='mx-auto'>{item.item}</Link>)}
        </nav>
    </div>
      </div>
  )
}

export default Menubar