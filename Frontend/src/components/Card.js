import React from 'react'
import { HiUserCircle } from 'react-icons/hi'



const Card = () => {
  return (
    <div className=' flex flex-col max-w-[280px] bg-white rounded gap-4 box_shadow p-4'>
        <HiUserCircle size={50}/>
        <h1 className=' text-2xl font-semibold text-[#00212F]'>Optimize Supply Chain</h1>
        <p className=' text-base text-[#637F94]'>Through Maqure, Optimize your sales and supply chain. We provide easy listing and selling options while taking care of everything in the sales process including credit risk.</p>
    </div>
  )
}

export default Card