import {Link, NavLink} from 'react-router-dom'
import {MenuIcon} from '@heroicons/react/outline'

const Navbar = ({open,setOpen}) => {

  return (
  <header className='fixed top-0 left-0 z-30 w-screen bg-blue-900 text-white text-lg'>
    <div className="container py-3 flex justify-between align-middle">
      <nav className="flex-none cursor-pointer font-bold">
        <Link to='/'>MCH</Link></nav>
      <div className="flex-none hidden sm:block space-x-1">

      <nav className="flex-none justify-self-center flex gap-10">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services/#services'>Services</NavLink>
        <NavLink to='/pathology/#pathology'>Pathology</NavLink>
        <NavLink to='/doctors/#doctors'>Doctors</NavLink>
        <NavLink to='/contact/#contact'>Contact</NavLink>
      </nav>
      </div>

      <div className="hidden sm:block flex-none justify-self-end space-x-5">
        <button className='px-3 py-1 bg-red-700 rounded-md hover:bg-red-500'>REGISTER</button>
        <button className='px-3 py-1 bg-blue-700 rounded-md hover:bg-blue-500'>LOG IN</button>
      </div>
      <button className='sm:hidden' onClick={()=>setOpen(!open)}>
<MenuIcon className='w-8 h-8' />
      </button>
    </div>
  </header> 
  )
}

export default Navbar