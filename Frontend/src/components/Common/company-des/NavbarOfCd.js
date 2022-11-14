import React from 'react'

import img from "../../../images/img.png";
export default function NavbarOfCd() {
  return (
    <div className='aside w-[195px] h-[550px] sticky top-4 my-4 ml-16 bg-[#FBFBFB] z-[1] shadow-2xl'>
        <logo>
        <img src={img} alt="" className='m-auto mt-4 ' />
       
        </logo>
        <ul className='text-[16px] font-[400] text-center m-auto flex-row  '>
        <li className='m-4'>Overview</li>
        <li className='m-4 bg-[#1672DE] py-2 px-4 h-[39px] w-[155px] rounded text-center  text-[#FBFBFB]'>About Us</li>
        <li className='m-4'>Documnet & Certificate</li>
        <li className='m-4'>Product</li>
     

        </ul>



       

    </div>
  )
}
