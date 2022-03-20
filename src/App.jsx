import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useState } from 'react'
import Menubar from './components/Menubar'

const App = () => {
  const [open,setOpen] = useState(false)

  return (
    <div className=''>

    <BrowserRouter>
    <div>
    <Navbar open={open} setOpen={setOpen} />
    <Menubar open={open} setOpen={setOpen} />
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App