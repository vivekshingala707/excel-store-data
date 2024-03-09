import React from 'react'
import {Paintbrush} from "lucide-react"
import {Menu} from "lucide-react"
import Logo from "../../src/assets/react.svg"
import {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  shadow-xl px-5'>
        <div className='flex items-center justify-center py-4'>
            <div><img src={Logo} alt="" /></div>
        </div>
            <div className=' flex items-center justify-center space-x-6 uppercase font-semibold text-sm'>
                <Link className='cursor-pointer'>Home</Link>
                <Link className='cursor-pointer'>About Us</Link>
                <Link to="stooredata" className='cursor-pointer'>Contact us</Link>
                <Link to="products" className='cursor-pointer'>Products</Link>
            </div>
        <div className='flex items-center justify-center space-x-4'>
        <Paintbrush />
            <button>Login</button>
            <button className='bg-red-500 px-4 text-white rounded py-1 '>Sign up</button>
        <Menu className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar