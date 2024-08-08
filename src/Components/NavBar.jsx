import React from 'react'
import nike from '../assets/Images/brand_logo.png'

const NavBar = () => {
  return (
    <div className='nav-cont w-[1440px] h-[72px] flex flex-row justify-between mt-4'>
      <div className='logo '>
        <img className='w-[76px] h-[42.75px] left-[85px] ml-[60px]' src={nike} alt="" />
      </div>
      <div className='nav-mid flex flex-row gap-[30px] text-sm font-bold cursor-pointer '>
        <a className = 'hover:text-slate-500' href ="#loc">LOCATION   </a>
        <a className = 'hover:text-slate-500' href ="#home">HOME</a>
        <a className = 'hover:text-slate-500' href ="#about">ABOUT</a>
        <a className = 'hover:text-slate-500' href ="#contact">CONTACT</a>
      </div>
      <div className="nav-btn">
        <button className='w-[75px] h-[30px] top-[21px] left-[1286px] pt-[1px] pr-[16px] pb-[6px] pl-[16px] bg-[#D01C28] rounded-[24px] bottom-0 text-[white] text-sm font-bold cursor-pointer hover:bg-red-400'>
          Login
        </button>
      </div>
    </div>
  )
}

export default NavBar
