import React from 'react'
import flipkart from '../assets/Images/flipkart.png'
import amazon from '../assets/Images/amazon.png'
import shoe from '../assets/Images/shoe_image.png'

const Content = () => {
  return (
    <div className='main-cont ml-[120px] flex flex-row '>
      <div className="frame1 ml-[160px] mt-10">
        <h1 className='text-[95px] font-extrabold leading-none font-poppins'>STEP UP: <br />DISCOVER <br /> THE BEST</h1>
        <p className='leading-snug text-[16px] mt-[16px] font-semibold font-poppins ml-3'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
        <div className="btn-field flex flex-row ml-3 py-4 gap-3">
            <button className="btn1 w-[85px] h-[30px] top-[21px] left-[1286px] pt-[4px] pr-[16px] pb-[6px] pl-[16px] bg-[#D01C28] rounded-sm bottom-0 text-[white] text-[10px] cursor-pointer hover:bg-red-400">SHOP NOW</button>
            <button className="btn2 w-[95px] h-[30px] top-[21px] left-[1286px] pt-[4px] pr-[16px] pb-[6px] pl-[16px] bg-[white] rounded-sm  bottom-0 text-[gray]  text-[10px] cursor-pointer border-slate-500 hover:bg-slate-50">LEARN MORE</button>
        </div>
        <p className='ml-4 text-gray-600 '>Also Available On</p>
        <div className="img-grp flex flex-row gap-4 ml-4 mt-3">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
        </div>
        
      </div>
      <div className="shoe-img w-[530px] h-[487px] mt-[60px]">
        <img src={shoe} alt="" />
      </div>
    </div>
  )
}

export default Content
