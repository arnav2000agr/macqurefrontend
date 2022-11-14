import React from 'react'
import { Avatar } from '@mui/material';



const Review = () => {
  return (
    <div className=' border flex flex-col gap-4 rounded-md bg-white p-5 box_shadow'>
       <p className=' font-semibold text-xl italic'>“Everything you need to move online — all in one place.”</p>
       <p className=' text-base text-[#637F94]'>Through Maqure, Optimize your sales and supply chain. We provide easy listing and selling options while taking care of everything in the sales process including credit risk.</p>
       <div className="flex gap-3 items-center">
         <Avatar sizes='30' src='https://xsgames.co/randomusers/avatar.php?g=male' />
         <div className="avtar">
            <h4 className=' text-base font-medium'>Name</h4>
            <p className=' text-base text-[#637F94]'>Director</p>
         </div>
       </div>
    </div>
  )
}

export default Review