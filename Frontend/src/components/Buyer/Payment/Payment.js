import React, { useState, useEffect } from 'react'
import img from '../../../images/payment.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import OnBoardHeader from '../../OnBoardHeader';

const Payment = ({ elem }) => {
    return (
        <>
        <OnBoardHeader/>
            <div className="flex justify-center w-4/5 h-full mt-24  mx-auto rounded-md box_shadow">
                <div className=' border rounded-md'>
                    <img src={img} alt="" srcset="" className='rounded-md box_shadow' />
                </div>
            </div>
        </>
    )
}

export default Payment