import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Floating = () => {

    const navigate = useNavigate()

    // state variables
    const [byer, setByer] = useState(true)

    const select_seller = (e)=>{
        e.preventDefault();
        navigate('/login/seller')
        setByer(false)
    }
    const select_byer = (e)=>{
        e.preventDefault();
        navigate('/login')
        setByer(true)
    }
    return (
        <div>
            <div className="buttons flex gap-4 my-4 mb-8">
                    <button onClick={select_byer} className={`flex-1    p-3 capitalize ${byer ? 'border-code-primary border-b-2 font-bold text-code-text-heading':'border-gray-300 border-b text-code-text-color'}`}>as a buyer</button>
                    <button onClick={select_seller} className={`p-3 capitalize  flex-1  ${!byer ? 'border-code-primary border-b-2 font-bold text-code-text-heading':'border-gray-300 border-b text-code-text-color'}`} >as a seller</button>
                </div> 
        </div>
    )
}

export default Floating