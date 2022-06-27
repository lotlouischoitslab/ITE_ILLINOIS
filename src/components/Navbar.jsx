import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import ITE_LOGO from '../assets/ite_logo.png';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-centered px-4 py-2 bg-[#29b6f6] text-[white]'>
        <div>
            <img src={ITE_LOGO} alt="Logo Image" style={{width:'50px'}} />
        </div>

        {/* MENU */}

        <div>
            <ul className='hidden md:flex'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
                <li>JOIN</li>
            </ul>
        </div>

        {/* HAMBURGER */}
        <div onClick = {handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/>}
            
        </div>
        
        {/* MOBILE MENU*/}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#29b6f6] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">HOME</li>
            <li className="py-6 text-4xl">ABOUT</li>
            <li className="py-6 text-4xl">TEAM</li>
            <li className="py-6 text-4xl">CONTACT</li>
            <li className="py-6 text-4xl">JOIN</li>
        </ul>



    </div>
  )
}

export default Navbar;