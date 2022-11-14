import React from 'react'
import img from "../../../images/img.png";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function OtherCompany() {
  return (

    <div className='flex flex-col border-2  p-4 justify-center text-center bg-white'>
      
       <img src={img}  className="w-[100px] mx-auto " alt="" />
       <h2 className='mb-2 text-[24px] font-[400]'>Sasol</h2>
       <p className='mb-2 text-[#637F94] text-[14px] font-[400]'>Sasol Chemicals innovate for a better world</p>
       <BsArrowDownCircleFill className=" text-[30px] text-[#004AA2] m-auto -rotate-90 shadow-2xl"/>
     
    </div>
  )
}
